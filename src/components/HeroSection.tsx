import Image from "next/image";
import React from "react";
import heroimg1 from "../images/heroimg1.png";
import quote1 from "../images/quote1.svg";
import quote2 from "../images/quote2.svg";
import realmiami from "../images/realmiami.png";
import thereal from "../images/TheReal.png";
import realnurses from "../images/realnurses.svg";
import { IoStar } from "react-icons/io5";

const HeroSection = () => {
  return (
    <>
      <div className="w-full flex justify-between ">
        <div className="w-auto px-10  pt-16 ml-22">
          <div className="  flex flex-col gap-8 ">
            <p className="text-7xl font-bold">IV Therapy,</p>
            <p className="text-7xl font-bold">Recovery Nurses.</p>
            <p className="text-7xl font-bold text-[#3BAFBF]">Drip N Bodied</p>
          </div>
          <div className="my-8">
            {/* <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black text-center ">“</span>
            <p className="font-montserrat text-base font-normal w-[500px] h-[40px]">
              Drip N Bodied absolutely amazing. Hands down one of the best
              service I have ever received.
            </p> */}
            <div className="">
              <div className=" py-2">
                <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                  <Image src={quote1} alt="quote" />
                </span>
                <p className="font-montserrat text-base font-normal w-[500px] leading-normal flex flex-col">
                  <span>Drip N Bodied absolutely amazing.</span>
                  Hands down one of the best service I have ever received.
                </p>
                <div className="flex items-center justify-between w-[450px]">
                  <div className="flex items-center">
                    <p className="font-montserrat text-black text-lg font-bold leading-27">
                      5.0
                    </p>
                    {/* <IoStar className="text-yellow-400 text-[34px] h-[34px]" />
    <IoStar className="text-yellow-400 text-[34px] h-[34px]" />
    <IoStar className="text-yellow-400 text-[34px] h-[34px]" />
    <IoStar className="text-yellow-400 text-[34px] h-[34px]" />
    <IoStar className="text-yellow-400 text-[34px] h-[34px]" /> */}
                    <div className="mx-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="24"
                        viewBox="0 0 120 24"
                        fill="none"
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                          fill="#FFC700"
                        />
                      </svg>
                    </div>
                    <p className=" mt-1 text-center font-montserrat text-blue-500 text-lg font-normal leading-27">
                      47 Google reviews
                    </p>
                  </div>
                  <div>
                    <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                      <Image src={quote2} alt="quote" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto flex justify-end items-center">
          <Image src={heroimg1} alt="Logo" className=" w-[606px] h-[580px]" />
        </div>
      </div>
      {/* <div className="w-full  ">
        <div className="border-4 py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
          <div className="flex justify-center items-center w-auto h-[27px]">
            <Image src={thereal} alt="real" />
          </div>
        </div>
      </div>
      <div className="w-[full] h-[810px]">
        <Image src={realnurses} alt='nurses' className="w-full h-full"/>
      </div> */}
    </>
  );
};

export default HeroSection;
