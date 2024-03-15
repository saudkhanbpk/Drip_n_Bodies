import React from 'react'
import cr1 from "../images/cr1.png";
import Image from "next/image";

const conciergeService = () => {
  return (
    <div>
          <div className="w-full flex flex-col md:flex-row justify-between mx-auto">
          {/* <div className="w-auto lg:w-auto md:px-10 lg:pl-8 m-3 md:m-5 lg:m-14 xl:pt-20 md:ml-8 xl:ml-16 "> */}
          <div className="w-full md:w-[65%] px-10 pt-6 md:pt-16 ml-22">
            <div className="flex flex-col gap-2 md:leading-[100px]">
              <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">
              Custom {" "}
              </p>
              <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">Recovery</p>
              <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat text-[#3BAFBF] ">
                {" "}
                Experience!{" "}
              </p>
            </div>
            <div className="my-8 md:my-5 lg:my-10 w-full lg:w-auto h-[43px] flex flex-col lg:flex-row">
              <a href="#section" className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2  hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat">
              View Packages
              </a>
              <a href="#section2" className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat">
              View Group Packages
              </a>
            </div>
          </div>
          <div className="lg:w-[35%] flex ">
            <Image
              src={cr1}
              alt="Logo"
              className="w-full md:w-[80vw] lg:w-[656px] lg:mix-blend-multiply object-cover "  />
          </div>
        </div>

        <div className="w-full  ">
          <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center items-center w-auto h-[27px]">
            <p className="font-niconne text-3xl md:text-6xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] " style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }} >Miami Mobile Post-Op Recovery Nurses</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default conciergeService