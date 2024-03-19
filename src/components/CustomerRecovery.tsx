"use client";
import Image from "next/image";
import React from "react";
import cr1 from "../images/cr1.png";
import recoverynurses from "../images/RecoveryNurses.png";
import serv1 from "../images/serv1.png";
import serv2 from "../images/serv2.png";
import recoveryNurse from "../images/tempImagemngQyL.webp";
import serv3 from "../images/serv3.png";
import serv4 from "../images/serv4.png";
import bbl from "../images/bbl.png";
import insta from "../images/insta.png";
import tiktok from "../images/tiktok.png";
import youtube from "../images/youtube.png";
import fb from "../images/fb.png";
import cust from "../images/cust.png";
import bar2 from "../images/bar2.png";
import barq1 from "../images/barq1.svg";
import barq2 from "../images/barq2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

interface SliderArrowProps {
  onClick?: () => void;
}
function SampleNextArrow(props: SliderArrowProps) {
  const { onClick } = props;
  return (
    <div>
      <h1
        className=" bg-black  absolute -top-10 right-20 text-white p-2  "
        onClick={onClick}
      >
        <MdNavigateNext className="text-[36px]" />
      </h1>
    </div>
  );
}

function SamplePrevArrow(props: SliderArrowProps) {
  const { onClick } = props;
  return (
    <div>
      <h2
        className=" bg-[#F4B5D9]  absolute -top-10 right-40 z-30 text-white p-2 "
        onClick={onClick}
      >
        <IoIosArrowBack className="text-[36px]" />
      </h2>
    </div>
  );
}
const CustomDot = ({ onClick, index, active }: any) => (
  <span
    onClick={onClick}
    style={{
      display: "inline-block",
      width: "26px",
      height: "10px",
      background: active ? "gray" : "#F4B5D9",
      // margin: '0 15px',
      cursor: "pointer",
      position: "absolute",
      top: "80px",
    }}
  />
);

const CustomerRecovery: React.FC = () => {
  const points = [
    "Protect your investment",
    "All clients are assessed and monitored",
    "ACLS certified Registered Nurse",
    "Decrease your risk for infection",
    "Faster recovery process",
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    dotsClass: "slick-dots",
    customPaging: (i: any) => <CustomDot index={i} />,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,

    // appendDots: (dots:any) => (
    //   <div
    //     style={{
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i:any) => (
    //   <div

    //     className=""
    //   >
    //    <div className="mr-2 bg-red-600 w-[40px]"> {i+1}</div>
    //   </div>
    // ),
    // customPaging: (i: any) => (

    //     <div style={{
    //       width: "90px",
    //       height: "10px",
    //       color: "red",
    //       marginRight: "5px",
    //       gap:'10px',
    //       backgroundColor: '#F4B5D9',
    //       display: "inline-block" ,
    //       zIndex : "10px",
    //       position:'absolute',
    //       top:'80px'
    //     }}>
    //     </div>

    // ),

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="">
        <div className="">
          <div className="w-full flex flex-col md:flex-row justify-between mx-auto">
            {/* <div className="w-auto lg:w-auto md:px-5 lg:pl-8 m-3 md:m-5 lg:m-14 xl:pt-20 md:ml-8 xl:ml-16 "> */}
            <div className="w-[65%] px-10  pt-6 md:pt-16 ml-22">
              <div className="flex flex-col lg:leading-[100px]">
                <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">
                  Custom{" "}
                </p>
                <p className="text-4xl lg:text-8xl font-bold font-montserrat ">
                  Recovery{" "}
                </p>
                <p className="text-4xl lg:text-8xl font-bold text-[#3BAFBF] font-montserrat ">
                  {" "}
                  Experience!{" "}
                </p>
              </div>
              <div className="my-6 md:my-5 lg:my-10 w-full lg:w-auto h-[43px] flex flex-col lg:flex-row">
                <Link
                  href="/customerrecovery#ConciergeRecoveryNurseServices"
                  className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2  hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat"
                >
                  View Concierge Service
                </Link>
                <Link
                  href="/surgery"
                  className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2  text-[#3BAFBF] text-center font-montserrat"
                >
                  Book a recovery Package
                </Link>
              </div>
            </div>
            <div className="lg:w-[35%] flex ">
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
                  Miami Mobile Post-Op Recovery Nurses
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full" id="ConciergeRecoveryNurseServices">
          <div className="my-6 w-[90%]  mx-auto p-4">
            <h2 className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
              Concierge Recovery Nurse Services
            </h2>
            <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
              Drip N Bodied is a concierge IV hydration and post-operative care
              company that services clients in South Florida&apos;s tri-county
              area in the comfort of their home, office, or hotel. We are known
              for providing luxury IV therapy for clients that want to feel
              rehydrated, build up their immunity, or in desperate need of a
              hang-over cure! We also provide concierge post-operative services
              to clients having cosmetic surgery such as Brazilian Butt Lifts,
              Mommy Makeovers, Lipo 360, and more! At Drip N Bodied, we take
              pride in assisting our clients with a speedy and safe recovery
              after cosmetic surgery.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className=" my-12 items-center w-[90%] flex flex-col justify-center mx-auto">
            <div className=" items-center w-full flex flex-col md:flex-row gap-8 justify-between mx-auto">
              <div className=" w-full md:w-1/2 lg:h-[360px] h-full ">
                <Image src={serv1} alt="service1" className="w-full h-full" />
              </div>

              <div className=" w-full md:w-1/2 p-2 lg:p-6 2xl:h-[360px] h-auto bg-[#FFC700] bg-opacity-25 ">
                <div className="lg:my-2">
                  <h3 className="font-montserrat  text-black text-base xl:text-[28px] font-bold leading-7">
                    Cosmetic Surgery Recovery Services
                  </h3>
                </div>
                <div className="  w-full h-auto my-2 xl:my-4 flex-shrink-0">
                  <p className="font-montserrat text-black text-sm lg:text-[16px] xl:text-base font-normal leading-4 xl:leading-6">
                    Drip N Bodied is a concierge IV hydration and post-operative
                    care company that services clients in South Florida’s
                    tri-county area in the comfort of their home, office, or
                    hotel. We are known for providing luxury IV therapy for
                    clients that want to feel rehydrated, build up their
                    immunity, or in desperate need of a hang-over cure! We also
                    provide concierge post-operative services to clients having
                    cosmetic surgery such as Brazilian Butt Lifts, Mommy
                    Makeovers, Lipo 360, and more! At Drip N Bodied, we take
                    pride in assisting.
                  </p>
                </div>
                <div className="lg:w-[200px] w-auto py-2 h-auto lg:h-[43px]">
                  <Link
                    href="/surgery"
                    className=" text-black text-sm    font-bold leading-3 lg:leading-6 uppercase p-2  lg:px-4 xl:py-2     hover:bg-yellow-300 mt-2 lg:mt-0 bg-[#FFC700] text-center font-montserrat  "
                  >
                    Book A Package
                  </Link>
                </div>

                {/* <Image src={serv1} alt="service1" className="w-full h-full" /> */}
              </div>
            </div>
          </div>

          <div className=" my-12 items-center w-[90%] flex flex-col justify-center mx-auto">
            <div className=" items-center w-full flex flex-col md:flex-row gap-8 justify-between mx-auto">
              <div className=" w-full md:w-1/2 p-2 lg:p-6 2xl:h-[360px] h-auto bg-[#3BAFBF] bg-opacity-25 ">
                <div className="lg:my-2">
                  <h3 className="font-montserrat  text-black text-base xl:text-3xl font-bold leading-7">
                    Mobile IV Infusions
                  </h3>
                </div>
                <div className="  w-full h-auto my-2 xl:my-4 flex-shrink-0">
                  <p className="font-montserrat text-black text-sm lg:text-[16px] xl:text-base font-normal leading-4 xl:leading-6">
                    Drip N Bodied is a concierge IV hydration and post-operative
                    care company that services clients in South Florida’s
                    tri-county area in the comfort of their home, office, or
                    hotel. We are known for providing luxury IV therapy for
                    clients that want to feel rehydrated, build up their
                    immunity, or in desperate need of a hang-over cure! We also
                    provide concierge post-operative services to clients having
                    cosmetic surgery such as Brazilian Butt Lifts, Mommy
                    Makeovers, Lipo 360, and more! At Drip N Bodied, we take
                    pride in assisting .
                  </p>
                </div>
                <div className="lg:w-[200px] w-auto py-2 h-auto lg:h-[43px]">
                  <Link
                    href="/ivinfusion"
                    className=" text-black text-sm    font-bold leading-3 lg:leading-6 uppercase p-2  lg:px-4 xl:py-2     hover:bg-blue-300 mt-2 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  "
                  >
                    Book IV Drips
                  </Link>
                </div>

                {/* <Image src={serv1} alt="service1" className="w-full h-full" /> */}
              </div>
              <div className=" w-full md:w-1/2 lg:h-[360px] h-full ">
                <Image src={serv2} alt="service1" className="w-full h-full" />
              </div>
            </div>
          </div>

          <div className=" my-12 items-center w-[90%] flex flex-col justify-center mx-auto">
            <div className=" items-center w-full flex flex-col md:flex-row gap-2 md:gap-8 justify-between mx-auto">
              <div className=" w-full md:w-1/2 lg:h-[360px] h-full ">
                <Image src={serv4} alt="service1" className="w-full h-full" />
              </div>
              <div className=" w-full md:w-1/2 p-2 lg:p-6 lg:h-[360px] h-auto bg-[#F4B5D9] bg-opacity-25 ">
                <div className="lg:my-2">
                  <h3 className="font-montserrat  text-black text-base xl:text-3xl font-bold leading-7">
                    Private Lymphatic Massages
                  </h3>
                </div>
                <div className="  w-full h-auto my-2 xl:my-4 flex-shrink-0">
                  <p className="font-montserrat text-black text-sm lg:text-[16px] xl:text-base font-normal leading-4 xl:leading-6">
                    Drip N Bodied is a concierge IV hydration and post-operative
                    care company that services clients in South Florida’s
                    tri-county area in the comfort of their home, office, or
                    hotel. We are known for providing luxury IV therapy for
                    clients that want to feel rehydrated, build up their
                    immunity, or in desperate need of a hang-over cure! We also
                    provide concierge post-operative services to clients having
                    cosmetic surgery such as Brazilian Butt Lifts, Mommy
                    Makeovers, Lipo 360, and more! At Drip N Bodied, we take
                    pride in assisting.
                  </p>
                </div>
                <div className="lg:w-[200px] w-auto py-2 h-auto lg:h-[43px]">
                  <Link
                    href="/massage"
                    className=" text-black text-sm    font-bold leading-3 lg:leading-6 uppercase p-2  lg:px-4 xl:py-2     hover:bg-pink-300 mt-2 lg:mt-0 bg-[#F4B5D9] text-center font-montserrat  "
                  >
                    Book Massages
                  </Link>
                </div>

                {/* <Image src={serv1} alt="service1" className="w-full h-full" /> */}
              </div>
            </div>
          </div>

          <div className=" my-8 items-center w-[90%] flex flex-col justify-center mx-auto">
            <Link
              href="/massage#post-cosmetic-surgery-treatment"
              className="text-center font-montserrat text-[#3BAFBF] text-base font-bold leading-6 uppercase"
            >
              View Post Surgical Treatment services
            </Link>
          </div>
        </div>

        <div className=" w-full">
          <div className="my-2 md:my-6 items-center w-[88%] flex   mx-auto">
            <div className=" border-b-2 border-gray-300 w-1/2"></div>
            <div className=" border-b-4 border-[#3BAFBF] w-1/2"></div>
          </div>
        </div>

        <div className="bg-[#F4B5D92B] text-center py-20">
          <h2 className="text-black font-montserrat text-xl font-bold mb-2">
            Benefits of Having a Recovery Nurse
          </h2>
          <p className="text-center font-montserrat text-base font-normal">
            Having a recovery nurse decreases your risk for infection, aids in a
            faster recovery process and provides clients with a solid support
            system.
          </p>
          <div className="px-28 pb-5 flex justify-between">
            <div className="w-1/2">
              <Image src={recoveryNurse} alt="" className="" />
              <p className="text-black font-montserrat text-base font-normal leading-6 w-[70%] text-start">
                A fundamental part of the surgical experience takes place
                outside the operating room. Hiring a Drip N Bodied Nurse will
                protect your investment by assuring you have excellent post
                operative care. All clients are assessed and monitored by an
                ACLS Certified Registered Nurse.
              </p>
            </div>
            <div className="border-r-[5px] border-[#F4B5D9] h-60 my-auto"></div>
            <div className="w-1/2 text-start  ">
              <div className="bg-[#F4B5D9E5] p-8 w-[60%] mx-auto mt-20">
                <ul className="list-disc pl-6 space-y-5">
                  {points.map((point, index) => (
                    <li
                      key={index}
                      className="text-black font-montserrat text-xl font-bold "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <Link
                    href="/surgery"
                    className="text-black font-montserrat text-lg uppercase font-bold bg-white p-2"
                  >
                    Book A Package
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full mt-8 md:mt-24">
          <div className="my-6 items-center w-[60%] flex flex-col justify-center mx-auto">
            <h2 className=" py-2  leading-normal text text-black text-center font-montserrat font-bold text-[16px] md:text-[24px]">
              We Service The Miami Area
            </h2>
            <p className="w-full flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
              We also service those in the miami area
            </p>
          </div>
        </div>

        <div className=" w-full mt-4 md:mt-24 items-center flex justify-center ">
          <div className="my-6 items-center w-[90%] flex flex-col md:flex-row justify-center  mx-auto gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 h-auto md:h-[760px]">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 justify-center mx-auto border-b-[2px]">
                <div className="px-4">
                  <div className="border-r-2 border-gray-300 pr-10">
                    <p className="text-black text-center font-Montserrat text-[16px] md:text-[24px] font-bold leading-normal">
                      Monday - Saturday
                    </p>
                    <p className="text-black font-Montserrat text-[16px] md:text-[24px] text-center font-normal leading-normal">
                      8:00 AM - 7:00 PM
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center my-4">
                    <span className="text-3xl mx-auto">✉</span>
                    <p>booking@dripnbodied.com</p>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-black text-center font-Montserrat text-[16px] md:text-[24px] font-bold leading-normal">
                    After Hours:
                  </p>
                  <p className="text-black font-Montserrat text-[16px] md:text-[24px] font-normal leading-normal">
                    {" "}
                    By Request Only
                  </p>
                  <div className="flex flex-col items-center justify-center my-4">
                    <span className="text-center text-3xl text-red-600 ">
                      ☎
                    </span>
                    <p>(305) 908-9282</p>
                  </div>
                </div>
              </div>

              <div className="w-full text-center ">
                <div className="my-6 items-center flex flex-col justify-center mx-auto">
                  <p className="w-full flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
                    We service anyone within a
                  </p>
                  <p className="pt-2  leading-normal text text-black text-center font-montserrat font-bold text-[16px] md:text-[24px]">
                    30 minute radius of Miami International Airport
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-[560px] md:h-[50%] xl:h-[440px] mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.4046384566!2d-80.22254426588243!3d25.81037282058394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1709544572684!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="w-full lg:w-1/2   h-auto md:h-[760px]">
              <Image src={cust} alt="img" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/barstore"
            className="text-[#3BAFBF] text-center font-montserrat text-base font-bold leading-7 uppercase"
          >
            View our IV Hydration Bar
          </Link>
        </div>

        <div className="my-8 md:my-24 w-full">
          <div className="my-2 md:my-6 items-center w-[88%] flex   mx-auto">
            <div className=" border-b-4 border-[#3BAFBF] w-1/2"></div>
            <div className=" border-b-2 border-gray-300 w-1/2"></div>
          </div>
        </div>

        <div className=" w-full my-2 md:my-8">
          <div className="my-2 md:my-6 items-center w-[90%] flex flex-col justify-center mx-auto">
            <h2 className=" py-2   leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
              Customer Reviews
            </h2>
            <p className="w-full py-3 md:py-10 flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal ">
              Drip N Bodied is a concierge IV hydration and post-operative care
              company that services clients in South Florida’s tri-county area
              in the comfort of their home, office, or hotel. We are known for
              providing luxury IV therapy for clients that want to feel
              rehydrated, build up their immunity, or in desperate need of a
              hang-over cure! We also provide concierge post-operative services
              to clients having cosmetic surgery such as Brazilian Butt Lifts,
              Mommy
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full flex bg-repeat md:bg-no-repeat bg-[url('../images/barbg.png')] h-[540px]"
        style={{ backgroundSize: "41%" }}
      >
        <div className=" w-full md:w-4/5 ml-auto mx-auto h-full">
          <div className="slider-container">
            <Slider {...settings} className="mt-14   md:gap-6  lg:mx-28">
              <div>
                <div className="gap-0 mt-10 p-2 md:p-6 border-2 border-[#F4B5D9] bg-white w-full md:w-[360px] h-[305px]">
                  <div className=" flex justify-between">
                    <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                      <Image src={barq1} alt="quote" />
                    </span>
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="18"
                        viewBox="0 0 90 18"
                        fill="none"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M27 0L29.0206 6.21885H35.5595L30.2694 10.0623L32.2901 16.2812L27 12.4377L21.7099 16.2812L23.7306 10.0623L18.4405 6.21885H24.9794L27 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M45 0L47.0206 6.21885H53.5595L48.2694 10.0623L50.2901 16.2812L45 12.4377L39.7099 16.2812L41.7306 10.0623L36.4405 6.21885H42.9794L45 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M63 0L65.0206 6.21885H71.5595L66.2694 10.0623L68.2901 16.2812L63 12.4377L57.7099 16.2812L59.7306 10.0623L54.4405 6.21885H60.9794L63 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M81 0L83.0206 6.21885H89.5595L84.2694 10.0623L86.2901 16.2812L81 12.4377L75.7099 16.2812L77.7306 10.0623L72.4405 6.21885H78.9794L81 0Z"
                          fill="#FFC700"
                        />
                      </svg>
                    </div>
                    <div></div>
                  </div>
                  <p className=" text-black font-montserrat text-base font-normal  w-full md:w-[320px] h-180px]">
                    Ashley and her team were incredibly caring and really made
                    sure I was comfortable post surgery. She communicated with
                    me through the whole process leading up to post op care, and
                    checked up on me after as well. I can’t recommend Drop N
                    Bodied enough. You will be in the best hands with their
                    care.
                  </p>
                  <div className="flex my-2 items-center justify-between w-full">
                    <div className="flex items-center">
                      <p className="font-montserrat text-black text-base font-bold leading-27">
                        Jane Doe
                      </p>
                    </div>
                    <div>
                      <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                        <Image src={barq2} alt="quote" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gap-0 mt-10 p-2 md:p-6 border-2 border-[#F4B5D9] bg-white w-full md:w-[360px] h-[305px]">
                  <div className=" flex justify-between">
                    <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                      <Image src={barq1} alt="quote" />
                    </span>
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="18"
                        viewBox="0 0 90 18"
                        fill="none"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M27 0L29.0206 6.21885H35.5595L30.2694 10.0623L32.2901 16.2812L27 12.4377L21.7099 16.2812L23.7306 10.0623L18.4405 6.21885H24.9794L27 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M45 0L47.0206 6.21885H53.5595L48.2694 10.0623L50.2901 16.2812L45 12.4377L39.7099 16.2812L41.7306 10.0623L36.4405 6.21885H42.9794L45 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M63 0L65.0206 6.21885H71.5595L66.2694 10.0623L68.2901 16.2812L63 12.4377L57.7099 16.2812L59.7306 10.0623L54.4405 6.21885H60.9794L63 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M81 0L83.0206 6.21885H89.5595L84.2694 10.0623L86.2901 16.2812L81 12.4377L75.7099 16.2812L77.7306 10.0623L72.4405 6.21885H78.9794L81 0Z"
                          fill="#FFC700"
                        />
                      </svg>
                    </div>
                    <div></div>
                  </div>
                  <p className=" text-black font-montserrat text-base font-normal  w-full md:w-[320px] h-180px]">
                    Ashley and her team were incredibly caring and really made
                    sure I was comfortable post surgery. She communicated with
                    me through the whole process leading up to post op care, and
                    checked up on me after as well. I can’t recommend Drop N
                    Bodied enough. You will be in the best hands with their
                    care.
                  </p>
                  <div className="flex my-2 items-center justify-between w-full">
                    <div className="flex items-center">
                      <p className="font-montserrat text-black text-base font-bold leading-27">
                        Jane Doe
                      </p>
                    </div>
                    <div>
                      <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                        <Image src={barq2} alt="quote" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gap-0 mt-10 p-2 md:p-6 border-2 border-[#F4B5D9] bg-white w-full md:w-[360px] h-[305px]">
                  <div className=" flex justify-between">
                    <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                      <Image src={barq1} alt="quote" />
                    </span>
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="18"
                        viewBox="0 0 90 18"
                        fill="none"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M27 0L29.0206 6.21885H35.5595L30.2694 10.0623L32.2901 16.2812L27 12.4377L21.7099 16.2812L23.7306 10.0623L18.4405 6.21885H24.9794L27 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M45 0L47.0206 6.21885H53.5595L48.2694 10.0623L50.2901 16.2812L45 12.4377L39.7099 16.2812L41.7306 10.0623L36.4405 6.21885H42.9794L45 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M63 0L65.0206 6.21885H71.5595L66.2694 10.0623L68.2901 16.2812L63 12.4377L57.7099 16.2812L59.7306 10.0623L54.4405 6.21885H60.9794L63 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M81 0L83.0206 6.21885H89.5595L84.2694 10.0623L86.2901 16.2812L81 12.4377L75.7099 16.2812L77.7306 10.0623L72.4405 6.21885H78.9794L81 0Z"
                          fill="#FFC700"
                        />
                      </svg>
                    </div>
                    <div></div>
                  </div>
                  <p className=" text-black font-montserrat text-base font-normal  w-full md:w-[320px] h-180px]">
                    Ashley and her team were incredibly caring and really made
                    sure I was comfortable post surgery. She communicated with
                    me through the whole process leading up to post op care, and
                    checked up on me after as well. I can’t recommend Drop N
                    Bodied enough. You will be in the best hands with their
                    care.
                  </p>
                  <div className="flex my-2 items-center justify-between w-full">
                    <div className="flex items-center">
                      <p className="font-montserrat text-black text-base font-bold leading-27">
                        Jane Doe
                      </p>
                    </div>
                    <div>
                      <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                        <Image src={barq2} alt="quote" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gap-0 mt-10 p-2 md:p-6 border-2 border-[#F4B5D9] bg-white w-full md:w-[360px] h-[305px]">
                  <div className=" flex justify-between">
                    <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                      <Image src={barq1} alt="quote" />
                    </span>
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="18"
                        viewBox="0 0 90 18"
                        fill="none"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M27 0L29.0206 6.21885H35.5595L30.2694 10.0623L32.2901 16.2812L27 12.4377L21.7099 16.2812L23.7306 10.0623L18.4405 6.21885H24.9794L27 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M45 0L47.0206 6.21885H53.5595L48.2694 10.0623L50.2901 16.2812L45 12.4377L39.7099 16.2812L41.7306 10.0623L36.4405 6.21885H42.9794L45 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M63 0L65.0206 6.21885H71.5595L66.2694 10.0623L68.2901 16.2812L63 12.4377L57.7099 16.2812L59.7306 10.0623L54.4405 6.21885H60.9794L63 0Z"
                          fill="#FFC700"
                        />
                        <path
                          d="M81 0L83.0206 6.21885H89.5595L84.2694 10.0623L86.2901 16.2812L81 12.4377L75.7099 16.2812L77.7306 10.0623L72.4405 6.21885H78.9794L81 0Z"
                          fill="#FFC700"
                        />
                      </svg>
                    </div>
                    <div></div>
                  </div>
                  <p className=" text-black font-montserrat text-base font-normal  w-full md:w-[320px] h-180px]">
                    Ashley and her team were incredibly caring and really made
                    sure I was comfortable post surgery. She communicated with
                    me through the whole process leading up to post op care, and
                    checked up on me after as well. I can’t recommend Drop N
                    Bodied enough. You will be in the best hands with their
                    care.
                  </p>
                  <div className="flex my-2 items-center justify-between w-full">
                    <div className="flex items-center">
                      <p className="font-montserrat text-black text-base font-bold leading-27">
                        Jane Doe
                      </p>
                    </div>
                    <div>
                      <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black  h-auto ">
                        <Image src={barq2} alt="quote" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="flex my-8 justify-center items-center">
            <Link href='https://g.co/kgs/ARVoJJu' className="md:text-[#3BAFBF] text-center font-montserrat text-base font-bold md:font-normal leading-[27px]">
              See all of our Google reviews
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerRecovery;
