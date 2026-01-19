import Header from '../components/Header';
import Footer from '../components/Footer';
import AssetLibrary from '../components/AssetLibrary';

export default function MediaLibrary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <AssetLibrary />
      </main>
      <Footer />
    </div>
  );
}
