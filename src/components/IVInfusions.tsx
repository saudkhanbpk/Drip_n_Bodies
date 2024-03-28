"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "../images/fintness.png";
import img2 from "../images/infushero.png";
import heroimg1 from "../images/heroimg1.png";
import quote1 from "../images/quote1.svg";
import quote2 from "../images/quote2.svg";
import realmiami from "../images/realmiami.png";
import thereal from "../images/TheReal.png";
import cr1 from "../images/cr1.png";
import realnurses from "../images/realnurses.svg";
import Link from "next/link";

export default function IVInfusions() {
  const [showFullDescription, setShowFullDescription] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (index: number) => {
    setShowFullDescription({
      ...showFullDescription,
      [index]: !showFullDescription[index],
    });
  };

  const dripsData = [
    {
      // image: "img1", // Replace with actual image URL
      title: "Athletic Recovery",
      price: "$229",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      // image: "img1", // Replace with actual image URL
      title: "Baddie Drip",
      price: "$189",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      // image: "img1", // Replace with actual image URL
      title: "Miami Vice",
      price: "$199",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      // image: "img1", // Replace with actual image URL
      title: "Sober Me",
      price: "$229",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      // image: "img1", // Replace with actual image URL
      title: "High Dose Vitamin C",
      price: "$189",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      // image: "img1", // Replace with actual image URL
      title: "Immuno-boost",
      price: "$249",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      // image: "img1", // Replace with actual image URL
      title: "Snatched & Skinny",
      price: "$199",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
  ];

  const anotherdripsData = [
    {
      image: "img1", // Replace with actual image URL
      title: "Pre-Op Drip",
      price: "$149",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      image: "img1", // Replace with actual image URL
      title: "Athletic Recovery",
      price: "$209",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      image: "img1", // Replace with actual image URL
      title: "Iron Infusion",
      price: "$299",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
    {
      image: "img1", // Replace with actual image URL
      title: "Hydration Me",
      price: "$129",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su",
    },
  ];

  return (
    <>
      <div className="">
        <div className="w-full flex flex-col md:flex-row justify-between ">
          {/* <div className=" lg:w-auto md:px-5 lg:pl-8 m-3 md:m-5 lg:m-10 xl:pt-20 md:ml-8 xl:ml-12 "> */}
          <div className="w-full md:w-[65%] px-10  pt-6 md:pt-16 ml-22">
            <div className="flex flex-col lg:leading-[100px]">
              <p className="text-5xl lg:text-7xl xl:text-8xl font-bold font-montserrat">
                Come
              </p>

              <p className="text-5xl md::text-7xl xl:text-8xl font-bold font-montserrat ">
                Experience{" "}
              </p>
              <p className="text-5xl md:text-7xl xl:text-8xl font-bold flex flex-row font-montserrat ">
                {" "}
                The <span className="text-pink-300 ml-4">Drip Effect</span>{" "}
              </p>
            </div>
            <div className="my-6 md:my-5 lg:my-10 w-[95%] lg:w-auto h-[43px] flex flex-col lg:flex-row">
              <Link
                href="#section"
                className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2  hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat"
              >
                VIEW POST-OP DRIPS
              </Link>
              {/* <a href="#section2" className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat">
                View Post-Op Treatments
              </a> */}
              <Link
                href="#section2"
                className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat"
              >
                View Premium Infusions
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[35%] flex relative md:overflow-clip ">
            <Image
              src={img2}
              alt="Logo"
              className="w-full md:w-[80vw] md:absolute md:-top-12 h-full -left-10 md:h-[590px] lg:w-[656px]  lg:mix-blend-multiply object-cover "
            />
          </div>
        </div>
        <div className="w-full ">
          <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center items-center w-auto h-[27px]">
              <h1
                className="font-niconne text-3xl md:text-6xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] "
                style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }}
              >
                Miami IV Therapy and Post-Op Infusions
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="my-6 w-[60%]  mx-auto p-4">
          <h2 className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
            The Drip “3 Step” Process
          </h2>
          <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
            Drip N Bodied offers IV hydration therapy directly to YOU in the
            comfort of your home, hotel, or office. We offer personalized IV
            infusions and boosters that maximize your health and wellness by
            rehydrating, building immunity, and curing hang-overs. All
            treatments are administered by a RN.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col  justify-center text-center gap-4 md:space-x-20 p-4 md:p-20">
        <div className="w-full md:w-[330px] flex flex-col items-center justify-center space-y-2 ">
          <p
            className="py-5"
            style={{
              color: "#FFF",
              textAlign: "center",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#000",
              fontFamily: "Montserrat",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "23px",
            }}
          >
            1
          </p>
          <p className="text-base font-bold">Choose a Formula</p>
          <p className="text-base font-normal text-center">
            Are you feeling under the weather, hungover, or dehydrated? Choose
            one of our specialty cocktails tailored to your body&apos;s needs!
          </p>
        </div>
        <div className="w-full md:w-[330px] flex flex-col items-center justify-center space-y-2 ">
          <p
            className="py-5"
            style={{
              color: "#FFF",
              textAlign: "center",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#000",
              fontFamily: "Montserrat",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "23px",
            }}
          >
            2
          </p>
          <p className="text-base font-bold">Schedule Your Appointment</p>
          <p className="text-base font-normal text-center">
            Select a time and date that is convenient for you. We&apos;ll send
            our drip expert wherever you are!
          </p>
        </div>
        <div className="w-full md:w-[330px] flex flex-col items-center justify-center space-y-2 ">
          <p
            className="py-5"
            style={{
              color: "#FFF",
              textAlign: "center",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#000",
              fontFamily: "Montserrat",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "23px",
            }}
          >
            3
          </p>
          <p className="text-base font-bold">Enjoy your drip!</p>
          <p className="text-base font-normal text-center">
            Each drip infusion takes about 45 - 60 minutes. Start feeling better
            in no time in the convenience of your home or office!
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="resourcehub"
          className=" text-[#3BAFBF] font-sans text-base font-normal underline"
        >
          Learn more about our booking process
        </Link>
      </div>
      <div id="section" className="w-full p-10">
        <div className="text center space-y-2">
          <h2 className="text-2xl font-bold text-center">Premium Infusions</h2>
          <p className="text-base font-normal text-center">
            Each cocktail has essential fluids, electrolytes, vitamins and
            antioxidants, to quickly remedy a variety of conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 p-4 my-10 gap-4 w-full mx-auto">
        {dripsData.map((drip, index) => (
          <div key={index} className="border text-center border-[#3BAFBF] p-2 px-2 space-y-3 my-10">
            <img src={img1.src} alt="" className="w-[95%] mx-auto h-[142px] relative bottom-10 image-with-shadow" />
            <h3 className="text-2xl font-bold">{drip.title}</h3>
            <p className="text-5xl font-normal text-[#3BAFBF] font-niconne">{drip.price}</p>
            <button className="bg-[#3BAFBF] py-1 px-2 text-white">SCHEDULE DRIP</button>
            <p>
              {showFullDescription[index]
                ? drip.description
                : `${drip.description.split(' ').slice(0, 10).join(' ')}...`}
            </p>
            <a
              className="underline text-[#3BAFBF] cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              {showFullDescription[index] ? 'Show less' : 'Click here to read more'}
            </a>
          </div>
        ))}
      </div>

        <div className="flex items-center justify-center space-x-8">
          <a href="/surgery#section" className="bg-[#F4B5D9] px-2 py-1 text-base font-bold">
            VIEW POST-OP DRIPS
          </a>
          <a
            href="#section3"
            className="underline text-[#3BAFBF] text-base font-bold"
          >
            View Infusion Addons
          </a>
        </div>
      </div>

      <div className="pt-10">
        <div
          id="section2"
          className=" w-full py-6 px-10 space-y-20 "
          style={{
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)",
          }}
        >
          <div className="text-center space-y-2 ">
            <h2 className="text-2xl font-bold">
              Cosmetic Surgery Recovery Infusions
            </h2>
            <p className="text-base font-normal text-center">
              Each cocktail has essential fluids, electrolytes, vitamins and
              antioxidants, to quickly remedy a variety of conditions.
            </p>
          </div>

          <div className=" ">
            <div className="grid md:grid-cols-4 gap-10 px-4">
              {anotherdripsData.map((drip, index) => (
                <div
                  key={index}
                  className="flex flex-col border bg-white border-[#3BAFBF] items-center justify-center gap-4 p-4"
                >
                  <Image
                    src={img1}
                    alt="fitness"
                    className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
                  />
                  <h3 className="text-2xl font-bold">{drip.title}</h3>
                  <p className="text-5xl font-normal font-niconne text-[#3BAFBF]">
                    {drip.price}
                  </p>
                  <button className="bg-[#3BAFBF] py-1 px-2 text-white">
                    SCHEDULE DRIP
                  </button>
                  <p> {showFullDescription[index]
                    ? drip.description
                    : `${drip.description.split(" ").slice(0, 10).join(" ")}...`}
                  </p>
                  <a
                className="underline text-[#3BAFBF] cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                {" "}
                {showFullDescription[index]
                  ? "Show less"
                  : "Click here to read more"}
              </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center  space-x-8">
            {/* <a href="#section" className="bg-[#F4B5D9] px-2 py-1 text-base font-bold">
                VIEW POST-OP DRIPS
              </a> */}
            <a
              href="#section"
              className="bg-[#F4B5D9] px-2 py-1 text-base font-bold"
            >
              VIEW PREMIUM INFUSIONS
            </a>
            <a href="#section7" className="underline text-[#3BAFBF] text-base font-bold">
              View Post-op Recovery Addons
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center p-4 md:p-20 space-y-10"
       
      >
        <div className="flex flex-col  items-center justify-center md:space-y-2 ">
          <p id='section7' className="text-2xl font-bold">
            Infusion Addons
          </p>
          <p className="text-base font-normal">
            Can add these to a Premium Infusion or Post-Op Recovery Infusion
          </p>
        </div>

        <div className="w-full p-2 md:p-12 flex md:flex-row flex-col items-center border border-[#3BAFBF] justify-center gap-5 lg:gap-24  ">
          <div className="flex flex-col w-full p-2">
            <div className="flex justify-between  border-b p-2 ">
              <div className="flex flex-col  ">
                <h3 className="text-2xl font-bold">Biotin</h3>
                <p className="text-base font-normal italic">
                  Help with this...
                </p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $35
                </p>
              </div>
            </div>
            <div className=" flex justify-between   border-b p-2 ">
              <div className="flex flex-col  ">
                <h3 className="text-2xl font-bold">Pepcid</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $45
                </p>
              </div>
            </div>
            <div className=" flex justify-between   border-b p-2 ">
              <div className="flex flex-col  ">
                <h3 className="text-2xl font-bold">Toradol</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $45
                </p>
              </div>
            </div>
            <div className=" flex justify-between   border-b p-2 ">
              <div className="flex flex-col  ">
                <h3 className="text-2xl font-bold">Zofran</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $50
                </p>
              </div>
            </div>
            <div className=" flex justify-between  p-2 ">
              <div className="flex flex-col w-[25vw]">
                <h3 className="text-2xl font-bold">Extra Vitamin C</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $45
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[90%]">
            <div className=" flex justify-between  border-b p-2 ">
              <div className="flex flex-col w-[25vw] ">
                <h3 className="text-2xl font-bold">Glutathione</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $45
                </p>
              </div>
            </div>
            <div className=" flex justify-between   border-b p-2 ">
              <div className="flex flex-col w-[25vw] ">
                <h3 className="text-2xl font-bold">Extra B12</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $30
                </p>
              </div>
            </div>
            <div className=" flex justify-between   border-b p-2 ">
              <div className="flex flex-col w-[25vw] ">
                <h3 className="text-2xl font-bold">Extra Fluid</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  $50
                </p>
              </div>
            </div>
            <div className=" flex justify-between   border-b p-2 ">
              <div className="flex flex-col w-[25vw] ">
                <h3 className="text-2xl font-bold">Semaglutide</h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  Inquire
                </p>
              </div>
            </div>
            <div className=" flex justify-between   p-2 ">
              <div className="flex flex-col w-[25vw] ">
                <h3 className="text-2xl font-bold">NAD+ </h3>
                <p className="italic">Help with this...</p>
              </div>

              <div>
                <p className="text-4xl font-normal text-[#3BAFBF] font-niconne  flex justify-center items-center">
                  Inquire
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-row flex-col gap-2 md:gap-8">
          <Link
            href="/ivinfusion#section"
            className="bg-[#F4B5D9] px-2 py-1 text-base font-bold"
          >
            VIEW POST-OP DRIPS
          </Link>
          <a
            
            className="underline text-[#3BAFBF] text-base font-bold"
          >
            View Premium Infusions
          </a>
        </div>
      </div>
    </>
  );
}
