import React from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import CalendarHeaderPic from "../images/Calendar/CalendarHeaderPic.png";
import MeetUpPic from "../images/Calendar/MeetupPic.png";
import bar2 from "../images/bar2.png";
import LocationPic from "../images/Calendar/LocationPic.png";
import DripsCalendar from "../images/Calendar/Drip N Bodied Calendar.png";

const CalendarPage = () => {
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
              <div className="flex flex-col lg:gap-4">
                <p className="text-4xl lg:text-7xl xl:text-7xl font-bold">
                  View Our{" "}
                </p>
                <p className="text-4xl lg:text-7xl font-bold ">Calendar For </p>
                <p className="text-4xl lg:text-7xl font-bold  ">
                  {" "}
                  Your Big Day{" "}
                </p>
              </div>
              <div className="my-6 md:my-5 lg:my-10 w-full lg:w-auto h-[43px] flex flex-col lg:flex-row">
                <button className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2 rounded hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat">
                  Book a Consultation
                </button>
              </div>
            </div>
            <div className="  lg:w-auto flex ">
              <Image
                src={CalendarHeaderPic}
                alt="Logo"
                className="w-full md:w-[80vw] lg:w-[656px] lg:mix-blend-multiply object-cover "
              />
            </div>
          </div>
          <div className="w-full relative -top-12 md:-top-20 ">
            <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
              <div className="flex justify-center items-center w-auto h-[27px]">
                <p className="text-blue-500 text-center font-niconne text-4xl lg:text-6xl font-normal">
                  Drip N Bodied Calendar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Main py-12 ">
          <div className="heading flex flex-col justify-center items-center">
            <h4 className="font-bold py-6">Choose Your Booking Date</h4>
            <p className="text-xs py-3">Use the calendar to book your date.</p>
          </div>
          <div className="MainContent w-full flex flex-col md:flex-row justify-center items-center my-3 ">
            <div className="BookingAction md:w-[45%] lg:w-[25%]  h-[600px] flex flex-col bg-[#3BAFBF] gap-y-6 p-3">
              <div className="p-1">
                <p className=" text-white font-montserrat text-base font-normal leading-normal uppercase">
                  Friday <br /> November 12th
                </p>
              </div>
              <hr className="text-black"/>
              <p className="text-white text-center font-montserrat text-xs font-normal leading-normal">
                Book a service by clicking one of the services below
              </p>
              <div className="gap-6 flex flex-col p-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    Cosmetic Surgery Recovery
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    Lymphatic Massage (Med Spa)
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    Lymphatic Massage (Mobile)
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    IV Hydration (Med Spa)
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    IV Hydration (Mobile)
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    Consultation / Pre-Op Call
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    Drain & Suture Management
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    Drain & Suture Management
                  </p>
                </button>
                <button className="bg-[#FFFFFF] p-2">
                  <p className="text-blue-500 text-center font-montserrat text-[14px] font-normal ">
                    Drain & Suture Management
                  </p>
                </button>
              </div>
            </div>
            <div className=" Calendar flex flex-col justify-between  p-6 h-64 md:h-[600px] md:w-[45%] lg:w-[35%] bg-[#F4B5D92B] bg-opacity-20">
              <div className="h-34 flex justify-end items-end">
                <p className="text-black text-right font-montserrat text-4xl font-normal ">
                  2024
                </p>
              </div>
              <div className="my-6">
                <Calendar className="text-black font-montserrat text-base font-normal leading-normal" />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full mt-2">
          <div className="my-6 items-center w-[60%] flex flex-col justify-center mx-auto">
            <p className=" py-2  leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
              Meet Us At the Bar
            </p>
            <p className="w-full flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
              We also service those in the miami area
            </p>
          </div>
        </div>

        <div className=" w-full mt-24 items-center flex justify-center ">
          <div className="my-6 items-center w-[86%] flex flex-col md:flex-row justify-center  mx-auto gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 h-auto md:h-[760px]">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 justify-center mx-auto border-b-[2px]">
                <div className="px-4">
                  <p className="text-black text-center font-Montserrat text-[24px] font-bold leading-normal">
                    Monday - Saturday
                  </p>
                  <p className="text-black font-Montserrat text-[24px] font-normal leading-normal">
                    8:00 AM - 7:00 PM
                  </p>
                  <div className="flex flex-col items-center justify-center my-4">
                    <span className="text-3xl mx-auto">✉</span>
                    <p>booking@dripnbodied.com</p>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-black text-center font-Montserrat text-[24px] font-bold leading-normal">
                    After Hours:
                  </p>
                  <p className="text-black font-Montserrat text-[24px] font-normal leading-normal">
                    {" "}
                    By Request Only
                  </p>
                  <div className="flex flex-col items-center justify-center my-4">
                    <span className="text-center text-3xl text-red-700 ">
                      ☎
                    </span>
                    <p>(305) 908-9282</p>
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
            <div className="w-full lg:w-1/2   h-auto md:h-[760px]">
              <Image src={bar2} alt="img" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CalendarPage;
