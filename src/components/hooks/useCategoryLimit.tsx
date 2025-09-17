import { useEffect, useState } from 'react';

export function useResponsiveLimit() {
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setLimit(4);
      } else if (width < 1024) {
        setLimit(6);
      } else {
        setLimit(8);
      }
    };

    updateLimit();
    window.addEventListener('resize', updateLimit);

    return () => window.removeEventListener('resize', updateLimit);
  }, []);

  return limit;
}
