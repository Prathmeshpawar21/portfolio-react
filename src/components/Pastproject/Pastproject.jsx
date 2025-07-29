import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import lottie from "lottie-web"; // Import globally
import Button from "../Button/Button";
import { MENULINKS, TYPED_STRINGS } from "../../../constants";
// import Link from "next/link"; // <-- REMOVE (not available in Vite)
import lottieData from "../../assets/lottie/lottie.json";


const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const PastProjects = () => {
  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lottieData,
      });
      return () => animation.destroy();
    }
  }, []);

  // For the cursor CSS, move to a global .css or .scss file:
  // .typed-cursor { font-size: 2rem; }

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-2 2xl:container mx-auto xl:px-20 md:px-12 px-4 relative mb-2"
      style={{ opacity: 0 }}
    >
      <div className="flex flex-col pt-20 md:pt-0 select-none">
        <div className="staggered-reveal pt-2">
          <h2 className="text-4xl md:text-6xl font-light text-gray-400"> All Projects</h2>
          <h2 className="text-[1.65rem] font-light md:max-w-lg max-w-sm mt-2 staggered-reveal">
            See My All Projects Work{" "}
          </h2>
          <div className="staggered-reveal pt-2">
            <Button href="/pastProjectDashboard/" classes="link" type="primary">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
      {/* For Lottie, add a div where you want the animation displayed: */}
      {/* <div ref={lottieRef} style={{ width: 300, height: 300 }} /> */}
    </section>
  );
};

export default PastProjects;
