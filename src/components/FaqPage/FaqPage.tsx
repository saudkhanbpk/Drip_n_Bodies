"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Polygon from '../../images/Polygon.png';
import thereal from "../../images/TheReal.png";
import tempImagewju from '../../images/tempImagewju.png';
import therealtwo from '../../images/therealtwo.png'
import Polygon1 from '../../images/Polygon1.png'
const faqItems = [
    {
        question: 'Do you offer lymphatic massages to clients that do not book a Bodied package?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, animi?',
    },
    {
        question: 'What if I need more assistance/care than what’s offered in your packages?',
        answer: 'Answer for the second question.',
    },
    {
        question: 'Are you a recovery house?',
        answer: 'Answer for the third question.',
    },
    {
        question: 'What do I need to bring with me for my recovery?',
        answer: 'Answer for the fourth question.',
    },
];

const FaqPage = () => {
    const [accordionStates, setAccordionStates] = useState([false, false, false, false]);

    const handleAccordionClick = (index: any) => {
        const newAccordionStates = [...accordionStates];
        newAccordionStates[index] = !newAccordionStates[index];
        setAccordionStates(newAccordionStates);
    };

    return (
        <>
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start md:ml-22">
                <div className="w-full md:w-auto p-8 text-center md:text-left">
                    <div className="flex flex-col  gap-4">
                        <p className="text-4xl md:text-7xl font-bold">Need Help</p>
                        <p className="text-4xl md:text-7xl font-bold">Completing </p>
                        <p className="text-4xl md:text-7xl font-bold ">Your Booking?</p>
                    </div>
                    <div className='flex justify-center md:justify-start mt-8 px-4'>
                        <button className='bg-[#3BAFBF] px-4 py-2 text-base font-bold text-white'>Book a Consultation</button>
                    </div>
                </div>

                <div className="w-full md:w-auto mt-8 md:mt-0 md:ml-8">
                    <Image src={tempImagewju} alt="Logo" className="w-full md:w-[606px] h-[580px] mix-blend-multiply" />
                </div>
            </div>

            <div className="w-full relative -top-24 ">
                <div className="py-12 w-full h-[141px] bg-cover bg-no-repeat bg-center bg-[url('../images/realmiami.png')]">
                    <div className="flex justify-center items-center w-auto h-[27px]">
                        <Image src={therealtwo} alt="real" />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="w-full md:w-1/2 mx-auto">
                    <div className="mb-4 flex justify-center">
                        <p className="font-bold text-4xl text-[20px] leading-8 md:leading-29 tracking-normal text-left">Frequently Asked Questions</p>
                    </div>
                    <div className="border-t border-t-gray-300"></div>
                    <div className="bg-white px-0 py-4  rounded-md">
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
                                    className="flex items-center justify-between cursor-pointer p-2 rounded-md gap-8"
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
                                    <div id={`accordion-item-${index + 1}`} className="p-4">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                                <div className="border-b border-b-gray-300"></div>
                            </div>
                        ))}
                    </div>

                    <div className='mb-10 text-sm font-bold flex justify-center text-md'>
                        <p>Email Us Your Question</p>
                    </div>
                    <div className='mb-10 p-5'>
                        <p className='pb-2 font-bold'>What is your question?</p>
                        <input type="text" name="" id="" className='border border-gray-300 p-1 outline-none w-full' />
                    </div>
                    <div className='mb-14 p-5'>
                        <p className='pb-2 font-bold'>Tell us more about your question.</p>
                        <textarea name="" id="" className='border border-gray-300 w-full h-[300px] outline-none'  ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPage;
