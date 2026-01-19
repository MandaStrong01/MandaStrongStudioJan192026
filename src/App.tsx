import { useState } from 'react';
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
import MediaLibrary from './pages/medialibrary';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [assetPageData, setAssetPageData] = useState<{
    toolName: string;
    mode: 'upload' | 'create';
  } | null>(null);

  const handleNavigate = (page: number) => {
    setCurrentPage(page);
    setAssetPageData(null);
    window.scrollTo(0, 0);
  };

  const handleOpenAssetPage = (toolName: string, mode: 'upload' | 'create') => {
    setAssetPageData({ toolName, mode });
    setCurrentPage(22);
  };

  const pages = [
    <Page1 onNavigate={handleNavigate} />,
    <Page2 onNavigate={handleNavigate} />,
    <Page3 onNavigate={handleNavigate} />,
    <Page4 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />,
    <Page5 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />,
    <Page6 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />,
    <Page7 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />,
    <Page8 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />,
    <Page9 onNavigate={handleNavigate} onOpenAssetPage={handleOpenAssetPage} />,
    <Page10 onNavigate={handleNavigate} />,
    <Page11 onNavigate={handleNavigate} />,
    <Page12 onNavigate={handleNavigate} />,
    <Page13 onNavigate={handleNavigate} />,
    <Page14 onNavigate={handleNavigate} />,
    <Page15 onNavigate={handleNavigate} />,
    <Page16 onNavigate={handleNavigate} />,
    <Page17 onNavigate={handleNavigate} />,
    <Page18 onNavigate={handleNavigate} />,
    <Page19 onNavigate={handleNavigate} />,
    <Page20 onNavigate={handleNavigate} />,
    <Page21 onNavigate={handleNavigate} />,
  ];

  if (currentPage === 22) {
    return <MediaLibrary />;
  }

  return pages[currentPage] || pages[0];
}