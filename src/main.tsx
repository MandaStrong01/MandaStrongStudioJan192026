import ReactDOM from 'react-dom/client';
import { AuthProvider } from './contexts/AuthContext';
import App from './App';
import './index.css';

const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);