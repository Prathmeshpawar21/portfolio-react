import { useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";
import Profiles from "../Profiles/Profiles";
import { MENULINKS } from "../../../constants";

// Replace with your real colors, or move to Tailwind config and use classnames
const INDIGO_LIGHT = "#C7D2FE"; // <-- your light indigo
const INDIGO_DARK = "#312E81";  // <-- your dark indigo

const Footer = () => {
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const handleClick = () => {
    setPlaybackRate((rate) => rate + 0.1);
    new Howl({
      src: ["/sounds/glug-a.mp3"],
      rate: playbackRate,
      volume: 0.5,
    }).play();
  };

  return (
    <footer
      className="w-full relative select-none bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, ${INDIGO_LIGHT}, ${INDIGO_DARK})`,
      }}
    >
      <FooterBg />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full pt-32">
          <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
            <h1 className="font-medium text-3xl md:text-4xl text-center">
              Feel free to connect on social media.
            </h1>
            <div className="text-center">
              <Profiles />
            </div>
            <div className="pt-4 text-center">
              <Button
                href={`#${MENULINKS[4].ref}`}
                classes="link"
                type="secondary"
              >
                Let&apos;s Talk
              </Button>
            </div>
            {/* <p className="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-8">
              Developed with{" "}
              <button onClick={handleClick} className="link cursor-none">
                <span className="block animate-bounce">❤️</span>
              </button>{" "}
              by <span className="text-white">Prathamesh Pawar</span>
            </p> */}
          </div>
        </div>
      </motion.div>

      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt=""
        loading="eager"
        height={180}
      />
    </footer>
  );
};

export default Footer;
