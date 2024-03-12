"use client";
import React, { useState } from "react";
import Image from "next/image";
import Polygon from "../images/Polygon.png";
import Polygon1 from "../images/Polygon1.png";
import about1 from "../images/about1.png";
import policyy from "../images/policyy.png";
// import image1 from "../images/Rectangle.png"
import ScheduleConsultation from "./ScheduleConsultation";

const faqItems = [
  {
    question: "Late exit from surgery policy",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, animi?",
  },
  {
    question: "Refund/Cancellation Policy",
    answer: "Answer for the second question.",
  },
  {
    question: "Recovery Policy",
    answer: "Answer for the third question.",
  },
  {
    question: "Timing Policy",
    answer: "Answer for the fourth question.",
  },
  {
    question: "Overnight Parking Policy",
    answer: " Clients who have packages that include overnight Recovery Assistant care are responsible for parking fees. At the conclusion of service, the client will be invoiced.",
  },
];

const Policy = () => {
  const [accordionStates, setAccordionStates] = useState(Array.from({ length: faqItems.length }, () => false));

  const handleAccordionClick = (index:any) => {
    const newAccordionStates = accordionStates.map((state, i) => i === index ? !state : false);
    setAccordionStates(newAccordionStates);
  };

  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center md:items-start h-100">
        <div className="w-full md:w-auto p-4 md:p-8 text-center md:text-left lg:ml-32">
          <div className="flex flex-col gap-4">
            <p className="text-4xl md:text-7xl 2xl:text-8xl font-bold font-Montserrat">It’s All</p>
            <p className="text-4xl md:text-7xl 2xl:text-8xl font-bold font-Montserrat">About The </p>
            <p className="text-4xl md:text-6xl 2xl:text-8xl font-bold font-Montserrat">Fine Print Babe</p>
          </div>
          <div className="flex justify-center md:justify-start mt-4 md:mt-8">
            <button className="font-Montserrat bg-[#3BAFBF] px-4 py-2 text-sm md:text-xl font-medium text-white">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4 lg:ml-8 relative">
          <Image
            src={about1}
            alt="Logo"
            className="w-100 mix-blend-multiply md:w-[506px] lg:w-[606px] h-[480px] lg:h-[580px]"
          />
        </div>
      </div>

      <div className="w-full relative md:-top-24">
        <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
          <div className="flex justify-center items-center w-auto h-[27px]">
            <p className="text-[#3BAFBF] text-center font-niconne text-6xl lg:text-6xl font-medium"
            style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: '#FFF',  }}
            >
              Drip N Bodied Policy
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10 text-sm font-bold flex justify-center text-md">
        <p className="text-center font-montserrat text-black text-2xl font-bold">
          Read our policy
        </p>
      </div>

      <div className="w-full">
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-5">
          <div className="border-t border-t-gray-300"></div>
          <div className="bg-white px-0 py-4 rounded-md ">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4 space-y-3">
                <input
                  type="checkbox"
                  id={`item${index}`}
                  className="hidden"
                  checked={accordionStates[index]}
                />
                <label
                  htmlFor={`item${index}`}
                  className="flex items-center justify-between cursor-pointer p-2 rounded-md gap-4 md:gap-8 hover:bg-pink-50"
                  onClick={() => handleAccordionClick(index)}
                >
                  <span className="font-bold text-xl md:text-2xl leading-8 md:leading-12 tracking-normal text-left">
                    {item.question}
                  </span>
                  {accordionStates[index] ? (
                    <Image
                      src={Polygon1}
                      alt=""
                      width={50}
                      height={50}
                      className="w-2 h-1 md:w-3 md:h-2"
                    />
                  ) : (
                    <Image
                      src={Polygon}
                      alt=""
                      width={50}
                      height={50}
                      className="w-2 h-1 md:w-3 md:h-2"
                    />
                  )}
                </label>
                {accordionStates[index] && (
                  <div
                    id={`accordion-item-${index + 1}`}
                    className="p-2 text-[20px]"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
                <div className="border-b border-b-gray-300"></div>
              </div>
            ))}
          </div>

          {/* <div className="mb-10 p-5">
            <p className="pb-2 font-bold">Overnight Parking Policy</p>
            <p>
              Clients who have packages that include overnight Recovery
              Assistant care are responsible for parking fees. At the conclusion
              of service, the client will be invoiced.
            </p>
          </div> */}

        </div>
          <div className="mt-20 bg-pink-100" 
          // style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)' }}
          >
            <div className="w-2/3 mx-auto">
          <div className="mb-5 text-2xl font-bold flex justify-center text-md p-5 mt-5">
            <p>Email Us Your Question</p>
          </div>
          <div className="mb-5 p-5">
            <p className="pb-2 font-bold">What is your question?</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your question"
              className="border border-gray-300 p-4 outline-none w-full"
            />
          </div>
          <div className="p-5">
            <p className="pb-2 font-bold mb-4">
              Tell us more about your question.
            </p>
            <textarea
              name=""
              id=""
              placeholder="Enter the details of your question"
              className="border border-gray-300 w-full h-[300px] outline-none mb-5 p-2 px-2"
            ></textarea>
          </div>
          </div>
      </div>
      </div>
      <div className="mb-20">
          <ScheduleConsultation/>
      </div>

    </>
  );
};

export default Policy;
