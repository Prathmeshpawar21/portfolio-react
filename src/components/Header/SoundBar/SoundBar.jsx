import { useState, useRef, useEffect } from "react";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      if (soundBarEl.current) {
        if (newState) {
          soundBarEl.current.play();
        } else {
          soundBarEl.current.pause();
        }
      }
      return newState;
    });
  };

  // Pause audio if component is unmounted
  useEffect(() => {
    return () => {
      if (soundBarEl.current) {
        soundBarEl.current.pause();
      }
    };
  }, []);

  return (
    <div
      className={`soundBars link top-1 right-14 flex items-center justify-center${isPlaying ? " play" : ""}`}
      onClick={togglePlayPause}
    >
      <span />
      <span />
      <span />
      <span />
      {/* Reference audio by its public path; do NOT import if file is in public/ */}
      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="auto" />
    </div>
  );
};

export default SoundBar;
