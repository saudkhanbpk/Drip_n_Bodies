import React from 'react'
import tempImagefaFymn from '../../images/tempImagefaFymn.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC  = () => {
  return (
    
    <nav className="flex items-center justify-between flex-wrap bg-white ">
    <div className="flex items-center flex-shrink-0 text-black mr-6">
      <Image src={tempImagefaFymn} alt="Logo" className="h-12 w-16" />
      
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end mx-4">
      <div className="text-sm lg:flex-grow flex justify-end">
        <Link
          href="about"
          className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs "
        >
          About Us
        </Link>
        <Link
          href="surgery"
          className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs "
        >
          Surgery Recovery
        </Link>
        <Link
          href="ivinfusion"
          className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs "
        >
          IV Infusions
        </Link>
        <Link
          href="#about"
          className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs "
        >
          Massages & Treatments
        </Link>
        <Link
          href="calendar"
          className="block uppercase mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-gray-500 text-black mr-4 text-center font-montserrat text-xs"
        >
          Calendar
        </Link>
      </div>
      <div>
        <button
        
          className="uppercase px-4 py-2 leading-none border rounded text-black  hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat text-xs font-bold "
        >
          Book Free Consult
        </button>
      </div>
    </div>
  </nav>
);
};
export default Navbar