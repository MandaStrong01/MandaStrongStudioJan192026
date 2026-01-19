import { Film, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface Movie {
  id: string;
  title: string;
  created_at: string;
  thumbnail_url?: string;
}

export default function MyMovies() {
  const { user } = useAuth();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadMovies();
    }
  }, [user]);

  const loadMovies = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMovies(data || []);
    } catch (error) {
      console.error('Error loading movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMovie = async (movieId: string) => {
    if (!confirm('Are you sure you want to delete this movie?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', movieId);

      if (error) throw error;
      setMovies(movies.filter(m => m.id !== movieId));
    } catch (error) {
      console.error('Error deleting movie:', error);
      alert('Failed to delete movie');
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-white/70">Loading your movies...</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-12 text-center">
        <Film className="w-16 h-16 mx-auto mb-4 text-purple-400" />
        <h3 className="text-xl font-bold mb-2">No Movies Yet</h3>
        <p className="text-white/70">Create your first movie to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-black/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 rounded-lg p-4 transition-all"
        >
          <div className="aspect-video bg-purple-900/20 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
            {movie.thumbnail_url ? (
              <img src={movie.thumbnail_url} alt={movie.title} className="w-full h-full object-cover" />
            ) : (
              <Film className="w-12 h-12 text-purple-400" />
            )}
          </div>
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold truncate mb-1">{movie.title}</h4>
              <p className="text-xs text-purple-400">
                {new Date(movie.created_at).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => deleteMovie(movie.id)}
              className="ml-2 p-2 hover:bg-red-600/20 rounded-lg transition-all"
              title="Delete movie"
            >
              <Trash2 className="w-4 h-4 text-red-400" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
