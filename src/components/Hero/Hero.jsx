import { useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import lottie from "lottie-web";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../../constants";
 // Move your json to src/assets/lottie/
import lottieData from "../../assets/lottie/lottie.json"; // Move your json to src/assets/lottie/


const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
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
    const typed = new Typed(typedElementRef.current, options);
    return () => typed.destroy();
    // eslint-disable-next-line
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

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-8 section-container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      {/* Move this CSS to a global stylesheet instead */}
      {/* <style>
        {`.typed-cursor { font-size: 2rem; }`}
      </style> */}
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h5 className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}>
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-6xl font-semibold`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            Prathamesh
          </span>
          <span className="staggered-reveal"> J. Pawar</span>
        </h1>
        <p>
          <span
            ref={typedElementRef}
            className="staggered-reveal text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>
        <div className="staggered-reveal">
          <Profiles />
        </div>
        <div className="staggered-reveal pt-4">
          <Button href={`https://drive.google.com/uc?export=download&id=1YKMU6FbFdYCwQ0SVFETPiXbIWFhDE1je`}
            classes="link" type="primary" >Get Resume
          </Button>
        </div>
      </div>
      <div
        className="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
        ref={lottieRef}
      />
    </section>
  );
};

export default Hero;
