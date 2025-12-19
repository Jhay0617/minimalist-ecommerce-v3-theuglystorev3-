import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // 2025 Professional Tip: 'instant' is better for UX
    // but 'smooth' is more elegant. Use 'instant' for fast checkouts.
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname, search]);
}
