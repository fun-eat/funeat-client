import { useCallback } from 'react';

interface GAEventProps {
  category: string;
  action: string;
  label?: string;
}

const useGA = () => {
  // TODO: navigate event tracking

  const gaEvent = useCallback((eventProps: GAEventProps) => {
    // ReactGA.event(eventProps);
  }, []);

  return { gaEvent };
};

export default useGA;
