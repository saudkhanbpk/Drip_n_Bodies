"use client";
import React, { useState } from "react";
import Image from "next/image";
import Polygon from "../../images/Polygon.png";
import thereal from "../../images/TheReal.png";
import tempImagewju from "../../images/tempImagewju.png";
import therealtwo from "../../images/therealtwo.png";
import Polygon1 from "../../images/Polygon1.png";
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
];

const FaqPage = () => {
  const [accordionStates, setAccordionStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleAccordionClick = (index: any) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };

    return (
        <>
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start md:ml-22" style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)' }}>
                <div className="w-[65%] px-10  pt-6 md:pt-16 ml-22">
                    <div className="flex flex-col  lg:leading-[100px]">
                        <p className="text-4xl lg:text-8xl font-bold font-montserrat ">Need Help</p>
                        <p className="text-4xl lg:text-8xl font-bold font-montserrat ">Completing </p>
                        <p className="text-4xl lg:text-8xl font-bold font-montserrat  ">Your Booking?</p>
                    </div>
                    <div className='flex justify-center md:justify-start mt-8 px-4'>
                        <button className='bg-[#3BAFBF] px-4 py-2 text-base font-bold text-white'>Book a Consultation</button>
                    </div>
                </div>

                <div className="w-full md:w-[35%] mt-8 md:mt-0 md:ml-8">
                    <Image src={tempImagewju} alt="Logo" className="w-full md:w-[606px] h-[580px] mix-blend-multiply object-cover" />
                </div>
            </div>
            <div className="py-12 md:w-full md:h-[141px] bg-cover bg-[url('../images/realmiami.png')] relative md:-top-10">
                <div className="flex justify-center  items-center w-auto h-[27px]">
                    <p className="font-niconne md:text-6xl text-3xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] " style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }} > Post Cosmetic Surgery Questions</p>
                </div>

            </div>



            <div className="w-full">
                <div className="w-full md:w-1/2 mx-auto">
                    <div className="mb-4 flex justify-center">
                        <p className="font-bold text-4xl text-[20px] leading-8 md:leading-29 tracking-normal text-left">Frequently Asked Questions</p>
                    </div>
                    <div className="border-t border-t-gray-300"></div>
                    <div className="bg-white px-0 py-4  rounded-md ">
                        {faqItems.map((item, index) => (
                            <div key={index} className="mb-4 p-4">
                                <input
                                    type="checkbox"
                                    id={`item${index}`}
                                    className="hidden"
                                    checked={accordionStates[index]}
                                />
                                <label
                                    htmlFor={`item${index}`}
                                    className="flex items-center justify-between cursor-pointer p-2 rounded-md gap-8 hover:bg-pink-300/25"
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <span className="font-bold text-4xl text-[20px] leading-8 md:leading-29 tracking-normal text-left">
                                        {item.question}
                                    </span>
                                    {accordionStates[index] ? (
                                        <Image src={Polygon1} alt="" width={100} height={100} className="w-3 h-2" />
                                    ) : (
                                        <Image src={Polygon} alt="" width={100} height={100} className="w-3 h-2" />
                                    )}
                                </label>
                                {accordionStates[index] && (
                                    <div id={`accordion-item-${index + 1}`} className="px-2 py-4">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                                <div className={`${index === faqItems.length - 1 ? '' : 'border-b border-b-gray-300 mt-3'}`}></div>
                            </div>
                        ))}
                    </div>

                    <div className='mb-10 text-[24px] font-bold flex justify-center text-md'>
                        <p>Email Us Your Question</p>
                    </div>
                    <div className='mb-10 p-5'>
                        <p className='pb-2 font-bold'>What is your question?</p>
                        <input type="text" name="" id="" className='border border-black  outline-none w-full p-3 bg-white' />
                    </div>
                    <div className='mb-14 p-5'>
                        <p className='pb-2 font-bold'>Tell us more about your question.</p>
                        <textarea name="" id="" className='border border-black w-full h-[300px] outline-none p-3 '  ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPage;
