import { useEffect, useState } from 'react';

interface BreakpointState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useBreakpoint(): BreakpointState {
  const getMatches = (): BreakpointState => ({
    isMobile: window.matchMedia('(max-width: 639px)').matches,
    isTablet: window.matchMedia('(min-width: 640px) and (max-width: 1023px)').matches,
    isDesktop: window.matchMedia('(min-width: 1024px)').matches,
  });

  const [breakpoint, setBreakpoint] = useState<BreakpointState>(getMatches);

  useEffect(() => {
    const handleChange = () => setBreakpoint(getMatches());

    const mobileWatcher = window.matchMedia('(max-width: 639px)');
    const tabletWatcher = window.matchMedia('(min-width: 640px) and (max-width: 1023px)');
    const desktopWatcher = window.matchMedia('(min-width: 1024px)');

    mobileWatcher.addEventListener('change', handleChange);
    tabletWatcher.addEventListener('change', handleChange);
    desktopWatcher.addEventListener('change', handleChange);

    return () => {
      mobileWatcher.removeEventListener('change', handleChange);
      tabletWatcher.removeEventListener('change', handleChange);
      desktopWatcher.removeEventListener('change', handleChange);
    };
  }, []);

  return breakpoint;
}
