import { Home, Upload, Box, Film, Sparkles } from 'lucide-react';

interface QuickAccessProps {
  onNavigate: (page: number) => void;
}

export default function QuickAccess({ onNavigate }: QuickAccessProps) {
  const quickLinks = [
    { icon: Home, label: 'Home', page: 0 },
    { icon: Sparkles, label: 'AI Tools', page: 3 },
    { icon: Upload, label: 'Upload', page: 9 },
    { icon: Box, label: 'Media Box', page: 10 },
    { icon: Film, label: 'Editor', page: 11 },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex gap-2 z-40">
      {quickLinks.map((link) => (
        <button
          key={link.page}
          onClick={() => onNavigate(link.page)}
          className="w-12 h-12 bg-black/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
          title={link.label}
        >
          <link.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
        </button>
      ))}
    </div>
  );
}
