import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page9 from './pages/page9';
import Page10 from './pages/page10';
import Page11 from './pages/page11';
import Page12 from './pages/page12';
import Page13 from './pages/page13';
import Page14 from './pages/page14';
import Page15 from './pages/page15';
import Page16 from './pages/page16';
import Page17 from './pages/page17';
import Page18 from './pages/page18';
import Page19 from './pages/page19';
import Page20 from './pages/page20';
import Page21 from './pages/page21';
import AssetLibrary from './components/AssetLibrary';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAssetLibrary, setShowAssetLibrary] = useState(false);
  const [assetMode, setAssetMode] = useState<'upload' | 'create'>('upload');
  const [selectedTool, setSelectedTool] = useState('');

  const handleNavigate = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleOpenAssetPage = (toolName: string, mode: 'upload' | 'create') => {
    setSelectedTool(toolName);
    setAssetMode(mode);
    setShowAssetLibrary(true);
  };

  const handleCloseAssetPage = () => {
    setShowAssetLibrary(false);
    setSelectedTool('');
  };

  if (showAssetLibrary) {
    return (
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <AssetLibrary
            toolName={selectedTool}
            mode={assetMode}
            onBack={handleCloseAssetPage}
          />
        </div>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      {currentPage === 0 && <Page1 onNavigate={handleNavigate} />}
      {currentPage === 1 && <Page2 onNavigate={handleNavigate} />}
      {currentPage === 2 && <Page3 onNavigate={handleNavigate} />}
      {currentPage === 3 && <Page4 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />}
      {currentPage === 4 && <Page5 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />}
      {currentPage === 5 && <Page6 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />}
      {currentPage === 6 && <Page7 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />}
      {currentPage === 7 && <Page8 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />}
      {currentPage === 8 && <Page9 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />}
      {currentPage === 9 && <Page10 onNavigate={handleNavigate} />}
      {currentPage === 10 && <Page11 onNavigate={handleNavigate} />}
      {currentPage === 11 && <Page12 onNavigate={handleNavigate} />}
      {currentPage === 12 && <Page13 onNavigate={handleNavigate} />}
      {currentPage === 13 && <Page14 onNavigate={handleNavigate} />}
      {currentPage === 14 && <Page15 onNavigate={handleNavigate} />}
      {currentPage === 15 && <Page16 onNavigate={handleNavigate} />}
      {currentPage === 16 && <Page17 onNavigate={handleNavigate} />}
      {currentPage === 17 && <Page18 onNavigate={handleNavigate} />}
      {currentPage === 18 && <Page19 onNavigate={handleNavigate} />}
      {currentPage === 19 && <Page20 onNavigate={handleNavigate} />}
      {currentPage === 20 && <Page21 onNavigate={handleNavigate} />}
    </AuthProvider>
  );
}
