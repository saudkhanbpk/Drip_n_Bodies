'use client'

import React, { useState, useRef } from "react";
import tempImageYIgr from "../../images/tempImageYIgr.svg";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const Footer = () => {
  const form = useRef<HTMLFormElement | null>(null); // Explicitly specify the type of the ref
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [verified, setVerified] = useState(false);
  function onChange() {
    setVerified(true);
  }
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }


    emailjs.sendForm('service_2amws0d', 'template_xhk8ddz', form.current, 'V3m6c5qimGtsOA6yF')
      .then((result: any) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });

    setEmail("")

    // try {
    //   const response = await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   if (response.ok) {
    //     console.log('Email sent successfully');
    //     // Handle success
    //   } else {
    //     console.error('Failed to send email');
    //     // Handle failure
    //   }
    // } catch (error) {
    //   console.error('Failed to send email', error);
    //   // Handle failure
    // }
  };

  const handleEmailChange = (e: any) => {
    setError('');
    setEmail(e.target.value);
  };


  const sections = [
    {
      title: "Concierge Services",
      links: [
        { name: "Concierge Services", href: "/customerrecovery" },
        { name: "Cosmetic Surgery Recovery", href: "/surgery" },
        { name: "Mobile IV Infusions", href: "ivinfusion#section2" },
        { name: "Mobile Lymphatic Massages", href: "/massage" },
      ],
    },
    {
      title: "IV Hydration & Post-Op Bar",
      links: [
        { name: "IV Hydration Bar", href: "/barstore" },
        { name: "Post Surgical Treatments", href: "/massage#post-cosmetic-surgery-treatment" },
        { name: "IV Infusions", href: "/ivinfusion" },
        { name: "Lymphatic Massages", href: "/massage" },
      ],
    },
    {
      title: "Drip N Bodied",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact US", href: "/about#Talk-to-your-nurse-babe" },
        { name: "Free Consult Call", href: "https://app.acuityscheduling.com/schedule.php?owner=21324387&appointmentType=category:CONSULTATION" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resource Hub", href: "/resourcehub" },
        { name: "Our Calendar", href: "/calendar" },
        { name: "FAQs", href: "/faq" },
        { name: "Policies", href: "/policy" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { name: "Facebook", href: "https://www.facebook.com/Dripnbodied/" },
        { name: "Instagram", href: "https://www.instagram.com/dripnbodied_recoverynurse/" },
        { name: "TikTok", href: "https://www.tiktok.com/@dripnbodiedrecoverynurse" },
        { name: "YouTube", href: "https://www.youtube.com/@dripnbodied_recoverynurse" },
      ],
    },
  ];


  return (
    <>
      <div className="w-[80%] lg:w-4/2 mx-auto relative lg:-top-10 ">

        <div className="flex bg-[#F4B5D9] px-8 py-6 justify-center gap-8 items-center flex-col lg:flex-row">
          <p className=" mb-4 lg:mb-0  text-black font-montserrat text-lg lg:text-xl font-bold leading-[27px]">
            Subscribe for special offers
          </p>
          <form ref={form}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
              placeholder="Enter your email"
              className="outline-none border border-black pl-2 p-2 w-full lg:w-[500px] text-center lg:text-left"
            />

          </form>


          <button disabled={!verified} className={`  text-white p-2 px-6 ${verified === false ? "bg-slate-600" : "bg-[#3BAFBF]"}`}
            onClick={handleSubmit}   >
            SUBSCRIBE
          </button>
          {error && <p className="text-red-500">{error}</p>}

        </div>
        <div className="flex justify-center">

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </div>
        <div className="pt-10  lg:flex  lg:gap-20 ">
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <Image
              src={tempImageYIgr}
              width={100}
              height={80}
              className="w-full h-[340px]"
              alt=""
            />
          </div>

          <div className="lg:w-2/3 ">
            <div className="border-b border-b-slate-300 flex flex-col lg:flex-row  justify-around pb-4">
              <div className="flex flex-col items-center">
                <div className="font-bold text-center">Monday - Saturday</div>
                <p className="text-center">8:00 AM - 7:00 PM</p>
                <div className="flex pt-3 ">
                  <div className="flex flex-col items-center">
                    <p>
                      {" "}
                      <IoIosMail className="text-gray-400 text-opacity-65 w-[72px] h-[38px]" />
                    </p>
                    <a href="mailto:booking@dripnbodied.com" className="">booking@dripnbodied.com</a>
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
                    <a href="tel:+13059089282" className=" text-[16px] ">(305) 908-9282</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-center flex-col pt-2 border-b border-b-slate-300 pb-4">
              <span>IV Hydration and Post Surgical Bar</span>
              <div className="pt-2">
                <p className="font-bold">1001 Ponce de Leon, Suite A</p>
                <p className="font-bold">Coral Gables, Florida</p>
              </div>
            </div>
            <div className="text-center pt-2">
              <p>Concierge and Mobile Services</p>
              <p className="font-bold pt-2">
                30-minute radius of Miami International Airport
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:flex flex-wrap lg:px-0 px-2   lg:flex-row  lg:justify-between gap-8 pt-8">
          {sections.map((section, index) => (
            <div key={index} className="p-2">
              <p className={index === 2 ? "font-light " : ""}>
                {section.title}
              </p>
              {section.links.map((link, linkIndex) => (
                <p
                  key={linkIndex}
                  className={
                    linkIndex === 0 && index === 2
                      ? "text-[#3BAFBF] "
                      : "text-[#3BAFBF]"
                  }
                >
                  <Link
                    href={link.href}


                  >
                    {link.name}
                  </Link>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-black mt-10">
        <p className="p-2 text-white text-[16px]">
          Copyright 2024 | All Rights Reserved | Drip N Bodied
        </p>
      </div>
    </>
  );
};

export default Footer;
