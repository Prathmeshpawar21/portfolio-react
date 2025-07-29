import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Use React Router!
import gsap, { Power1, Circ } from "gsap";
import Button from "../components/Button/Button"; // <-- Fix import path as needed
import Cursor from "../components/Cursor/Cursor"; // <-- Fix import path as needed

const Custom404 = () => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(true);
  const milkSpillLargeRef = useRef(null);
  const faceRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    // Device check logic can be more robust
    const result =
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";
    setIsDesktop(result);

    // Milk Spill
    gsap.to(milkSpillLargeRef.current, {
      duration: 30,
      scale: 1.25,
      transformOrigin: "right",
      ease: Power1.easeInOut,
    });

    // Face Hover
    gsap.to(faceRef.current, {
      yoyo: true,
      repeat: -1,
      duration: 10,
      yPercent: -15,
      ease: Power1.easeInOut,
    });

    // Blink Eyes
    gsap.set([leftEyeRef.current, rightEyeRef.current], {
      transformOrigin: "center",
      scaleY: 0,
    });

    const blink = () => {
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 4,
          defaults: { ease: Circ.easeInOut, duration: 0.1 },
        })
        .add("blink")
        .to([leftEyeRef.current, rightEyeRef.current], { scaleY: 1 });
    };
    blink();
  }, []);

  return (
    <>
      <Cursor isDesktop={isDesktop} />
      <div className="flex justify-center items-center flex-wrap h-screen">
        <svg className="max-h-screen" viewBox="0 0 600 600">
          <g id="milk-spill" fill="#fff">
            <path
              id="milk-spill--large"
              ref={milkSpillLargeRef}
              d="M132.6 317.5c-1.9.5-3.6 1.3-5.2 2.3-7.3 5-1.4 10.3.7 15.8 7.5 19.6-40.9 16.6-46.8 33.5-2.4 6.8-.4 14.6 5.1 20.1 4.8 4.8 11.8 7.6 18.9 9.7 32.8 9.5 72.4 9.2 106.9 10.5 41 1.5 82.3 2.2 123.3 1 6.7-.2 13.6-.5 19.9-2.6 6.3-2.1 11.9-6.4 13.1-11.8 3.1-13.3-19.4-24.5-14.8-37.5 3.8-10.8 20.1-11.6 30.6-15.3 6.4-2.3 12.6-5.7 15.6-10.9 16.9-28.4-57.7-30.5-74.8-30.3-30.2.3-59.9 5.2-89.9 7.1-32.5 2.1-66 1.4-97.8 7.4-1.6.2-3.2.5-4.8 1"
            />
            {/* ... other SVG ... */}
          </g>
          {/* ... rest of your SVG ... */}
          <g id="milk-face" ref={faceRef}>
            <path
              id="mouth"
              fill="none"
              stroke="#4f3e7c"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M368.4 240.8s-15.4-10.5-27.3 3.5"
            />
            <g id="eyes">
              <circle
                id="eye-right-open"
                ref={rightEyeRef}
                cx="375.3"
                cy="215.6"
                r="5"
                fill="#4f3e7c"
              />
              <circle
                id="eye-left-open"
                ref={leftEyeRef}
                cx="330.9"
                cy="220"
                r="5"
                fill="#4f3e7c"
              />
            </g>
          </g>
        </svg>
        <div className="link">
          <Button type="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Custom404;
