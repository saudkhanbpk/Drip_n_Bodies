import Image from "next/image";
import React from "react";
import surg1 from "../images/surg1.png";
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
        <div className=" w-full flex justify-between ">
          <div className="w-auto px-10 m-10 pt-16 ml-22">
            <div className="  flex flex-col gap-8 ">
              <p className="text-7xl font-bold">Where </p>
              <p className="text-7xl font-bold ">Beauty Meets </p>
              <p className="text-7xl font-bold ">Convenience</p>
            </div>
            <div className="my-10 w-auto h-[43px] flex ">
              <button className=" text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
                View Packages
              </button>
              <p className="mx-6  text-sm font-bold leading-6 uppercase   px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat  ">
                View Group Packages
              </p>
            </div>
          </div>
          <div className=" w-auto flex justify-end items-center">
            <Image
              src={surg1}
              alt="Logo"
              className=" w-[656px] mix-blend-multiply  object-cover  h-[580px]"
            />
          </div>
        </div>
        <div className="w-full  relative -top-14 ">
          <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center items-center w-auto h-[27px]">
              <p className="text-blue-500 text-center font-niconne text-6xl font-normal">
                Miami Cosmetic Surgery Recovery
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="my-6 items-center w-[800px] flex flex-col justify-center mx-auto">
            <p className=" py-2 font-montserrat  leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
              Cosmetic Surgery Recovery Packages
            </p>
            <p className="w-full flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal ">
              Drip N Bodied offers post operative care services to YOU in the
              comfort of your home or hotel. We gladly serve as an advocate for
              our clients as they navigate through the healthcare system in
              preparation for surgery. We take pride in assisting our clients
              with a speedy and safe recovery after cosmetic surgery.
            </p>
          </div>
        </div>

        <div className=" w-full px-auto">
          <div className=" items-center w-full flex justify-center mx-auto gap-8">
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
                <button className="w-[146px] font-montserrat text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
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
                <button className="w-[146px] font-montserrat text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-pink-300 mt-4 lg:mt-0 bg-[#F4B5D9] text-center font-montserrat  ">
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
                <button className="w-[146px] font-montserrat text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
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
                <button className="w-[146px] font-montserrat text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
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

        <div className=" w-full">
          <div className="my-6 items-center w-[800px] flex flex-col justify-center mx-auto">
            <div className="my-10 w-auto h-[43px] flex ">
              <button className="font-montserrat text-black text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-pink-300 mt-4 lg:mt-0 bg-[#F4B5D9] text-center font-montserrat  ">
                View Group Packages
              </button>
              <p className="mx-6 font-montserrat  text-sm font-bold leading-6  underline   px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat  ">
                View Addons
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="my-6 items-center w-[800px] flex flex-col justify-center mx-auto">
            <p className=" py-2 font-montserrat  leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
              Surgery Sisters
            </p>
            <p className="w-full flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal ">
              The Snatched! or Bougie Babe package is available at a discounted
              rate when booked with a friend (or two). Friends that get bodied
              together stay together!
            </p>
          </div>
        </div>

        <div className=" w-full px-auto my-8">
          <div className=" items-center w-full flex justify-center mx-auto gap-8">
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
                <button className="w-[146px] font-montserrat text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
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
                <button className="w-[146px] font-montserrat text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
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

        <div className=" w-full">
          <div className="my-6 items-center w-[800px] flex flex-col justify-center mx-auto">
            <p className=" py-2 font-montserrat  leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
              Fine Print
            </p>
            <p className="w-full flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal ">
              Surgery sisters must be staying at the same residence (house or
              hotel) and receiving surgery on the SAME DAY and same surgery
              center (or a max of 15 mins away).
            </p>
          </div>
        </div>

        <div className=" w-full">
          <div className="my-6 items-center w-[800px] flex flex-col justify-center mx-auto">
            <div className="my-10 w-auto h-[43px] flex ">
              <button className="font-montserrat text-black text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-pink-300 mt-4 lg:mt-0 bg-[#F4B5D9] text-center font-montserrat  ">
              View Solo Packages
              </button>
              <p className="mx-6 font-montserrat  text-sm font-bold leading-6  underline   px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat  ">
                View Addons
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurgeryRecovery;
