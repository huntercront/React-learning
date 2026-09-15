import { useEffect, useState } from "react";
function useScroll(threshold = 100) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);
  return {
    isScrolled,
  };
}
export default useScroll;
