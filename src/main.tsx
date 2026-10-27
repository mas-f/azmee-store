import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const initialPath = `${window.location.pathname}${window.location.search}`;

const currentRoute = (() => {
  const raw = window.location.pathname.replace(/\/+$/, '');
  return raw === '' ? '/' : raw;
})();

const app = (
  <StrictMode>
    <App initialPath={initialPath} />
  </StrictMode>
);

// Hanya hydrate kalau HTML yang dikirim server memang untuk rute ini.
// Kalau host menyajikan index.html sebagai fallback (rute tak dikenal),
// bersihkan markup lama agar React tidak melaporkan hydration mismatch.
if (container.firstChild && container.dataset.route === currentRoute) {
  hydrateRoot(container, app);
} else {
  container.replaceChildren();
  createRoot(container).render(app);
}
