import { ArrowLeft, ArrowRight, Search, Upload, Sparkles, Play } from 'lucide-react';
import { useState } from 'react';
import { AITool, searchTools } from '../data/aiTools';
import Footer from './Footer';
import QuickAccess from './QuickAccess';

interface AIToolsHubProps {
  tools: AITool[];
  pageNumber: number;
  onNavigate: (page: number) => void;
  onOpenAssetPage: (toolName: string, mode: 'upload' | 'create') => void;
}

export default function AIToolsHub({ tools, pageNumber, onNavigate, onOpenAssetPage }: AIToolsHubProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  const displayedTools = searchQuery ? searchTools(searchQuery, pageNumber) : tools;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 text-white flex flex-col">
      <button className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 transition-all hover:scale-110">
        <Play className="w-6 h-6 text-white" />
      </button>

      <div className="flex-1 flex flex-col px-4 py-12">
        <div className="max-w-7xl w-full mx-auto">
          <h1 className="text-5xl font-black text-purple-400 mb-4 text-center">
            AI Tools Hub - Page {pageNumber}
          </h1>
          <p className="text-xl text-white/70 text-center mb-8">
            120 AI Tools Available on This Page
          </p>

          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI tools..."
                className="w-full pl-12 pr-4 py-4 bg-black/30 border border-purple-500/50 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {displayedTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className="bg-black/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 rounded-lg p-4 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <h3 className="text-sm font-semibold text-center line-clamp-2">{tool.name}</h3>
                <p className="text-xs text-purple-400 text-center mt-1">{tool.category}</p>
              </button>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => onNavigate(pageNumber - 1)}
              disabled={pageNumber <= 4}
              className="flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-900 transition-all border border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={() => onNavigate(pageNumber + 1)}
              disabled={pageNumber >= 9}
              className="flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {selectedTool && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-black/90 rounded-2xl border border-purple-500/50 p-8 max-w-md w-full">
            <div className="text-6xl mb-4 text-center">{selectedTool.icon}</div>
            <h2 className="text-2xl font-bold mb-2 text-center">{selectedTool.name}</h2>
            <p className="text-purple-400 text-center mb-6">{selectedTool.category}</p>

            <div className="flex gap-3 mb-4">
              <button
                onClick={() => {
                  onOpenAssetPage(selectedTool.name, 'upload');
                  setSelectedTool(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all"
              >
                <Upload className="w-5 h-5" />
                Upload
              </button>
              <button
                onClick={() => {
                  onOpenAssetPage(selectedTool.name, 'create');
                  setSelectedTool(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Create with AI
              </button>
            </div>

            <button
              onClick={() => setSelectedTool(null)}
              className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition-all border border-purple-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <QuickAccess onNavigate={onNavigate} />
      <Footer />
    </div>
  );
}
