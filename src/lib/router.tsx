/* eslint-disable react-refresh/only-export-components -- modul router mengekspor provider, hook, dan link bersama. */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

type NavigateOptions = {
  replace?: boolean;
};

type RouterValue = {
  path: string;
  navigate: (to: string, options?: NavigateOptions) => void;
};

const RouterContext = createContext<RouterValue | null>(null);

function normalizePath(path: string): string {
  if (!path) return '/';
  const clean = path.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1);
  return clean || '/';
}

function readPath(): string {
  if (typeof window === 'undefined') return '/';
  return normalizePath(window.location.pathname);
}

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

type RouterProviderProps = {
  children: ReactNode;
  initialPath?: string;
};

export function RouterProvider({ children, initialPath }: RouterProviderProps) {
  const [path, setPath] = useState(() => normalizePath(initialPath ?? readPath()));

  useEffect(() => {
    const handlePopState = () => setPath(readPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, options?: NavigateOptions) => {
    if (typeof window === 'undefined') return;

    const url = new URL(to, window.location.origin);
    const nextPath = normalizePath(url.pathname);
    const query = url.search ?? '';

    if (nextPath === readPath()) {
      if (url.hash) {
        if (window.location.hash !== url.hash) {
          window.history.pushState({}, '', `${url.pathname}${query}${url.hash}`);
        }
        scrollToHash(url.hash);
      }
      return;
    }

    const method = options?.replace ? 'replaceState' : 'pushState';
    window.history[method]({}, '', `${url.pathname}${query}${url.hash}`);
    setPath(nextPath);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const frame = window.requestAnimationFrame(() => scrollToHash(window.location.hash));
    return () => window.cancelAnimationFrame(frame);
  }, [path]);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterValue {
  const value = useContext(RouterContext);
  if (!value) throw new Error('useRouter harus dipakai di dalam RouterProvider.');
  return value;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export function Link({ to, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (rest.target && rest.target !== '_self') return;

    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick} {...rest} />;
}
