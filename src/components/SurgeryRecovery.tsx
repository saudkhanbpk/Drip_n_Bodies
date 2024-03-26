import Image from "next/image";
import React from "react";
import surg1 from "../images/surg1.png";
import cr1 from "../images/cr1.png";
import recoverynurses from "../images/RecoveryNurses.png";
import Link from "next/link";

const SurgeryRecovery = () => {
  const perks = [
    {
      heading: "Post-Op Care & Assessment",
      paragraph:
        "Initial post-operative care and assessment provided by a Registered Nurse.",
    },
    {
      heading: "Surgery Day Transportation",
      paragraph:
        "Complimentary transportation from the surgery center on the day of surgery.",
    },
    {
      heading: "Drip N Bodied Beauty Kit",
      paragraph:
        "Drip N Bodied Beauty Kit: Robe, nonslip socks, sleep mask, essential oil, and post-op medical supplies.",
    },
    {
      heading: "Medication Management",
      paragraph: "We will help you manage your surgeon subscribed medication.",
    },
    {
      heading: "Complimentary Lunch",
      paragraph: "Complimentary lunch and dinner on the first day of surgery.",
    },
    {
      heading: "Overnight CNA Care",
      paragraph:
        "Twelve (12) hours of overnight care provided by a Certified Nursing Assistant (CNA) on the day of surgery.",
    },
    {
      heading: "On-Call RN During Services",
      paragraph:
        "Access to a registered nurse on call via telehealth, 24 hrs a day, during the duration of your service.",
    },
    {
      heading: "On-Call RN After Services",
      paragraph:
        "Access to twelve (12) hours of virtual/telehealth with a registered nurse after service completion.",
    },
  ];

  return (
    <>
      <div className="">
        <div className="w-full flex flex-col md:flex-row justify-between mx-auto"  style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)' }}>
          {/* <div className="w-auto lg:w-auto md:px-10 lg:pl-8 m-3 md:m-5 lg:m-14 xl:pt-20 md:ml-8 xl:ml-16 "> */}
          <div className="w-full md:w-[65%] px-10 pt-6 md:pt-16 ml-22">
            <div className="flex flex-col gap-2 md:leading-[100px]" >
              <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">
                Where{" "}
              </h1>
              <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">
                Beauty Meets{" "}
              </h1>
              <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat  ">
                {" "}
                Convenience!{" "}
              </h1>
            </div>
            <div className="my-8 md:my-5 lg:my-10 w-full lg:w-auto h-[43px] flex flex-col lg:flex-row">
              <a
                href="#section"
                className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2  hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat"
              >
                View Packages
              </a>
              <a
                href="#section2"
                className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat"
              >
                View Group Packages
              </a>
            </div>
          </div>
          <div className="  lg:w-[35%] flex ">
            <Image
              src={cr1}
              alt="Logo"
              className="w-full md:w-[80vw] lg:w-[656px] lg:mix-blend-multiply object-cover "
            />
          </div>
        </div>
        <div className="w-full  ">
          <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center items-center w-auto h-[27px]">
              <h1
                className="font-niconne text-3xl md:text-6xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] "
                style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }}
              >
                Miami Cosmetic Surgery Recovery
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center bg-pink-50">
          <div className="py-20">
           <div className="mb-20">
           <h3 className="text-center font-montserrat text-[20px] font-bold mb-3">
              The Bodied “3 Step” Process
            </h3>
            <p className="text-center font-montserrat text-base font-normal leading-6">
              Follow these easy steps to select your Bodied Package
            </p>
            </div> 
          
            <div className="md:flex md:justify-between items-center md:pl-10 pl-14 pr-28 mt-10  gap-20 ">
              <div className="text-center pt-5">
                <h1 
                  style={{ 
                    color: '#FFF',
                    textAlign: 'center',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#000',
                    fontFamily: 'Montserrat',
                    fontSize: '64px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '23px', 
                    
                  }}>1</h1>
                <h3 className="font-montserrat text-black font-bold text-base leading-6 mt-5 mb-3">
                  Choose a Package For Your Surgery Date
                </h3>
                <p className="font-montserrat text-black text-base font-normal leading-tight pl-12 text-start">
                  Select the cosmetic surgery or surgery surgery sister package that
                  best fits your needs. Book this package for your scheduled
                  surgery date and pay the $250 deposit.
                </p>
              </div>
              <div className="text-center pt-5">
                <h1 
                  style={{ 
                    color: '#FFF',
                    textAlign: 'center',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#000',
                    fontFamily: 'Montserrat',
                    fontSize: '64px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '23px' 
                  }}>2</h1>
                <h3 className="font-montserrat text-black font-bold text-base leading-6 mt-5">
                  Schedule Pre-Op Consult Call
                </h3>
                <p className="font-montserrat text-black text-base font-normal leading-tight">
                Schedule a pre-op consult call using the link in your confirmation email. Schedule this call once you&apos;ve completed your pre-op labs!
                </p>
              </div>
              <div className="text-center p-5">
                <h1 className=""
                  style={{ 
                    color: '#FFF',
                    textAlign: 'center',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#000',
                    fontFamily: 'Montserrat',
                    fontSize: '64px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '23px' 
                  }}
                >3</h1>
                <h3 className="font-montserrat text-black font-bold text-base leading-6 mt-5">
                  Confirm Travel Details
                </h3>
                <p className="font-montserrat text-black text-base font-normal leading-tight">
                  Confirm your travel details and we will take care of the rest!
                  We promise you a safe and speedy recovery after surgery
                </p>
              </div>
            </div>
            <div className="mt-20">
              <Link
                href="./resourcehub"
                className="text-center font-montserrat text-[#3BAFBF] text-base font-normal leading-7 underline"
              >
                Learn more about our booking process
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div id="section" className="my-6 w-[60%]  mx-auto p-4">
          <h2 className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
            Cosmetic Surgery Recovery Packages
          </h2>
          <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
            Drip N Bodied offers Post-Op Care & Assessment
            operative care services to YOU in the
            comfort of your home or hotel. We gladly serve as an advocate for
            our clients as they navigate through the healthcare system in
            preparation for surgery. We take pride in assisting our clients with
            a speedy and safe recovery after cosmetic surgery.
          </p>
        </div>
      </div>

      <div className=" w-full px-auto ">
        <div className=" items-center w-full flex xl:flex-row flex-col justify-center mx-auto gap-8 ">
          <div className="flex md:flex-row flex-col gap-6">
            <div className="abc border border-[#3BAFBF] hover:mt-[-12px] transition-all w-[300px] h-[730px]  flex flex-col items-center justify-start p-4">
              <div className="flex flex-col gap-30">
                <h3 className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  One Night Glam
                </h3>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-cyan-600 my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $800
                </p>
                <p className="mx-auto mt-10  h-[34px] w-[135px] text-black text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 4 payments of $100 by{" "}
                  <span className="font-bold">Afterpay</span>
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="buton w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2 bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Hands-on care, medication management, assessment and education
                  by RN on day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Twelve (12) hours of overnight care provided by a CNA
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  (1) IV Drip Therapy
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <a className="link text-[#3BAFBF]   text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </a>
              </div>
            </div>
            <div className=" text-white bg-[#3BAFBF] hover:mt-[-12px] transition-all w-[300px] h-[730px]  flex flex-col items-center justify-start p-4">
              <div className="flex flex-col gap-30">
                <h3 className=" text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  Snatched!
                </h3>
                <p className="text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className=" text-[#f4b5d9] my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $1,400
                </p>
                <p className="mx-auto mt-10  h-[34px] w-[135px] text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 4 payments of $100 by{" "}
                  <span className="font-bold text-white">Afterpay</span>
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="buton bg-[#f4b5d9] buton w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2  text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className=" text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Hands-on care, medication management, assessment and education
                  by RN on day of surgery
                </p>
                <p className=" text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className=" text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  2 - 4 hours of private care the day after surgery
                </p>
                <p className=" text-center font-montserrat text-base font-normal leading-[17px]">
                  RN on call the day after surgery
                </p>
                <p className="text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <a className="link text-white text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-6">
            <div className="abc border border-[#3BAFBF] hover:mt-[-12px] transition-all w-[300px] h-[730px]  flex flex-col items-center justify-start p-4"
          
              >
              <div className="flex flex-col gap-30">
                <h3 className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  The Bougie Babe
                </h3>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-cyan-600 my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $1,900
                </p>

                <p className="mx-auto mt-10  h-[34px] w-[135px] text-black text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 4 payments of $100 by{" "}
                  <span className="font-bold">Afterpay</span>
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="buton w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2   hover:bg-blue-300  bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Includes everything from the Snatched! package
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Twelve (12) hours of overnight care provided by a CNA
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  (1) IV Drip Therapy
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <a className="link text-[#3BAFBF] text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </a>
              </div>
            </div>

            <div className="abc border border-[#3BAFBF] hover:mt-[-12px] transition-all w-[300px] h-[730px] flex flex-col items-center justify-start p-4">
              <div className="flex flex-col gap-30">
                <h3 className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                  Very Bougie!
                </h3>
                <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
                  Perfrect for people
                </p>
                <p className="text-cyan-600 my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                  $2,700
                </p>
                <p className="mx-auto mt-10  h-[34px] w-[135px] text-black text-center font-montserrat text-xs font-normal leading-[17px]">
                  Or 4 payments of $100 by{" "}
                  <span className="font-bold">Afterpay</span>
                </p>
              </div>
              <div className="my-6 w-auto h-[43px] flex ">
                <button className="buton w-[146px]  text-white text-sm font-bold leading-6 uppercase px-4 py-2   hover:bg-blue-300  bg-[#3BAFBF] text-center font-montserrat  ">
                  Book
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px] h-[68px]">
                  Hands-on care, medication management, assessment and education
                  by RN on day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                  Up to 8 hours of CNA care during the day on the day of surgery
                </p>
                <p className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                  Twelve (12) hours of overnight care provided by a CNA
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  (1) IV Drip Therapy
                </p>
                <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                  Complimentary transportation after surgery
                </p>
                <a className="link text-[#3BAFBF] text-center font-montserrat text-sm font-normal leading-[17px] underline">
                  View all services included
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <h3 className="text-center pb-3 font-montserrat text-black text-base font-bold leading-normal">
          Our “Bodied Perks”
        </h3>
        <p className="text-center font-montserrat text-black text-base font-normal leading-6">
          We will help you manage your surgeon subscribed medication.
        </p>
        <div className="grid md:grid-cols-4 gap-6 px-20 py-10">
          {perks.map((perk, index) => (
            <div key={index} className="border border-[#3BAFBF]  px-2">
              <h4 className="text-center font-montserrat text-black text-[16px]  font-bold leading-7 mt-2">
                {perk.heading}
              </h4>
              <p className="text-center font-montserrat text-black text-base font-normal leading-7 px-2">
                {perk.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full">
        <div className="items-center w-[60%] flex justify-center mx-auto">
          <div className="my-10 w-auto h-[43px] flex md:flex-row flex-col">
            <a
              href="#section2"
              className=" text-black text-sm font-bold leading-6 uppercase px-4 py-2  hover:bg-pink-300  bg-[#F4B5D9] text-center font-montserrat  "
            >
              View Group Packages
            </a>
            <a
              href="#section3"
              className="mx-6   text-sm font-bold leading-6  underline   px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat  "
            >
              View Addons
            </a>
          </div>
        </div>
      </div>

      <div className="w-full space-y-9 relative"
          style={{
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)",
          }}>
            <div className="absolute bottom-0  left-0 w-full h-[30px]" ></div>

        <div id="section2" className=" w-[70%] mx-auto p-4 space-y-6 ">
          <p className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
            Surgery Sisters
          </p>
          <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
            The Snatched! or Bougie Babe package is available at a discounted
            rate when booked with a friend (or two). Friends that get bodied
            together stay together!
          </p>
        </div>
     

      <div className=" w-full px-auto"
      >
        <div className=" items-center w-full flex md:flex-row flex-col justify-center mx-auto gap-8">
          <div className="border border-[#3BAFBF] hover:mt-[-12px] bg-white w-[300px] h-[505px] flex flex-col items-center justify-center p-4">
            <div className="flex flex-col gap-30">
              <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                Snatched!
              </p>
              <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
               Group Package
              </p>
              <p className="text-cyan-600 my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                $2,200
              </p>
            </div>
            <div className="my-6 w-auto h-[43px] flex ">
              <button className="buton text-white text-sm font-bold leading-6 uppercase px-4 py-2 hover:bg-blue-300 bg-[#3BAFBF] text-center font-montserrat">
                Book For Group
              </button>
            </div>
            <div className="flex flex-col mt-4 gap-[17px]">
              <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                Includes everything from Snatched! package.
              </p>
              <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                Total discount of $600!
              </p>
              <h2 className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
                Snatched! recovery care for 2
              </h2>
              <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                Add a 3rd for $600 (total discount of $1,100)
              </p>
            </div>
          </div>
          <div className="border border-[#3BAFBF]  bg-white hover:mt-[-12px]  w-[300px] h-[505px] flex flex-col items-center justify-center p-4">
            <div className="flex flex-col gap-30">
              <p className="text-black text-center font-montserrat font-bold text-[24px] leading-[27px]">
                The Bougie Babe
              </p>
              <p className="text-black text-center font-montserrat my-4 font-normal text-[16px] leading-[27px]">
               Group package
              </p>
              <p className="text-cyan-600 my-6 text-center font-niconne text-8xl font-normal leading-[27px]">
                $3,200
              </p>
            </div>
            <div className="my-6 w-auto h-[43px] flex ">
              <button className="buton text-white text-sm font-bold leading-6 uppercase px-4 py-2   hover:bg-blue-300  bg-[#3BAFBF] text-center font-montserrat  ">
                Book For Group
              </button>
            </div>
            <div className="flex flex-col mt-4 gap-[17px]">
              <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                Includes everything from Snatched! package.
              </p>
              <p className="text-black text-center font-montserrat text-base font-normal leading-[17px] w-[270px]">
                Total discount of $600!
              </p>
              <h2 className="text-black text-center font-montserrat text-base font-bold leading-[17px] w-[270px]">
              The Bougie Babe recovery care for 2
              </h2>
              <p className="text-black text-center font-montserrat text-base font-normal leading-[17px]">
                Add a 3rd for $1,100 (total discount of $1,401)
              </p>
            </div>
          </div>
        </div>

        <div className="my-6 w-[70%]  mx-auto p-4">
          <h3 className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
            Fine Print
          </h3>
          <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
            Surgery sisters must be staying at the same residence (house or
            hotel) and receiving surgery on the SAME DAY and same surgery center
            (or a max of 15 mins away).
          </p>
        </div>
      <div className=" w-full">
        <div className="my-6 items-center w-[60%] flex  justify-center mx-auto">
          <div className="my-10 w-auto h-[43px] flex md:flex-row flex-col ">
            <a
              href="#section"
              className=" text-black text-sm font-bold leading-6 uppercase px-4 py-2   hover:bg-pink-300  bg-[#F4B5D9] text-center font-montserrat  "
            >
              View Solo Packages
            </a>
            <a
              href="#section3"
              className="mx-6  text-sm font-bold leading-6  underline   px-4 py-2  text-[#3BAFBF] text-center font-montserrat  "
            >
              View Addons
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>

      <div className=" w-full">
        <div
          id="section3"
          className="my-6 items-center w-[60%] flex flex-col justify-center mx-auto"
        >
          <h2 className=" py-2  leading-normal text text-black text-center font-montserrat font-bold text-[18px]  md:text-[24px]">
            Surgery Recovery Addons
          </h2>
          <p className="w-full flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
            Can add these to a recovery package
          </p>
        </div>
      </div>

      <div className=" w-full my-8">
        <div className="border border-[#3BAFBF] w-[90%] h-auto items-center justify-center flex flex-col md:flex-row  mx-auto">
          <div className="w-full md:w-1/2  ">
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div className="">
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Recovery Day (12 hrs)
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Additional day of overnight CNA care, for 12 hours
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $300
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Iron Infusion
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Boost your iron level with an iron infusion
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $379
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Pre-Op Infusion
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Get an IV drip before your surgery
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $299
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Shower & Faja Assistance
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Get shower and faja assistance from a CNA
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $200
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 py-[4px]">
              <div>
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Seroma Aspirations
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Seroma pain relief and fluid leak prevention
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $199
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="flex  justify-between items-center my-5 mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Transportation
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Add post-op, pre-op, or follow up transportation
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $140
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5  mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Suture Removal
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  CNA assistance for removing sutures
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $229
                </p>
              </div>
            </div>
            <div className="flex  justify-between items-center my-5  mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div>
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Drain Removal
                </h3>
                <p className="w-full flex justify-center text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Assistance draining excess fluids from incisions
                </p>
              </div>
              <div>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  $189
                </p>
              </div>
            </div>
            <div className="   my-5  mx-2 md:mx-10 border-b-[1px] py-[4px] ">
              <div className="flex justify-between">
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Lymphatic Massages
                </h3>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  starts at $130
                </p>
              </div>
              <div>
                <p className="w-full flex justify-start text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Add packages of 1, 3, 5, and 10 lymphatic massages
                </p>
              </div>
            </div>
            <div className="my-5 mx-2 md:mx-10  py-[4px] ">
              <div className="flex justify-between">
                <h3 className=" py-2 text-black font-Montserrat text-[16px] md:text-[24px] font-bold  leading-[27px] ">
                  Surgery Sisters
                </h3>
                <p className="text-[#3BAFBF] text-right font-niconne text-[32px] md:text-[48px] flex justify-center items-center font-normal leading-[27px]">
                  see above
                </p>
              </div>
              <div>
                <p className="w-full flex justify-start text-start font-montserrat text-base  text-black font-Montserrat text-16 italic font-normal leading-[27px] ">
                  Recover with a group of 2 or more friends at a discounted rate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="my-6 items-center w-[60%] flex  justify-center mx-auto">
            <div className="my-10 w-auto h-[43px] flex md:flex-row flex-col ">
              <a
                href="#section"
                className=" text-black text-sm font-bold leading-6 uppercase px-4 py-2   hover:bg-pink-300  bg-[#F4B5D9] text-center font-montserrat  "
              >
                View Packages
              </a>
              <a
                href="#section2"
                className="mx-6  text-sm font-bold leading-6   uppercase   px-4 py-2  text-[#3BAFBF] text-center font-montserrat  "
              >
                View Group Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurgeryRecovery;
