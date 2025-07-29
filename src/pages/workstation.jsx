import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
// import Menu from "../components/Header/Menu/Menu";
import ProgressIndicator from "../components/ProgressIndicator/ProgressIndicator";
import Cursor from "../components/Cursor/Cursor";
import About1 from "../components/About/About1";

import DsProjects from "../components/DsProjects/DsProjects";
import Footer from "../components/Footer/Footer";
import { displayFancyLogs } from "../utils/log";
import Aboutforproject from "../components/About/Aboutforproject";
import Webproject from "../components/Webproject/Webproject";
import Gameproject from "../components/Gameproject/Gameproject";
import Engproject from "../components/Engproject/Engproject";
import Wstation from "../components/Wstation/Wstation";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default function WorkstationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header>
            {/* <Menu /> */}
          </Header>
          <ProgressIndicator />
          <Cursor isDesktop={isDesktop} />
          <main className="flex flex-col">
            <div
              role="img"
              className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
            >
              WORK
            </div>
            <div className="fixed top-0 left-0 h-screen w-screen -z-1" />

            <Wstation isDesktop={isDesktop} clientHeight={clientHeight} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
