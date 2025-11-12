import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views with Google Analytics
 * Automatically sends a page_view event whenever the route changes
 */
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available (it might not be in development or with ad blockers)
    if (typeof window.gtag !== 'undefined') {
      // Send page view event with the current path
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageTracking;
