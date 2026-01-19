import { ArrowLeft, ArrowRight, Play, Pause, Upload, Loader2, Download, Film, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { uploadFile, getAssets } from '../lib/storage';
import Footer from '../components/Footer';
import QuickAccess from '../components/QuickAccess';
import {
  VideoProject,
  createVideoProject,
  addVideoClip,
  addTextOverlay,
} from '../lib/videoEngine';
import { createRenderEngine, RenderProgress } from '../lib/renderEngine';

interface PageProps {
  onNavigate: (page: number) => void;
}

interface Asset {
  id: string;
  file_name: string;
  file_url: string;
  asset_type: string;
}

export default function Page10({ onNavigate }: PageProps) {
  const { user } = useAuth();
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAssets, setSelectedAssets] = useState<Asset[]>([]);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [renderProgress, setRenderProgress] = useState<RenderProgress | null>(null);
  const [moviePrompt, setMoviePrompt] = useState('A magical Christmas Eve story with twinkling lights, snow falling gently, and Santa preparing for his journey');
  const [duration, setDuration] = useState(30);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (user) {
      loadAssets();
    }
  }, [user]);

  useEffect(() => {
    if (generatedVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [generatedVideo]);

  const loadAssets = async () => {
    if (!user) return;

    try {
      const allAssets = await getAssets(user.id);
      setAssets(allAssets);
    } catch (error) {
      console.error('Error loading assets:', error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !user) return;

    setUploading(true);
    try {
      const uploadPromises = Array.from(files).map(file => uploadFile(file, user.id));
      const results = await Promise.all(uploadPromises);

      const successCount = results.filter(r => r.success).length;
      if (successCount > 0) {
        await loadAssets();
      }

      if (results.some(r => !r.success)) {
        alert(`${successCount} of ${files.length} files uploaded successfully`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload files');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleAssetSelection = (asset: Asset) => {
    setSelectedAssets(prev => {
      const isSelected = prev.some(a => a.id === asset.id);
      if (isSelected) {
        return prev.filter(a => a.id !== asset.id);
      } else {
        return [...prev, asset];
      }
    });
  };

  const generateMovie = async () => {
    if (selectedAssets.length === 0) {
      alert('Please select at least one asset to generate a movie');
      return;
    }

    setGenerating(true);
    setRenderProgress(null);

    try {
      // Create video project with title
      const project = createVideoProject(moviePrompt);

      // CRITICAL: Set the project duration to match the slider duration
      project.duration = duration;

      // Calculate how many times to loop through assets to fill duration
      const videoAssets = selectedAssets.filter(a => a.asset_type === 'video');
      const imageAssets = selectedAssets.filter(a => a.asset_type === 'image');
      const allSelectedAssets = [...videoAssets, ...imageAssets];

      let currentTime = 0;
      const baseClipDuration = 5;
      let assetIndex = 0;

      // Keep adding clips until we reach the target duration
      while (currentTime < duration) {
        const asset = allSelectedAssets[assetIndex % allSelectedAssets.length];
        const remainingTime = duration - currentTime;
        const clipDuration = Math.min(baseClipDuration, remainingTime);

        // Store asset URL in a map for the render engine
        addVideoClip(project, asset.file_url, currentTime, clipDuration, 0);

        currentTime += clipDuration;
        assetIndex++;
      }

      // Add title overlay with the prompt at the beginning
      addTextOverlay(project, moviePrompt.substring(0, 50) + (moviePrompt.length > 50 ? '...' : ''), 0, Math.min(5, duration), 50, 10);

      // Add scene markers throughout the video to create narrative flow
      const sceneTexts = [
        'The Beginning',
        'The Journey Continues',
        'A Magical Moment',
        'The Adventure Unfolds',
        'Coming Together',
        'The Grand Finale'
      ];

      const sceneDuration = duration / (sceneTexts.length + 1);
      sceneTexts.forEach((sceneText, index) => {
        const sceneStartTime = sceneDuration * (index + 1);
        if (sceneStartTime < duration - 5) {
          addTextOverlay(project, sceneText, sceneStartTime, 3, 50, 50);
        }
      });

      // Render the project
      const renderEngine = createRenderEngine();
      const videoBlob = await renderEngine.renderProject(
        project,
        { format: 'webm', quality: 'medium' },
        (progress) => {
          setRenderProgress(progress);
        }
      );

      // Create URL for generated video
      const url = URL.createObjectURL(videoBlob);
      setGeneratedVideo(url);
      setIsPlaying(false);

    } catch (error) {
      console.error('Generation error:', error);
      alert('Failed to generate movie: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setGenerating(false);
    }
  };

  const downloadVideo = () => {
    if (!generatedVideo) return;

    const a = document.createElement('a');
    a.href = generatedVideo;
    a.download = `christmas-eve-story-${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatDuration = (seconds: number): string => {
    if (seconds < 60) {
      return `${seconds} seconds`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes} minutes`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return minutes > 0 ? `${hours}h ${minutes}m` : `${hours} hours`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 text-white flex flex-col">
      <div className="flex-1 flex flex-col px-4 py-6">
        <div className="max-w-7xl w-full mx-auto">
          <h1 className="text-xl md:text-3xl font-black text-purple-400 mb-1 text-center flex items-center justify-center gap-3">
            <Film className="w-6 h-6" />
            AI MOVIE GENERATOR
          </h1>
          <p className="text-center text-slate-400 mb-4 text-sm">Create your story at any duration from your assets</p>

          {/* Controls Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Movie Prompt */}
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30">
              <label className="block text-xs font-semibold text-purple-300 mb-2">Movie Prompt</label>
              <textarea
                value={moviePrompt}
                onChange={(e) => setMoviePrompt(e.target.value)}
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 resize-none"
                rows={3}
                placeholder="Describe your story..."
              />
            </div>

            {/* Duration Slider */}
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30">
              <label className="block text-xs font-semibold text-purple-300 mb-2">
                Video Duration: <span className="text-white font-bold">{formatDuration(duration)}</span>
              </label>
              <input
                type="range"
                min="10"
                max="5400"
                step="10"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-2 bg-purple-900/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>10s</span>
                <span>5min</span>
                <span>30min</span>
                <span>60min</span>
                <span>90min</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Assets will loop to fill the duration
              </p>
            </div>
          </div>

          {/* Upload Assets */}
          <div className="mb-4 text-center">
            <button
              onClick={() => document.getElementById('asset-upload')?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              <Upload className="w-4 h-4" />
              {uploading ? 'Uploading...' : 'Upload Assets'}
            </button>
            <input
              id="asset-upload"
              type="file"
              multiple
              accept="video/*,image/*,audio/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>

          {/* Asset Selection Grid */}
          {assets.length > 0 && (
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 mb-4">
              <h3 className="text-sm font-semibold text-purple-300 mb-3">
                Select Assets ({selectedAssets.length} selected)
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-h-48 overflow-y-auto">
                {assets.map((asset) => {
                  const isSelected = selectedAssets.some(a => a.id === asset.id);
                  return (
                    <button
                      key={asset.id}
                      onClick={() => toggleAssetSelection(asset)}
                      className={`relative p-1.5 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-purple-900/30 bg-black/30 hover:border-purple-500/50'
                      }`}
                    >
                      <div className="aspect-video bg-black rounded overflow-hidden mb-1">
                        {asset.asset_type === 'video' ? (
                          <video src={asset.file_url} className="w-full h-full object-cover" />
                        ) : asset.asset_type === 'image' ? (
                          <img src={asset.file_url} alt={asset.file_name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-purple-400">
                            <Upload className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 truncate">{asset.file_name}</p>
                      {isSelected && (
                        <div className="absolute top-0.5 right-0.5 bg-purple-500 rounded-full p-0.5">
                          <Sparkles className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Generate Button */}
          <div className="mb-4 text-center">
            <button
              onClick={generateMovie}
              disabled={generating || selectedAssets.length === 0}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-purple-800 disabled:to-pink-800 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-bold text-base transition-all shadow-lg"
            >
              {generating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Movie
                </>
              )}
            </button>
          </div>

          {/* Render Progress */}
          {renderProgress && (
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 mb-4">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-xs font-semibold text-purple-300">{renderProgress.message}</span>
                <span className="text-xs text-slate-400">{Math.round(renderProgress.percentage)}%</span>
              </div>
              <div className="w-full bg-purple-900/30 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${renderProgress.percentage}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1.5">
                Frame {renderProgress.currentFrame} of {renderProgress.totalFrames}
                {renderProgress.estimatedTimeRemaining > 0 && ` • ${renderProgress.estimatedTimeRemaining}s remaining`}
              </p>
            </div>
          )}

          {/* Generated Video Preview */}
          {generatedVideo && (
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 mb-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-purple-500/30 mb-3">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  src={generatedVideo}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  controls
                />
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-all"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <button
                  onClick={downloadVideo}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate(9)}
              className="flex items-center justify-center gap-2 bg-black text-white font-bold px-6 py-3 rounded-lg text-sm hover:bg-purple-900 transition-all border border-purple-500"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={() => onNavigate(11)}
              className="flex items-center justify-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg text-sm hover:bg-purple-500 transition-all"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <QuickAccess onNavigate={onNavigate} />
      <Footer showDoxyCredit={true} />
    </div>
  );
}
