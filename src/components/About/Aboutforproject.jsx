import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Aboutforproject = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .from(quoteRef.current, { opacity: 0, duration: 2 })
        .to(quoteRef.current.querySelector(".about-3"), {
          backgroundPositionX: "100%",
          duration: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "py-20" : "py-20"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          My All Project Work {" "}

        </h1>
      </div>
    </section>
  );
};

export default Aboutforproject;
