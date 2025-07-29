import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isDesktop }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      if (follower.current) follower.current.classList.remove("hidden");
      if (cursor.current) cursor.current.classList.remove("hidden");

      const moveCircle = (e) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none",
        });
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "none",
        });
      };

      const hover = () => {
        gsap.to(cursor.current, {
          scale: 0.5,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 3,
          duration: 0.3,
        });
      };

      const unHover = () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 1,
          duration: 0.3,
        });
      };

      // Get snapshot of .link elements for clean add/remove
      const linkNodes = Array.from(document.querySelectorAll(".link"));

      document.addEventListener("mousemove", moveCircle);
      linkNodes.forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });

      return () => {
        document.removeEventListener("mousemove", moveCircle);
        linkNodes.forEach((el) => {
          el.removeEventListener("mouseenter", hover);
          el.removeEventListener("mouseleave", unHover);
        });
        // Optionally: Hide on unmount
        if (follower.current) follower.current.classList.add("hidden");
        if (cursor.current) cursor.current.classList.add("hidden");
      };
    }
    // Hide if not active
    if (follower.current) follower.current.classList.add("hidden");
    if (cursor.current) cursor.current.classList.add("hidden");
  }, [isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className="bg-white rounded-full mix-blend-difference fixed w-4 h-4 select-none pointer-events-none z-50 hidden"
      />
      <div
        ref={follower}
        className="bg-white/[0.02] border border-white/[0.2] rounded-full fixed -top-3 -left-3 w-10 h-10 select-none pointer-events-none z-50 hidden"
      />
    </>
  );
};

export default Cursor;
