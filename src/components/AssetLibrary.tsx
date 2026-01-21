import { useState, useEffect } from 'react';
import { Search, Folder, Film, Music, Image as ImageIcon, FileText, ArrowLeft, Upload, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface MediaFile {
  id: string;
  filename: string;
  file_type: string;
  file_size_bytes: number;
  storage_path: string;
  created_at: string;
}

interface AssetLibraryProps {
  toolName: string;
  mode: 'upload' | 'create';
  onBack: () => void;
}

export default function AssetLibrary({ toolName, mode, onBack }: AssetLibraryProps) {
  const { user } = useAuth();
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadMediaFiles();
    }
  }, [user]);

  const loadMediaFiles = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('media_files')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMediaFiles(data || []);
    } catch (error) {
      console.error('Error loading media files:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFiles = mediaFiles.filter((file) => {
    const matchesSearch = file.filename.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || file.file_type.startsWith(filter);
    return matchesSearch && matchesFilter;
  });

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('video')) return <Film className="w-8 h-8 text-purple-400" />;
    if (fileType.startsWith('audio')) return <Music className="w-8 h-8 text-purple-400" />;
    if (fileType.startsWith('image')) return <ImageIcon className="w-8 h-8 text-purple-400" />;
    return <FileText className="w-8 h-8 text-purple-400" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  return (
    <div className="min-h-screen p-8 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white font-bold px-6 py-3 rounded-lg transition-all border border-purple-500"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">{toolName}</h1>
          <p className="text-purple-400 flex items-center gap-2 mt-1">
            {mode === 'upload' ? (
              <>
                <Upload className="w-4 h-4" />
                Upload Mode
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Create with AI Mode
              </>
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your media library..."
            className="w-full pl-12 pr-4 py-3 bg-black/30 border border-purple-500/50 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
          />
        </div>

        <div className="flex gap-2">
          {['all', 'video', 'audio', 'image'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                filter === f
                  ? 'bg-purple-600 text-white'
                  : 'bg-black/30 text-white/70 border border-purple-500/30 hover:border-purple-400'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-white/70">Loading your media library...</p>
        </div>
      ) : filteredFiles.length === 0 ? (
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-12 text-center">
          <Folder className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h3 className="text-xl font-bold mb-2">No Media Files Found</h3>
          <p className="text-white/70">
            {searchQuery || filter !== 'all'
              ? 'Try adjusting your search or filter'
              : 'Upload or create assets using AI tools to get started'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 rounded-lg p-4 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">{getFileIcon(file.file_type)}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold truncate mb-1">{file.filename}</h4>
                  <p className="text-sm text-white/60">{formatFileSize(file.file_size_bytes)}</p>
                  <p className="text-xs text-purple-400 mt-1">
                    {new Date(file.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
