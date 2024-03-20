import React from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import CalendarHeaderPic from "../images/Calendar/CalendarHeaderPic.png";
import MeetUpPic from "../images/Calendar/MeetupPic.png";
import bar2 from "../images/bar2.png";
import LocationPic from "../images/Calendar/LocationPic.png";
import DripsCalendar from "../images/Calendar/Drip N Bodied Calendar.png";
import img1 from "../images/tele.png";
import img2 from "../images/msg.png";
import { IoIosMail } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
import Link from "next/link";

const CalendarPage = () => {
  return (
    <>
      <div className=" h-full md:h-[650px]">
        <div className="w-full flex flex-col md:flex-row justify-between mx-auto ">
          <div className="w-full md:w-[65%] px-10  pt-6 md:pt-16 ml-22">
            <div className="flex flex-col lg:leading-[100px]">
              <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">
                View Our{" "}
              </p>
              <p className="text-4xl lg:text-7xl  xl:text-8xl font-bold font-montserrat ">
                Calendar For{" "}
              </p>
              <p className="text-4xl lg:text-7xl  xl:text-8xl font-bold font-montserrat  ">
                {" "}
                Your Big Day{" "}
              </p>
            </div>
            <div className="my-6 md:my-5 lg:my-10 w-full lg:w-auto h-[43px] flex flex-col lg:flex-row">
              <Link
                href="/surgery"
                className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2  hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat"
              >
                View our calendar
              </Link>
              <Link
                href="#calender-section"
                className="text-[#3BAFBF] font-montserrat text-xl font-bold leading-[27px] uppercase"
              >
                Book a recovery Package
              </Link>
            </div>
          </div>
          <div className="  lg:w-[35%] flex ">
            <Image
              src={CalendarHeaderPic}
              alt="Logo"
              className="w-full md:w-[80vw] lg:w-[656px] lg:mix-blend-multiply object-cover "
            />
          </div>
        </div>
        <div className="w-full relative -top-12 md:-top-32 ">
          <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center items-center w-auto h-[27px]">
              <h1
                className="font-niconne text-3xl md:text-6xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] "
                style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }}
              >
                Drip N Bodied Calendar
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="Main py-6 " id="calender-section">
        <div className="heading flex flex-col justify-center items-center">
          <h2 className="text-black text-center font-montserrat font-bold text-xl leading-normal">
            Choose Your Booking Date
          </h2>
          <p className="text-xs py-3">Use the calendar to book your date.</p>
        </div>
        <div className="MainContent w-full flex flex-col md:flex-row justify-center items-center my-4 ">
          <div className="BookingAction md:w-[45%] lg:w-[25%]  h-[600px] flex flex-col bg-[#3BAFBF] gap-2 p-3">
            <div className="p-1">
              <p className=" text-white font-montserrat text-base font-normal leading-normal uppercase">
                Friday <br /> November 12th
              </p>
            </div>
            <div className="bg-white h-[1px] my-1"></div>
            {/* <hr className="text-black"/>   */}
            <p className="text-white text-center font-montserrat text-xs font-normal leading-normal my-2">
              Book a service by clicking one of the services below
            </p>
            <div className="h-[400px] gap-5 flex flex-col p-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  Cosmetic Surgery Recovery
                </p>
              </button>
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  Lymphatic Massage (Med Spa)
                </p>
              </button>
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  Lymphatic Massage (Mobile)
                </p>
              </button>
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  IV Hydration (Med Spa)
                </p>
              </button>
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  IV Hydration (Mobile)
                </p>
              </button>
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  Consultation / Pre-Op Call
                </p>
              </button>
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  Drain & Suture Management
                </p>
              </button>
              <button className="bg-[#FFFFFF] p-2 h-[40px]">
                <p className="text-[#3BAFBF] text-center font-montserrat text-[14px] font-normal ">
                  Drain & Suture Management
                </p>
              </button>
            </div>
          </div>
          <div
            className=" Calendar flex flex-col justify-between  p-6 h-64 md:h-[600px] md:w-[45%] lg:w-[35%] "
            style={{ backgroundColor: "rgba(244, 181, 217, 0.17)" }}
          >
            <div className="h-34 flex justify-end items-end">
              <p className="text-black text-right font-montserrat text-4xl font-normal ">
                2024
              </p>
            </div>
            <div className="my-6">
              <Calendar className="react-calendar  text-black font-montserrat text-base font-normal leading-normal" />
            </div>
          </div>
        </div>
      </div>
        <div className="text-center my-2">
          <p className="text-black font-montserrat text-base font-normal leading-[27px]">
            Have questions about our booking process or your surgery date?
          </p>
          <Link href='/resourcehub' className="text-[#3BAFBF] font-montserrat text-base font-normal leading-[27px]">Click here for our booking resource hub</Link>
        </div>

      <div className=" w-full mt-5">
        <div className=" items-center w-[60%] flex flex-col justify-center mx-auto">
          <h2 className=" py-2  leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
            Meet Us At the Bar
          </h2>
          <p className="w-full flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
            We also service those in the miami area
          </p>
        </div>
      </div>

      <div className=" w-full mt-24 items-center flex justify-center ">
        <div className="my-6 items-center w-[86%] flex flex-col md:flex-row justify-center  mx-auto gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 h-auto md:h-[760px]">
            <div className="border-b border-b-slate-300 flex flex-col md:flex-row  justify-around pb-4 ">
              <div className="flex flex-col items-center">
                <div className="font-bold text-center">Monday - Saturday</div>
                <p className="text-center">8:00 AM - 7:00 PM</p>
                <div className="flex pt-3 ">
                  <div className="flex flex-col items-center">
                    <p>
                      {" "}
                      <IoIosMail className="text-gray-400 text-opacity-65 w-[72px] h-[38px]" />
                    </p>
                    <p className="">booking@dripnbodied.com</p>
                  </div>
                </div>
              </div>
              <div className=" border-l border-l-slate-300  h-14"></div>
              <div className="flex flex-col  items-center ">
                <div className="font-bold text-center">After Hours:</div>
                <p className="text-center">By request only</p>
                <div className="flex pt-3 ">
                  <div className="flex flex-col items-center">
                    <p className="text-center text-3xl text-red-600 text-[32px] mx-auto ">
                      ☎
                    </p>
                    <p className=" text-[16px] ">(305) 908-9282</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full ">
              <div className="my-6 items-center flex flex-col justify-center mx-auto">
                <p className="pt-2  leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
                  1001 Ponce de Leon, Suite A Coral Gables, Florida
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[560px] md:h-[50%] xl:h-[440px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.4046384566!2d-80.22254426588243!3d25.81037282058394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1709544572684!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-auto md:h-[760px] relative">
            <div className="absolute inset-0 bg-gradient-to-r  to-transparent"></div>
            <Image src={bar2} alt="img" className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="w-full items-center justify-center  text-center p-2">
        <a href="" className="text-base font-bold text-[#3BAFBF]">
          View our Mobile Concierge Services
        </a>
      </div>
    </>
  );
};
export default CalendarPage;
