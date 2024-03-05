"use client";
import Image from "next/image";
import React from "react";
import barstore from "../images/barstore.png";
import recoverynurses from "../images/RecoveryNurses.png";
import serv1 from "../images/serv1.png";
import serv2 from "../images/serv2.png";
import serv3 from "../images/serv3.png";
import serv4 from "../images/serv4.png";
import bbl from "../images/bbl.png";
import insta from "../images/insta.png";
import tiktok from "../images/tiktok.png";
import youtube from "../images/youtube.png";
import fb from "../images/fb.png";
import bar2 from "../images/bar2.png";
import barq1 from "../images/barq1.svg";
import barq2 from "../images/barq2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

interface SliderArrowProps {
  onClick?: () => void;
}
function SampleNextArrow(props: SliderArrowProps) {
  const { onClick } = props;
return (
  <div>
    <h1 className=" bg-black  absolute -top-10 right-20 text-white p-2  "  onClick={onClick}>
      <MdNavigateNext className="text-[36px]" />
    </h1>
  </div>
);
}

function SamplePrevArrow(props: SliderArrowProps) {
  const { onClick } = props;
return (
  <div>
    <h2 className=" bg-[#F4B5D9]  absolute -top-10 right-40 z-30 text-white p-2 " onClick={onClick}>
      <IoIosArrowBack className="text-[36px]" />
    </h2>
  </div>
);
}
const CustomDot = ({ onClick, index, active }:any) => (
<span
  onClick={onClick}
  style={{
    display: 'inline-block',
    width: '26px',
    height: '10px',
    background: active ? 'gray' : '#F4B5D9', 
    // margin: '0 15px',
    cursor: 'pointer',
    position:'absolute',
    top:'80px'
  }}

/>
);
const BarStore: React.FC = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    dotsClass: 'slick-dots', 
    customPaging: (i:any) => <CustomDot index={i}  />,
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
      <div
        className=""
        // style={{
        //   background:
        //     "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)",
        // }}
      >
        <div className=" w-full flex justify-between ">
          <div className="w-auto px-10 m-10 pt-16 ml-22">
            <div className="  flex flex-col gap-8 ">
              <p className="text-7xl font-bold">Get A </p>
              <p className="text-7xl font-bold ">Drip At Our </p>
              <p className="text-7xl font-bold text-[#3BAFBF]">
                {" "}
                Miami IV Bar{" "}
              </p>
            </div>
            <div className="my-10 w-auto h-[43px] flex ">
              <button className=" text-white text-sm font-bold leading-6 uppercase px-4 py-2  rounded hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
                Book an IV Drip
              </button>
              <p className="mx-6  text-sm font-bold leading-6 uppercase   px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat  ">
                View Recovery Services
              </p>
            </div>
          </div>
          <div className=" w-auto flex justify-end items-center">
            <Image
              src={barstore}
              alt="Logo"
              className=" w-[656px] mix-blend-multiply  object-cover  h-[580px]"
            />
          </div>
        </div>
        <div className="w-full  relative -top-14 ">
          <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center items-center w-auto h-[27px]">
              <p className="text-blue-500 text-center font-niconne text-6xl font-normal">
                Miami IV Bar By Drip N Bodied
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="my-6 items-center w-[1218px] flex flex-col justify-center mx-auto">
            <p className=" py-2   leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
              IV Hydration + Post-Op Bar Services
            </p>
            <p className="w-full flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal ">
              Drip N Bodied is a concierge IV hydration and post-operative care
              company that services clients in South Florida’s tri-county area
              in the comfort of their home, office, or hotel. We are known for
              providing luxury IV therapy for clients that want to feel
              rehydrated, build up their immunity, or in desperate need of a
              hang-over cure! We also provide concierge post-operative services
              to clients having cosmetic surgery such as Brazilian Butt Lifts,
              Mommy Makeovers, Lipo 360, and more! At Drip N Bodied, we take
              pride in assisting our clients with a speedy and safe recovery
              after cosmetic surgery.
            </p>
          </div>
        </div>

        <div className=" my-12 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <div className=" items-center w-full flex gap-8 justify-between mx-auto">
            <div className=" w-[600px] p-6 h-[360px] bg-[#3BAFBF] bg-opacity-50 ">
              <div className="my-2">
                <p className="font-montserrat  text-black text-3xl font-bold leading-7">
                  IV Drips
                </p>
              </div>
              <div className="  w-[540px] h-auto my-4 flex-shrink-0">
                <p className="font-montserrat text-black text-base font-normal leading-6">
                  Drip N Bodied is a concierge IV hydration and post-operative
                  care company that services clients in South Florida’s
                  tri-county area in the comfort of their home, office, or
                  hotel. We are known for providing luxury IV therapy for
                  clients that want to feel rehydrated, build up their immunity,
                  or in desperate need of a hang-over cure! We also provide
                  concierge post-operative services to clients having cosmetic
                  surgery such as Brazilian Butt Lifts, Mommy Makeovers, Lipo
                  360, and more! At Drip N Bodied, we take pride in assisting .
                </p>
              </div>
              <div className="w-[200px] h-[43px]">
                <button className=" text-white text-sm font-bold leading-6 uppercase   px-4 py-2  rounded   hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
                  Book IV Drips
                </button>
              </div>

              {/* <Image src={serv1} alt="service1" className="w-full h-full" /> */}
            </div>

            <div className=" w-[600px] h-[360px] ">
              <Image src={serv2} alt="service1" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className=" my-12 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <div className=" items-center w-full flex gap-8 justify-between mx-auto">
            <div className=" w-[600px] h-[360px] ">
              <Image src={serv4} alt="service1" className="w-full h-full" />
            </div>
            <div className=" w-[600px] p-6 h-[360px] bg-[#F4B5D9] bg-opacity-50 ">
              <div className="my-2">
                <p className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Private Lymphatic Massages
                </p>
              </div>
              <div className="  w-[540px] h-auto my-4 flex-shrink-0">
                <p className="font-montserrat text-black text-base font-normal leading-6">
                  Drip N Bodied is a concierge IV hydration and post-operative
                  care company that services clients in South Florida’s
                  tri-county area in the comfort of their home, office, or
                  hotel. We are known for providing luxury IV therapy for
                  clients that want to feel rehydrated, build up their immunity,
                  or in desperate need of a hang-over cure! We also provide
                  concierge post-operative services to clients having cosmetic
                  surgery such as Brazilian Butt Lifts, Mommy Makeovers, Lipo
                  360, and more! At Drip N Bodied, we take pride in assistin.
                </p>
              </div>
              <div className="w-[200px] h-[43px]">
                <button className=" text-black text-sm    font-bold leading-6 uppercase   px-4 py-2  rounded   hover:bg-pink-300 mt-4 lg:mt-0 bg-[#F4B5D9] text-center font-montserrat  ">
                  Book Massages
                </button>
              </div>

              {/* <Image src={serv1} alt="service1" className="w-full h-full" /> */}
            </div>
          </div>
        </div>
        <div className=" my-12 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <div className=" items-center w-full flex gap-8 justify-between mx-auto">
            <div className=" w-[600px] p-6 h-[360px] bg-[#3BAFBF] bg-opacity-50 ">
              <div className="my-2">
                <p className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Post Surgical Treatments
                </p>
              </div>
              <div className="  w-[540px] h-auto my-4 flex-shrink-0">
                <p className="font-montserrat text-black text-base font-normal leading-6">
                  Drip N Bodied is a concierge IV hydration and post-operative
                  care company that services clients in South Florida’s
                  tri-county area in the comfort of their home, office, or
                  hotel. We are known for providing luxury IV therapy for
                  clients that want to feel rehydrated, build up their immunity,
                  or in desperate need of a hang-over cure! We also provide
                  concierge post-operative services to clients having cosmetic
                  surgery such as Brazilian Butt Lifts, Mommy Makeovers, Lipo
                  360, and more! At Drip N Bodied, we take pride in assisting.
                </p>
              </div>
              <div className="w-[200px] h-[43px]">
                <button className=" text-white text-sm font-bold leading-6 uppercase   px-4 py-2  rounded   hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
                  Book Treatments
                </button>
              </div>

              {/* <Image src={serv1} alt="service1" className="w-full h-full" /> */}
            </div>

            <div className=" w-[600px] h-[360px] ">
              <Image src={serv2} alt="service1" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className=" my-8 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <p className="text-center font-montserrat text-[#3BAFBF] text-base font-bold leading-6 uppercase">
            View surgery recovery packages
          </p>
        </div>
      </div>

      <div className=" w-full">
        <div className="my-6 items-center w-[1152px] flex   mx-auto">
          <div className=" border-b-2 border-gray-300 w-1/2"></div>
          <div className=" border-b-4 border-[#3BAFBF] w-1/2"></div>
        </div>
      </div>

      <div className=" w-full mt-24">
        <div className="my-6 items-center w-[800px] flex flex-col justify-center mx-auto">
          <p className=" py-2  leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
            Meet Us At the Bar
          </p>
          <p className="w-full flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
            We also service those in the miami area
          </p>
        </div>
      </div>

      <div className=" w-full mt-24 items-center flex justify-center  ">
        <div className="my-6 items-center w-[1218px] flex justify-center  mx-auto gap-16">
          <div className="w-1/2 h-[760px]">
            <div className="flex items-center gap-4 justify-center mx-auto border-b-[2px]">
              <div className="px-4">
                <p className="text-black text-center font-Montserrat text-[24px] font-bold leading-normal">
                  Monday - Saturday
                </p>
                <p className="text-black font-Montserrat text-[24px] font-normal leading-normal">
                  8:00 AM - 7:00 PM
                </p>
                <div className="flex flex-col items-center justify-center my-4">
                  <span className="text-3xl mx-auto">✉</span>
                  <p>booking@dripnbodied.com</p>
                </div>
              </div>
              <div className="px-4">
                <p className="text-black text-center font-Montserrat text-[24px] font-bold leading-normal">
                  After Hours:
                </p>
                <p className="text-black font-Montserrat text-[24px] font-normal leading-normal">
                  {" "}
                  By Request Only
                </p>
                <div className="flex flex-col items-center justify-center my-4">
                  <span className="text-center text-3xl text-red-700 ">☎</span>
                  <p>(305) 908-9282</p>
                </div>
              </div>
            </div>

            <div className=" w-full ">
              <div className="my-6 items-center flex flex-col justify-center mx-auto">
                <p className="mx-auto w-autos flex justify-center text-center text-black font-montserrat font-bold text-[24px] leading-normal ">
                  1001 Ponce de Leon, Suite A <br /> Coral Gables, Florida
                </p>
              </div>
            </div>
            <div className="w-[560px] h-[440px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.4046384566!2d-80.22254426588243!3d25.81037282058394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1709544572684!5m2!1sen!2s"
                width="600"
                height="440"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-1/2   h-[700px]">
            <Image src={bar2} alt="img" className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className=" mb-12  items-center w-[1218px] flexjustify-center mx-auto">
        <p className="text-center font-montserrat text-[#3BAFBF] text-base font-bold leading-6 uppercase">
          View our Mobile Concierge Services
        </p>
      </div>

      <div className="my-24 w-full">
        <div className="my-6 items-center w-[1152px] flex   mx-auto">
          <div className=" border-b-4 border-[#3BAFBF] w-1/2"></div>
          <div className=" border-b-2 border-gray-300 w-1/2"></div>
        </div>
      </div>

      <div className=" w-full my-8">
        <div className="my-6 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <p className=" py-2   leading-normal text text-black text-center font-montserrat font-bold text-[24px]">
            Customer Reviews
          </p>
          <p className="w-full py-10 flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal ">
            Drip N Bodied is a concierge IV hydration and post-operative care
            company that services clients in South Florida’s tri-county area in
            the comfort of their home, office, or hotel. We are known for
            providing luxury IV therapy for clients that want to feel
            rehydrated, build up their immunity, or in desperate need of a
            hang-over cure! We also provide concierge post-operative services to
            clients having cosmetic surgery such as Brazilian Butt Lifts, Mommy
          </p>
        </div>
      </div>

      <div className="w-full flex bg-no-repeat bg-[url('../images/barbg.png')] h-[540px]"
      style={{backgroundSize:'41%'}}>
        <div className="  w-4/5  mx-auto h-full">
          <div className="slider-container">
            <Slider {...settings} className="mt-14   gap-6 mx-28">
              <div>
                <div className="gap-0 mt-10 p-6 border-2 border-[#F4B5D9] bg-white w-[360px] h-[305px]">
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
                  <p className=" text-black font-montserrat text-base font-normal  w-[320px] h-180px]">
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
                <div className="gap-0 mt-10 p-6 border-2 border-[#F4B5D9] bg-white w-[360px] h-[305px]">
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
                  <p className=" text-black font-montserrat text-base font-normal  w-[320px] h-180px]">
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
                <div className="gap-0 mt-10 p-6 border-2 border-[#F4B5D9] bg-white w-[360px] h-[305px]">
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
                  <p className=" text-black font-montserrat text-base font-normal  w-[320px] h-180px]">
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
                <div className="gap-0 mt-10 p-6 border-2 border-[#F4B5D9] bg-white w-[360px] h-[305px]">
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
                  <p className=" text-black font-montserrat text-base font-normal  w-[320px] h-180px]">
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
          <p className="text-[#3BAFBF] text-center font-montserrat text-base font-normal leading-[27px]">
          See all of our Google reviews
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarStore;
