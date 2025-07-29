import { useRef, useEffect } from "react";

const ProgressIndicator = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = windowHeight > 0 ? totalScroll / windowHeight : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrolled})`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress w-full fixed top-0 z-50">
      <div ref={progressRef} className="progress-bar"></div>
    </div>
  );
};

export default ProgressIndicator;
