import React from 'react';
import tempImageYIgr from '../../images/tempImageYIgr.svg';
import Image from 'next/image';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  const sections = [
    {
      title: 'Concierge Services',
      links: ['Cosmetic Surgery Recovery', 'Mobile IV Infusions', 'Mobile Lymphatic Massages'],
    },
    {
      title: 'IV Hydration & Post-Op Bar',
      links: ['Post Surgical Treatments', 'IV Infusions', 'Lymphatic Massages'],
    },
    {
      title: 'Drip N Bodied',
      links: ['About Us', 'Concierge Service', 'IV Hydration Bar', 'Free Consult Call'],
    },
    {
      title: 'Resources',
      links: ['Contact Us', 'Our Calendar', 'FAQs', 'Policies'],
    },
    {
      title: 'Social Media',
      links: ['Facebook', 'Instagram', 'TikTok', 'YouTube'],
    },
  ];

  return (
    <>
      <div className='w-full md:w-4/5 mx-auto relative  md:-top-10'>
        <div className='flex bg-[#F4B5D9] p-4 justify-center md:justify-between gap-4 items-center flex-col md:flex-row'>
          <h1 className='text-xl font-bold text-center md:text-left md:self-center mb-4 md:mb-0'>Subscribe for special offers</h1>
          <input
            type='text'
            placeholder='Enter your email'
            className='outline-none border border-black pl-2 p-2 w-full md:w-[500px] text-center md:text-left'
          />
          <button className='bg-[#3BAFBF] text-white p-2'>SUBSCRIBE</button>
        </div>

        <div className='pt-10  md:flex  md:gap-20'>
          <div className='md:w-1/3 mb-4 md:mb-0'>
            <Image src={tempImageYIgr} width={100} height={80} className='w-full h-[340px]' alt='' />
          </div>

          <div className='md:w-2/3 '>
            <div className='border-b border-b-slate-300 flex flex-col md:flex-row  justify-around pb-4 '>
              <div className='flex flex-col items-center'>
                <div className='font-bold text-center'>Monday - Saturday</div>
                <p className='text-center'>8:00 AM - 7:00 PM</p>
                <div className='flex pt-3 '>
                  <div className='flex flex-col items-center'>
                    <p > <IoIosMail className='text-gray-400 text-opacity-65 w-[72px] h-[38px]' />
</p>
                    <p className=''>booking@dripnbodied.com</p>
                  </div>
                </div>
              </div>
              <div className=' border-l border-l-slate-300  h-14' ></div>
              <div className='flex flex-col  items-center '>
                <div className='font-bold text-center'>After Hours:</div>
                <p className='text-center'>By request only</p>
                <div className='flex pt-3 '>
                  <div className='flex flex-col items-center'>
                    <p className='text-center text-3xl text-red-600 text-[32px] mx-auto '>☎</p>
                    <p className=' text-[16px] '>(305) 908-9282</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex text-center flex-col pt-2 border-b border-b-slate-300 pb-4'>
              <span>IV Hydration and Post Surgical Bar</span>
              <div className='pt-2'>
                <p className='font-bold'>1001 Ponce de Leon, Suite A</p>
                <p className='font-bold'>Coral Gables, Florida</p>
              </div>
            </div>
            <div className='text-center pt-2'>
              <p>Concierge and Mobile Services</p>
              <p className='font-bold pt-2'>30-minute radius of Miami International Airport</p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap md:px-0 px-2   md:flex-row justify-between gap-8 pt-8'>
          {sections.map((section, index) => (
            <div key={index} className='p-2'>
              <p className={index === 2 ? 'font-light ' : ''}>{section.title}</p>
              {section.links.map((link, linkIndex) => (
                <p key={linkIndex} className={linkIndex === 0 && index === 2 ? 'text-[#3BAFBF] ' : 'text-[#3BAFBF]'}>
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex items-center justify-center bg-black mt-10'>
        <span className='p-2 text-white text-sm'>Copyright 2024 | All Rights Reserved | Drip N Bodied</span>
      </div>
    </>
  );
};

export default Footer;