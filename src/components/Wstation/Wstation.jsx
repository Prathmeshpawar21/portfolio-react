import { useEffect, useRef } from "react";
import { MENULINKS, ColoredLineFull } from "../../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // works in Vite

// If not using "@" alias, use relative paths:
import Imgcomp from "../../components/WorksationCompo/Imgcomp";
import SystemSpecs from "../../components/WorksationCompo/SystemSpecs";
import VideoTemplate from "../../components/Customization/VideoTemplate";

gsap.registerPlugin(ScrollTrigger); // Register once, top-level

const Wstation = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const quoteRef = useRef(null);

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
    // eslint-disable-next-line
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
      <div className="my-[7rem] flex flex-col justify-center h-full">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitleRef}
        >
          <div className={`${clientHeight > 650 ? "pt-0 pb-5" : ""}`}>
            <h1
              ref={quoteRef}
              className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
            >
              My{" "}
              <span className="about-3 font-bold text-gradient">
                Workstation
              </span>{" "}
            </h1>
            <p className="text-[1.05rem] tracking-widest text-gray-light-1 text-center ">
              A peek of my workspace and tools
            </p>
          </div>
        </div>

        <div className={`${clientHeight > 650 ? "pt-10 pb-20" : ""}`}>
          <Imgcomp src="../front_enhanced-min.jpg" alt="Sample Image 3" />
        </div>
        
        <SystemSpecs/>

        <VideoTemplate
          src="https://player.vimeo.com/video/1042456040?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
          className="my-4"
          width="80%"
          aspectRatio="50%"
        />

        <ColoredLineFull color="gray" width="100%" />
      </div>
    </section>
  );
};

export default Wstation;