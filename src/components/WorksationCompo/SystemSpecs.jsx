import React from "react";
import { ColoredLine, ColoredLineFull } from "../../../constants";


const SystemSpecs = () => {
  return (
    <div className="pt-30 pb-20">








      {/* Workstation */}
      <section className="flex flex-wrap py-[8rem] px-8 justify-center mb-10">
        {/* Title Section */}
        <div
          className="w-full md:w-1/3 flex items-center  mb-8 md:mb-0"
          style={{
            alignItems: "flex-start",
          }}
        >
          <span className="text-[1rem] font-light">WORKSTATION</span>
          <span
            style={{
              borderTop: "1px solid gray",
              width: "100px",
              margin: "7px 6px 8px 8px",
            }}
          ></span>
        </div>

        {/* Workstation Items Section */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap mx-0 md:mx-10">
            {/* #########################*/}
            {/* MacBook Air 15"
                    <div className="w-full px-2 mb-4">
                    <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                        <div>
                        <h3 className="text-[1.8rem] font-semibold">MacBook Air 15"</h3>
                        <h4 className="text-gray-200 text-[1.2rem] font-medium">
                        M3 Air 2023, 8GB Memory, 1TB SSD
                        </h4>
                        <p className="text-gray-200 font-light">
                        This MacBook is one of the best investments that I have. I bought the space black version, which looks really good.
                        </p>
                        </div>
                    </div>
                    </div> */}

            {/* Monitor */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    Gigabyte G27Q 2K{" "}
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    27 Inch Monitor (G27Q)
                  </h4>
                  <p className="text-gray-200 font-light">
                    This monitor came with 10-bit 180Hz Display .
                  </p>
                </div>
              </div>
            </div>

            {/* Mother Board */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    ROG Strix B660-A{" "}
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    Gaming Wifi D4 Motherboard
                  </h4>
                  <p className="text-gray-200 font-light">
                    Intel® LGA 1700 ATX motherboard with PCIe® 5.0
                  </p>
                </div>
              </div>
            </div>

            {/* CPU" */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">Intel® Core™</h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    i7-12700F (8P + 4E)
                  </h4>
                  <p className="text-gray-200 font-light">
                    This CPU comes with 12 Core & 20 Threads.
                  </p>
                </div>
              </div>
            </div>

            {/* GPU */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    ROG Strix GeForce RTX™{" "}
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    4080 16GB GPU
                  </h4>
                  <p className="text-gray-200 font-light">
                    This GPU comes with OC Edition with DLSS 3.
                  </p>
                </div>
              </div>
            </div>

            {/* GPU */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    WD Black 1TB SSD
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    1TB NVMe™ (WDSN850X ) + 2TB HDD
                  </h4>
                  <p className="text-gray-200 font-light">
                    This SSD comes with Read Speed : 7GB/s and Write Speed :
                    4GB/s.
                  </p>
                </div>
              </div>
            </div>

            {/* Ram */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    Corsair Vengeance LPX DDR4
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    32GB DDR4 RAM
                  </h4>
                  <p className="text-gray-200 font-light">
                    This RAM comes with 3.2Ghz max-speed.
                  </p>
                </div>
              </div>
            </div>

            {/* SMPS */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    DEEPCOOL DQ750-M{" "}
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    750W 80+ Gold Certified
                  </h4>
                  <p className="text-gray-200 font-light">
                    This SMPS comes with 80+ Gold Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Cabinate */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">Lancool 215 X</h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    Lian Li Alloy Steel Cabinate - ARGB
                  </h4>
                  <p className="text-gray-200 font-light">
                    This Cabinate Support E-ATX/ATX/M-ATX/Itx Boards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-2 mb-4 py-8">
              ______________________________________
            </div>

            {/* Keyboard */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    Redragon K552W
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    Mechanical Gaming Keyboard - ARGB
                  </h4>
                  <p className="text-gray-200 font-light">
                    Cherry MX Blue Switches
                  </p>
                </div>
              </div>
            </div>
            {/* Mouse */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    Portronics Toad Ergo
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    Vertical Mouse
                  </h4>
                  <p className="text-gray-200 font-light">Wireless 2.4Ghz</p>
                </div>
              </div>
            </div>

            <div className="w-full px-2 mb-4 py-8">
              ______________________________________
            </div>
            {/* LED */}
            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">LED&apos;s WS2812B</h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    5V Strip
                  </h4>
                  <p className="text-gray-200 font-light">ARGB Modified</p>
                </div>
              </div>
            </div>
            {/* #########################*/}
          </div>
        </div>
      </section>

      {/* Laptops */}
      <section className="flex flex-wrap py-[3rem]  px-8 justify-center mb-12">
        {/* Title Section */}
        <div
          className="w-full md:w-1/3 flex items-center  mb-8 md:mb-0"
          style={{
            alignItems: "flex-start",
          }}
        >
          <span className="text-[1rem] font-light">LAPTOPS</span>
          <span
            style={{
              borderTop: "1px solid gray",
              width: "100px",
              margin: "7px 6px 8px 8px",
            }}
          ></span>
        </div>

        {/* Workstation Items Section */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap mx-0 md:mx-10">
            {/* #########################*/}
            {/* MacBook */}

            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    MacBook Air 15&quot;
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    M3 Air 2023, 8GB Memory, 1TB SSD
                  </h4>
                  <p className="text-gray-200 font-light">macOS Installed</p>
                </div>
              </div>
            </div>
            {/* lenovo*/}

            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">
                    Lenovo S145 14&quot;
                  </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    8GB RAM | 1TB HDD | AMD-A6
                  </h4>
                  <p className="text-gray-200 font-light">
                    Linux Installed - Kali, Mint, Zorin OS
                  </p>
                </div>
              </div>
            </div>

            {/* #########################*/}
          </div>
        </div>
      </section>

      {/* accessories */}
      <section className="flex flex-wrap py-[3rem] px-8 justify-center mb-12">
        {/* Title Section */}
        <div
          className="w-full md:w-1/3 flex items-center  mb-8 md:mb-0"
          style={{
            alignItems: "flex-start",
          }}
        >
          <span className="text-[1rem] font-light">ACCESSORIES</span>
          <span
            style={{
              borderTop: "1px solid gray",
              width: "100px",
              margin: "7px 6px 8px 8px",
            }}
          ></span>
        </div>

        {/* Workstation Items Section */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap mx-0 md:mx-10">
            {/* #########################*/}
            {/* MacBook */}

            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">SONY </h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    SA-D40
                  </h4>
                  <p className="text-gray-200 font-light">
                    4.1 Channel Home Theatre System
                  </p>
                </div>
              </div>
            </div>
            {/* lenovo*/}

            <div className="w-full px-2 mb-4">
              <div className="bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex justify-start">
                <div>
                  <h3 className="text-[1.8rem] font-semibold">EarBuds Air4</h3>
                  <h4 className="text-gray-200 text-[1.2rem] font-medium">
                    OPPO Enco Air4 Pro
                  </h4>
                  <p className="text-gray-200 font-light">
                    Hi-Res Audio with LHDC 5.0
                  </p>
                </div>
              </div>
            </div>

            {/* #########################*/}
          </div>
        </div>
      
      
      
      </section>






        






    </div>
  );
};

export default SystemSpecs;
