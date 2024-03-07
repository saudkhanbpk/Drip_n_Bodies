import Image from "next/image";
import React from "react";
import surg1 from "../images/surg1.png";
import cr1 from "../images/cr1.png";
import recoverynurses from "../images/RecoveryNurses.png";

const SurgeryRecovery = () => {
  return (
    <>
      <div
        className=""
        style={{
          background:
            "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)",
        }}
      >
        
        <div className="">
        <div className="w-full flex flex-col md:flex-row justify-between mx-auto">
          <div className="w-auto lg:w-auto md:px-5 lg:pl-8 m-3 md:m-5 lg:m-14 xl:pt-20 md:ml-8 xl:ml-16 ">
            <div className="flex flex-col lg:gap-2">
              <p className="text-4xl lg:text-7xl xl:text-7xl font-bold">
              Where{" "}
              </p>
              <p className="text-4xl lg:text-7xl font-bold ">Beauty Meets </p>
              <p className="text-4xl lg:text-7xl font-bold  ">
                {" "}
                Convenience!{" "}
              </p>
            </div>
            <div className="my-6 md:my-5 lg:my-10 w-full lg:w-auto h-[43px] flex flex-col lg:flex-row">
              <button className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2 rounded hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat">
              View Packages
              </button>
              <p className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat">
              View Group Packages
              </p>
            </div>
          </div>
          <div className="  lg:w-auto flex ">
            <Image
              src={cr1}
              alt="Logo"
              className="w-full md:w-[80vw] lg:w-[656px] lg:mix-blend-multiply object-cover "
            />
          </div>
        </div>
        <div className="w-full  ">
          <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center items-center w-auto h-[27px]">
              <p className="text-blue-500 text-center font-niconne text-4xl lg:text-6xl font-normal">
              Miami Cosmetic Surgery Recovery
              </p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="w-full">
        <div className="my-6 w-[90%]  mx-auto p-4">
        <p className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
        Cosmetic Surgery Recovery Packages
            </p>
          <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
          Drip N Bodied offers post operative care services to YOU in the
              comfort of your home or hotel. We gladly serve as an advocate for
              our clients as they navigate through the healthcare system in
              preparation for surgery. We take pride in assisting our clients
              with a speedy and safe recovery after cosmetic surgery.
          </p>
        </div>
      </div>

        

        <div className=" w-full px-auto">
          <div className=" items-center w-full flex xl:flex-row flex-col justify-center mx-auto gap-8">
            
            <div className="flex md:flex-row flex-col gap-6">
            <div className="border border-[#3BAFBF] w-[300px] h-[720px] flex flex-col items-center justify-center p-4">
              <div className="flex flex-col gap-30">
                <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  One Night Glam
                </p>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-blue-500 my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $800
                </p>
                <p className="mx-auto mt-10  h-[34px] w-[135px] text-black text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 8 payments of $100 by{" "}
                  <span className="font-bold">Afterpay</span>
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300   bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Hands-on care, medication management, assessment and education
                  by RN on day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Twelve (12) hours of overnight care provided by a CNA
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  (1) IV Drip Therapy
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <p className="text-blue-500 text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </p>
              </div>
            </div>
            <div className="border bg-[#3BAFBF] w-[300px] h-[760px] flex flex-col items-center justify-center p-4">
              <div className="flex flex-col gap-30">
                <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  Snatched!
                </p>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-[#F4B5D9] my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $800
                </p>
                <p className="mx-auto mt-10  h-[34px] w-[135px] text-black text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 8 payments of $100 by{" "}
                  <span className="font-bold">Afterpay</span>
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-pink-300  bg-[#F4B5D9] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Hands-on care, medication management, assessment and education
                  by RN on day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  2 - 4 hours of private care the day after surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  RN on call the day after surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <p className="text-white text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </p>
              </div>
            </div>

            </div>

            <div className="flex md:flex-row flex-col gap-6">
            <div className="border border-[#3BAFBF] w-[300px] h-[720px] flex flex-col items-center justify-center p-4">
              <div className="flex flex-col gap-30">
                <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  The Bougie Babe
                </p>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-blue-500 my-6 text-center font-niconne text-6xl font-normal leading-[27px]">
                  $1,900
                </p>
                <p className="mx-auto   h-[34px] w-[135px] text-black text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 8 payments of $100 by{" "}
                  <span className="font-bold">Afterpay</span>
                </p>
              </div>
              <div className="my-10 w-auto h-[43px] flex ">
                <button className="w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300  bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Includes everything from the Snatched! package
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Twelve (12) hours of overnight care provided by a CNA
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  (1) IV Drip Therapy
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <p className="text-blue-500 text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </p>
              </div>
            </div>
            <div className="border border-[#3BAFBF] w-[300px] h-[720px] flex flex-col items-center justify-center p-4">
              <div className="flex flex-col gap-30">
                <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  Very Bougie!
                </p>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-blue-500 my-6 text-center font-niconne text-6xl font-normal leading-[27px]">
                  $2,700
                </p>
                <p className="mx-auto   h-[34px] w-[135px] text-black text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 8 payments of $100 by{" "}
                  <span className="font-bold">Afterpay</span>
                </p>
              </div>
              <div className="my-10 w-auto h-[43px] flex ">
                <button className="w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300  bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Hands-on care, medication management, assessment and education
                  by RN on day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Twelve (12) hours of overnight care provided by a CNA
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  (1) IV Drip Therapy
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <p className="text-blue-500 text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </p>
              </div>
            </div>

            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="my-6 items-center w-[60%] flex  justify-center mx-auto">
            <div className="my-10 w-auto h-[43px] flex md:flex-row flex-col">
              <button className=" text-black text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-pink-300  bg-[#F4B5D9] text-center font-montserrat  ">
                View Group Packages
              </button>
              <p className="mx-6   text-sm font-bold leading-6  underline   px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat  ">
                View Addons
              </p>
            </div>
          </div>
        </div>

        
        <div className="w-full">
        <div className="my-6 w-[90%]  mx-auto p-4">
        <p className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
        Surgery Sisters
            </p>
          <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
          The Snatched! or Bougie Babe package is available at a discounted
              rate when booked with a friend (or two). Friends that get bodied
              together stay together!
          </p>
        </div>
      </div>

        <div className=" w-full px-auto my-8">
          <div className=" items-center w-full flex md:flex-row flex-col justify-center mx-auto gap-8">
            <div className="border border-[#3BAFBF] w-[300px] h-[505px] flex flex-col items-center justify-center p-4">
              <div className="flex flex-col gap-30">
                <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  Snatched!
                </p>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-[#3BAFBF] my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $2,200
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300  bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col mt-4 gap-[17px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Includes everything from Snatched! package.
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Total discount of $600!
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Snatched! recovery care for 2
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Add a 3rd for $600 (total discount of $1,100)
                </p>
              </div>
            </div>
            <div className="border border-[#3BAFBF] w-[300px] h-[505px] flex flex-col items-center justify-center p-4">
              <div className="flex flex-col gap-30">
                <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  The Bougie Babe
                </p>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-[#3BAFBF] my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $3,200
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300  bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col mt-4 gap-[17px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Includes everything from Snatched! package.
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Total discount of $600!
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Snatched! recovery care for 2
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Add a 3rd for $600 (total discount of $1,100)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
        <div className="my-6 w-[90%]  mx-auto p-4">
        <p className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
        Fine Print
            </p>
          <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
          Surgery sisters must be staying at the same residence (house or
              hotel) and receiving surgery on the SAME DAY and same surgery
              center (or a max of 15 mins away).
          </p>
        </div>
      </div>

        <div className=" w-full">
          <div className="my-6 items-center w-[60%] flex  justify-center mx-auto">
            <div className="my-10 w-auto h-[43px] flex md:flex-row flex-col ">
              <button className=" text-black text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-pink-300  bg-[#F4B5D9] text-center font-montserrat  ">
                View Solo Packages
              </button>
              <p className="mx-6  text-sm font-bold leading-6  underline   px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat  ">
                View Addons
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className="my-6 items-center w-[60%] flex flex-col justify-center mx-auto">
          <p className=" py-2  leading-normal text text-black text-center font-montserrat font-bold text-[18px]  md:text-[24px]">
            Surgery Recovery Addons
          </p>
          <p className="w-full flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
            Can add these to a recovery package
          </p>
        </div>
      </div>

      <div className=" w-full my-8">
        <div className="border border-[#3BAFBF] w-[90%] h-auto items-center justify-center flex flex-col md:flex-row  mx-auto">
          <div className="w-full md:w-1/2  ">
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div className="">
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Recovery Day (12 hrs)
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Additional day of overnight CNA care, for 12 hours
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $300
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Iron Infusion
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Boost your iron level with an iron infusion
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $379
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Pre-Op Infusion
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Get an IV drip before your surgery
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                $299
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Shower & Faja Assistance
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Get shower and faja assistance from a CNA
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $200
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 py-[4px]">
              <div>
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Seroma Aspirations
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Seroma pain relief and fluid leak prevention
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                $199
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Transportation
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Add post-op, pre-op, or follow up transportation
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                $140
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5  mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Suture Removal
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                CNA assistance for removing sutures
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $229
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5  mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Drain Removal
                </p>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Assistance draining excess fluids from incisions
                </p>
              </div>
              <div>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                $189
                </p>
              </div>
            </div>
            <div className="   my-5  mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div className="flex justify-between">
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Lymphatic Massages
                </p>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                starts at $130
                </p>
              </div>
              <div>
                <p className="w-full flex justify-start text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Add packages of 1, 3, 5, and 10 lymphatic massages
                </p>
              </div>
            </div>
            <div className="   my-5  mx-2 md:mx-10  py-[4px] ">
              <div className="flex justify-between">
                <p className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                Surgery Sisters
                </p>
                <p className="text-teal-400 text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                see above
                </p>
              </div>
              <div>
                <p className="w-full flex justify-start text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                Recover with a group of 2 or more friends at a discounted rate
                </p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SurgeryRecovery;
