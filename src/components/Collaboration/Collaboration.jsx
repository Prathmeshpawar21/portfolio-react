import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collaboration = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const slidingTl = gsap.timeline({ defaults: { ease: "none" } });

    slidingTl
      .to(sectionRef.current.querySelector(".ui-left"), {
        xPercent: smallScreen ? -500 : -150,
      })
      .from(
        sectionRef.current.querySelector(".ui-right"),
        { xPercent: smallScreen ? -500 : -150 },
        "<"
      );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      animation: slidingTl,
    });

    return () => {
      timeline.kill();
      slidingTl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none my-40">
      <div
        className={`${
          clientHeight > 650 ? "py-36" : "py-48"
        } section-container flex flex-col`}
      >
        <p className="opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-left transform-gpu">
          {Array(5)
            .fill(" Machine Leanring  Data Science  GenAI ")
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>
        <h1
          ref={quoteRef}
          className="mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"
        >
          Ready to{" "}
          <span
            className="text-strong font-semibold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore
          </span>
          ?
        </h1>
        <p className="mt-6 md:mt-8 opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-right transform-gpu">
          {Array(5)
            .fill(
              " Data Analytics  Artificiail Intelligence  Data Visualization "
            )
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>
      </div>
    </section>
  );
};

export default Collaboration;
