import { useEffect, useRef } from "react";
import { MENULINKS } from "../../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Engproject = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper =
        sectionRef.current.querySelector(".project-wrapper");
      if (projectWrapper) {
        projectWrapper.style.width = "calc(100vw - 1rem)";
        projectWrapper.style.overflowX = "scroll";
      }
    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [sectionRef, sectionTitleRef, isDesktop]);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: "none" } });

    const projectWrapper = sectionRef.current.querySelector(".project-wrapper");

    if (projectWrapper) {
      const sidePadding =
        document.body.clientWidth -
        sectionRef.current.querySelector(".inner-container").clientWidth;
      const elementWidth = sidePadding + projectWrapper.clientWidth;
      sectionRef.current.style.width = `${elementWidth}px`;
      const width = window.innerWidth - elementWidth;
      const duration = `${(elementWidth / window.innerHeight) * 100}%`;
      timeline
        .to(sectionRef.current, { x: width })
        .to(sectionTitleRef.current, { x: -width }, "<");

      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: duration,
        scrub: 0,
        pin: true,
        animation: timeline,
        pinSpacing: "margin",
      });

      return [timeline, scrollTrigger];
    } else {
      // Return empty timeline and scrollTrigger if the element doesn't exist
      return [gsap.timeline(), null];
    }
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${
        isDesktop && "min-h-screen"
      } w-full relative select-none section-container`}
    >
      {/* Section Content */}
      <div className="my-[5rem] flex flex-col justify-center h-full">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitleRef}
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            PROJECTS
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit ">
            CS Engineering
          </h1>
          <h2 className="text-[1rem] font-light md:max-w-lg max-w-sm mt-0">
            Guru-Gobind-Singh College of Engineering (B.E)
          </h2>
        </div>

        {/* Video Frame Before the Section Content */}
        <div className={`${clientHeight > 650 ? "mt-6" : "mb-2"} `}>
          <h1
            className="font-bold text-[1rem] md:text-2xl lg:text-[2rem] text-center float-left mt-0 mb-0 pb-0"
          >
            Automated Fuel System{" "}
          </h1>
        </div>

        <div className="flex-col justify-center">
          {/* Video Section 1 */}
          <div className="w-full">
            <div
              className="mt-3 relative overflow-hidden pb-[40%] h-0"
              style={{ float: "left", width: "70%" }}
            >
              <iframe
                style={{ borderRadius: "30px" }}
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/1042246602?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Automated Fuel System"
              ></iframe>
            </div>
          </div>
        </div>

        <p className="my-3 tracking-widest text-gray-light-1 mb-5">
          Developed With : IOT-Arduino Uno R3, PlatformIO, C++
        </p>
      </div>
    </section>
  );
};

export default Engproject;
