"use client";
import React, { useState } from "react";
import Image from "next/image";
import Polygon from "../../images/Polygon.png";
import thereal from "../../images/TheReal.png";
import tempImagewju from "../../images/tempImagewju.png";
import therealtwo from "../../images/therealtwo.png";
import Polygon1 from "../../images/Polygon1.png";
import Link from "next/link";


const FaqPage = () => {

  const faqItems = [
    {
      question:
        "Do you offer lymphatic massages to clients that do not book a Bodied package?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, animi?",
    },
    {
      question:
        "What if I need more assistance/care than what’s offered in your packages?",
      answer: "Answer for the second question.",
    },
    {
      question: "Are you a recovery house?",
      answer: "Answer for the third question.",
    },
    {
      question: "What do I need to bring with me for my recovery?",
      answer: "Answer for the fourth question.",
    },
    {
      question: "Do you travel out of state?",
      answer:
        "We are based out of south Florida and primarily offer our services in Miami. However we do travel to Fort Lauderdale, and West Palm Beach (travel fees may apply). Email us to inquire about pricing for traveling out of the state/country.",
    },
  ];


  const [accordionStates, setAccordionStates] = useState(
    Array.from({ length: faqItems.length }, () => false)
  );

  const handleAccordionClick = (index: any) => {
    const newAccordionStates = accordionStates.map((state, i) =>
      i === index ? !state : false
    );
    setAccordionStates(newAccordionStates);
  };

  return (
    <>
      <div
        className="w-full flex flex-col md:flex-row justify-between items-center md:items-start md:ml-22"
        style={{
          background:
            "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)",
        }}
      >
        <div className="w-[65%] px-10  pt-6 md:pt-16 ml-22">
          <div className="flex flex-col  lg:leading-[100px]">
            <p className="text-4xl lg:text-8xl font-bold font-montserrat ">
              Need Help
            </p>
            <p className="text-4xl lg:text-8xl font-bold font-montserrat ">
              Completing{" "}
            </p>
            <p className="text-4xl lg:text-8xl font-bold font-montserrat  ">
              Your Booking?
            </p>
          </div>
          <div className="md:flex justify-center items-center md:justify-start mt-4 md:mt-8 gap-8">
            <Link href='/faq#Frequently-asked-Questions' className="bg-[#3BAFBF] px-8 flex p-2 text-sm md:text-base font-bold text-white uppercase">
              View FAQ
            </Link>
            <Link href='/resourcehub' className="text-[#3BAFBF] font-montserrat text-[16px] font-bold leading-7 uppercase mt-1">
              View our booking resource hub
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[35%] mt-8 md:mt-0 md:ml-8">
          <Image
            src={tempImagewju}
            alt="Logo"
            className="w-full md:w-[606px] h-[580px] mix-blend-multiply object-cover"
          />
        </div>
      </div>
      <div className=" relative md:-top-[110px] py-12 md:w-full md:h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
        <div className="flex justify-center  items-center w-auto h-[27px]">
          <h1
            className="font-niconne md:text-6xl text-3xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] "
            style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }}
          >
            {" "}
            Post Cosmetic Surgery Questions
          </h1>
        </div>
      </div>

      <div className="w-full " id="Frequently-asked-Questions">
        <div className="w-full md:w-[1000px] mx-auto">
          <div className="md:mb-8 flex justify-center">
            <h2 className="font-bold text-4xl text-[24px] leading-8 md:leading-29 tracking-normal text-center">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="border-t border-t-gray-300"></div>
          <div className="bg-white px-0   rounded-md ">
            {faqItems.map((item, index) => (
              <div key={index} className=" p-3 ">
                <input
                  type="checkbox"
                  id={`item${index}`}
                  className="hidden"
                  checked={accordionStates[index]}
                />
                <label
                  htmlFor={`item${index}`}
                  className="flex items-center justify-between cursor-pointer p-2 rounded-md ga-4 md:gap-8 hover:bg-pink-300/25"
                  onClick={() => handleAccordionClick(index)}
                >
                  <span className="text-black font-montserrat text-base font-bold">
                    {item.question}
                  </span>
                  {accordionStates[index] ? (
                    <Image
                      src={Polygon1}
                      alt=""
                      width={100}
                      height={100}
                      className="w-3 h-2"
                    />
                  ) : (
                    <Image
                      src={Polygon}
                      alt=""
                      width={100}
                      height={100}
                      className="w-3 h-2"
                    />
                  )}
                </label>
                {accordionStates[index] && (
                  <div id={`accordion-item-${index + 1}`} className="px-2 py-4">
                    <p className=" text-black font-montserrat text-base font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
                <div
                  className={`${index === faqItems.length - 1
                      ? ""
                      : "border-b border-b-gray-300 mt-3"
                    }`}
                ></div>
              </div>
            ))}
            <div className="text-center my-5">
              <Link href='/resourcehub' className="text-[#3BAFBF] font-montserrat text-md font-bold leading-[27px] uppercase">View our booking resource hub</Link>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center"
         style={{
          background:
            "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)",
        }}>
          <div className="w-[70%] mx-auto">
            <div className="mt-12 text-[24px] font-bold flex justify-center text-md">
              <p>Email Us Your Question</p>
            </div>
            <div className="mt-6 p-6">
              <p className="pb-4 font-bold ">How shall we address you?</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your full name"
                className="border border-black  outline-none w-full p-3 bg-white"
              />
            </div>
            <div className="p-6">
              <p className="pb-4 font-bold ">How can we contact you?</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
                className="border border-black  outline-none w-full p-3 bg-white"
              />
            </div>
            <div className=" p-6">
              <p className="pb-4 font-bold">
                Tell us about your question. (Please use 10 to 500 characters)
              </p>
              <textarea
                name=""
                id=""
                placeholder="Enter your question and any additional details"
                className="border border-black w-full h-[300px] outline-none p-3 "
              ></textarea>
            </div>
            <div className="mb-20 ml-5">
              <button className="text-white font-montserrat text-md font-semibold uppercase bg-[#3BAFBF] px-4 py-1">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
