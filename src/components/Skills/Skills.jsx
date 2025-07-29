import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS, ColoredLine } from "../../../constants";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.4rem] font-light md:max-w-lg w-full mt-2 staggered-reveal">
              Building Solutions with Data Science Expertise.{" "}
            </h2>
          </div>

          <div className="mt-10">
            <h2 className="text-[2.2rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Data Scientist{" "}
            </h2>
            <p className="text-[0.9rem] forn-light"></p>

            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              FRAMEWORKS AND LIBRARIES  
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.tools.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              DATABASES
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.databases.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                OTHERS
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.other.map((skill) => (
                  <img
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                OS
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.osData.map((skill) => (
                  <img
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
          <ColoredLine color="gray" />

          {/* Web Dev */}
          <div className="mt-10">
            <h2 className="text-[1.7rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Frontend Dev{" "}
            </h2>
            <p className="text-[0.9rem] forn-light">2022</p>
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndToolsWeb.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={35}
                  height={35}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              FRAMEWORKS AND LIBRARIES  
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.librariesAndFrameworksWeb.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={35}
                  height={35}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.toolsWeb.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={35}
                  height={35}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                CLOUD/HOSTING
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.cloudWeb.map((skill) => (
                  <img
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={35}
                    height={35}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                Other
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.otherWeb.map((skill) => (
                  <img
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={35}
                    height={35}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
          <ColoredLine color="gray" />

          {/* Game Dev */}
          <div className="mt-10">
            <h2 className="text-[1.7rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Game Developer{" "}
            </h2>
            <p className="text-[0.9rem] forn-light">2020</p>
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndToolsGame.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={35}
                  height={35}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.toolsGame.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={35}
                  height={35}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          {/* <ColoredLine color="gray" /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
