"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Polygon from '../images/Polygon.png';
import Polygon1 from '../images/Polygon1.png';
import about1 from '../images/about1.png';
import policyy from '../images/policyy.png';

const faqItems = [
  {
    question: 'Late exit from surgery policy',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, animi?',
  },
  {
    question: 'Refund/Cancellation Policy',
    answer: 'Answer for the second question.',
  },
  {
    question: 'Recovery Policy',
    answer: 'Answer for the third question.',
  },
  {
    question: 'Timing Policy',
    answer: 'Answer for the fourth question.',
  },
];

const Policy = () => {
  const [accordionStates, setAccordionStates] = useState([false]);

  const handleAccordionClick = (index: any) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start ">
        <div className="w-full md:w-auto p-4 md:p-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <p className="text-2xl md:text-5xl font-bold">It’s All</p>
            <p className="text-2xl md:text-5xl font-bold">About The </p>
            <p className="text-2xl md:text-5xl font-bold ">Fine Print Babe</p>
          </div>
          <div className='flex justify-center md:justify-start mt-4 md:mt-8'>
            <button className='bg-[#3BAFBF] px-4 py-2 text-sm md:text-base font-bold text-white'>Book a Consultation</button>
          </div>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4 lg:ml-8 relative">
          <Image src={about1} alt="Logo" className="w-full md:w-[506px] lg:w-[606px] h-[480px] lg:h-[580px] mix-blend-multiply" />
        </div>
      </div>

      <div className="w-full relative -top-24 ">
        <div className="py-6 md:py-12 w-full h-[141px] md:h-[191px] lg:bg-cover lg:bg-no-repeat bg-center md:bg-[url('../images/realmiami.png')]">
          <div className="flex justify-center items-center w-auto h-[27px] md:h-[37px] lg:h-[47px]">
            <Image src={policyy} alt="real" />
          </div>
        </div>
      </div>
      <div className='mb-10 text-sm font-bold flex justify-center text-md'>
        <p className='text-[18px]'>Read our policy</p>
      </div>


      <div className="w-full">
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <div className="border-t border-t-gray-300"></div>
          <div className="bg-white px-0 py-4 rounded-md">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <input
                  type="checkbox"
                  id={`item${index}`}
                  className="hidden"
                  checked={accordionStates[index]}
                />
                <label
                  htmlFor={`item${index}`}
                  className="flex items-center justify-between cursor-pointer p-2 rounded-md gap-4 md:gap-8"
                  onClick={() => handleAccordionClick(index)}
                >
                  <span className="font-bold text-xl md:text-xl leading-8 md:leading-12 tracking-normal text-left">
                    {item.question}
                  </span>
                  {accordionStates[index] ? (
                    <Image src={Polygon1} alt="" width={50} height={50} className="w-2 h-1 md:w-3 md:h-2" />
                  ) : (
                    <Image src={Polygon} alt="" width={50} height={50} className="w-2 h-1 md:w-3 md:h-2" />
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


          <div className='mb-10'>
            <p className='pb-2 font-bold'>Overnight Parking Policy</p>
            <p>Clients who have packages that include overnight Recovery Assistant care are responsible for parking fees. At the conclusion of service, the client will be invoiced.</p>
          </div>
          <div className='mb-10 text-sm font-bold flex justify-center text-md'>
            <p>Email Us Your Question</p>
          </div>
          <div className='mb-10'>
            <p className='pb-2 font-bold'>What is your question?</p>
            <input type="text" name="" id="" className='border border-gray-300 p-1 outline-none w-full' />
          </div>
          <div className='mb-8'>
            <p className='pb-2 font-bold mb-4'>Tell us more about your question.</p>
            <textarea name="" id="" placeholder='Enter your the details of your question' className='border border-gray-300 w-full h-[300px] outline-none mb-5 p-2 px-2'></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
