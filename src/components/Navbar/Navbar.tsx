"use client"
import React, { useState } from 'react';
import tempImagefaFymn from '../../images/tempImagefaFymn.png'
import Image from 'next/image';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className='flex items-center w-full'>

      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Image src={tempImagefaFymn} alt="Logo" className="h-12 w-16" />
      </div>

      <div className={`w-full  items-center md:flex hidden `}>
        <div className="text-sm flex-grow flex justify-end">
          <Link href="about" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">

            About Us
          </Link>
          <Link href="surgery" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
            Surgery Recovery

          </Link>
          <Link href="ivinfusion" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
           
              IV Infusions
            
          </Link>
          <Link href="#about" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
              Massages & Treatments
          
          </Link>
          <Link href="faq" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
              Calendar
           
          </Link>
        </div>

        <Link href="/customerrecovery" passHref>
          <button
            className="uppercase md:px-6 px-14 py-2 leading-none border rounded text-white hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat text-xs font-bold"
          >
            Book Free Consult
          </button>
        </Link>
      </div>
      </div>



      <div className={`w-full block md:hidden items-center ${menuOpen ? "block" : "hidden"} `}>
        <div className="text-sm flex-grow block justify-end">
          <Link href="about" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">

            About Us
          </Link>
          <Link href="surgery" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
            Surgery Recovery

          </Link>
          <Link href="ivinfusion" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
           
              IV Infusions
            
          </Link>
          <Link href="massage" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
              Massages & Treatments
          
          </Link>
          <Link href="calendar" className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs">
              Calendar
           
          </Link>
        </div>

        <Link href="/customerrecovery" passHref>
          <button
            className="uppercase md:px-6 block mx-auto px-14 py-2 leading-none border rounded text-white hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat text-xs font-bold"
          >
            Book Free Consult
          </button>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {menuOpen ? (
            <div className='absolute top-10 right-4'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
          ) : (
            <div className='absolute top-10 right-4 text-2xl'>
              <CiMenuBurger />
            </div>
          )}
        </button>
      </div>
      
    
    </nav>
  );
};

export default Navbar;
