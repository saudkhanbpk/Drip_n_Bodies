"use client"

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import serv1 from "../images/serv1.png";
import serv2 from "../images/serv2.png";
import serv3 from "../images/serv3.png";
import serv4 from "../images/serv4.png";
import bbl from "../images/bbl.png";
import insta from "../images/insta.png";
import tiktok from "../images/tiktok.png";
import youtube from "../images/youtube.png";
import fb from "../images/fb.png";
import ourservvice from "../images/ourservvice.png";
import Link from "next/link";
import newrecovery from '../images/newrecovery.png'
const OurServices = () => {

  return (
    <>

<div className="w-full  flex justify-center">
          <video autoPlay muted loop  className="w-full ">
            <source src="/video.mp4" type="video/mp4" />
          </video>
</div>
      <div className="my-12  w-[90%] mx-auto">
        <div className=" my-16 items-center w-full flex flex-col justify-center mx-auto">
          <h2 className="text-center py-2 md:py-6 font-montserrat text-black text-3xl font-bold leading-normal text">
            Our Services
          </h2>
          <p className="w-full md:flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal md:h-[34px]">
            Drip N Bodied is a concierge IV hydration and post-operative care
            company that services clients in South Florida. We offer mobile IV
            hydration, private RN post-operative care, and essential surgery
            merchandise. Explore our website to learn more.
          </p>
        </div>

        {/* <div className=" my-12 items-center w-full flex flex-col justify-center mx-auto"> */}
          <div className="w-full h-auto flex lg:flex-row flex-col gap-8 mx-auto md:px-20">
            <div className="md:w-1/2 flex justify-end md:h-auto ">
              <Image src={serv1} alt="service1" className="w-full h-full ml-auto" />
            </div>
            <div className=" w-full md:w-1/2 p-6 h-auto bg-[#FFC700] bg-opacity-25 ">
              <div className="w-[95%] flex flex-col justify-start">
              <div className="my-2">
                <h3 className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Concierge Surgery Recovery
                </h3>
              </div>
              <div className="md:h-auto my-4 flex-grow">
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
              <div className="md:w-[200px] md:h-[43px]">
                <a href="/surgery" className=" text-black text-sm font-bold leading-6 uppercase px-4 py-2 hover:bg-blue-300 mt-4 lg:mt-0 bg-[#FFC700] text-center font-montserrat"
               >
                  Book A Package
                </a>
              </div>
            </div>
          </div>
          </div>
        {/* </div> */}

        {/* <div className=" my-12 items-center w-full flex flex-col justify-center mx-auto"> */}
          <div className="my-12 w-full gap-8 flex lg:flex-row flex-col max-md:flex-col-reverse mx-auto md:px-20">
            <div className=" md:w-1/2 justify-end p-6 md:h-auto bg-[#3BAFBF] bg-opacity-50 ">
              <div className="my-2">
                <h3 className="font-montserrat  text-black text-3xl font-bold leading-7">
                  IV Therapy and Drips
                </h3>
              </div>
              <div className="  md:h-auto my-4 flex-shrink-0">
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
              <div className="md:w-[200px] md:h-[43px]">
                <a href="/ivinfusion" className=" text-white text-sm font-bold leading-6 uppercase   px-4 py-2   hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  "               
                >
                  Book IV Drips
                </a>
              </div>
            </div>
            <div className=" md:w-1/2 md:h-auto ">
              <Image
                src={serv2}
                alt="service1"
                className="md:w-full md:h-full"
              />
            </div>
          </div>
        {/* </div> */}
        {/* <div className=" my-12 items-center w-full flex flex-col justify-center mx-auto"> */}
          <div className="my-12 w-full flex lg:flex-row flex-col gap-8 mx-auto md:px-20">
            <div className=" md:w-1/2 md:h-auto ">
              <Image src={serv4} alt="service1" className="w-full h-full" />
            </div>
            <div className=" md:w-1/2 p-6 md:h-auto bg-[#F4B5D9] bg-opacity-50 ">
              <div className="w-[95%] flex flex-col justify-start">
              <div className="my-2">
                <h3 className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Lymphatic Massages
                </h3>
              </div>
              <div className="h-auto my-4 flex-shrink-0">
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
              <div className="md:w-[200px] md:h-[43px]">
                <a href="/massage" className=" text-black text-sm font-bold leading-6 uppercase px-4 py-2 hover:bg-pink-300 mt-4 lg:mt-0 bg-[#F4B5D9] text-center font-montserrat"
                >
                  Book Massages
                </a>
              </div>
            </div>
          </div>
          </div>
        {/* </div> */}
        {/* <div className="  items-center w-full flex flex-col justify-center mx-auto"> */}
          <div className="my-12 w-full flex lg:flex-row flex-col max-md:flex-col-reverse gap-8 mx-auto md:px-20">
            <div className="w-full md:w-1/2 p-6 md:h-auto bg-[#000000] bg-opacity-25 ">
              <div className=" my-2">
                <h3 className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Post Surgical Treatments
                </h3>
              </div>
              <div className=" md:h-auto my-4 flex-shrink-0">
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
              <div className="md:w-[200px] md:h-[43px]">
                <a href="/surgery" className=" text-white text-sm font-bold leading-6 uppercase px-4 py-2 hover:bg-black-300 mt-4 lg:mt-0 bg-[#000000] text-center font-montserrat"
               >
                  Book Treatments
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-auto ">
              <Image src={newrecovery} alt="service1" className="w-full h-full" />
            </div>
          </div>
        {/* </div> */}
        <div className=" my-8 items-center w-full flex flex-col justify-center mx-auto">
          <Link href='/resourcehub' className="text-center font-montserrat text-[#3BAFBF] text-base font-bold leading-6 uppercase">
            LEARN MORE ABOUT BOOKING US
          </Link>
        </div>
        <div className=" my-12 items-center w-full flex flex-col justify-center mx-auto ">
          <h2 className="text-center font-montserrat text-black text-xl md:text-3xl font-bold leading-5 ">
            Follow Us On Social Media
          </h2>
        </div>
        <div className="my-8  gap-8  w-full md:flex  mx-auto">
          <div className="w-full md:w-[70%]">
            <iframe
              className="w-full h-[440px]"
              src="https://www.youtube.com/embed/videoseries?list=PLEk0KHcBzdt9YLJYgQpN0P71PglGs5pmy"
              title="YouTube Video Playlist"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-[30%] gap-8 md:flex flex-col justify-start items-start ">
            <div className="">
              <div className="flex items-center justify-normal">
                <Image src={insta} alt="bbl-img" />
                <Link href={"https://www.instagram.com/dripnbodied_recoverynurse/"} className="mx-2 text-[#3BAFBF]">
                  @dripnbodied_recoverynurse
                </Link>
              </div>
              <div className="flex items-center">
                <Image src={tiktok} alt="bbl-img" />
                <Link href={"https://www.tiktok.com/@dripnbodiedrecoverynurse"} className="mx-2 text-[#3BAFBF]">
                  @dripnbodied_recoverynurse
                </Link>
              </div>
              <div className="flex items-center justify-normal">
                <Image src={youtube} alt="bbl-img" />
                <Link href={"https://www.youtube.com/@dripnbodied_recoverynurse"} className="mx-2 text-[#3BAFBF]">Drip N Bodied</Link>
              </div>
              <div className="flex items-center">
                <Image src={fb} alt="bbl-img" />
                <Link href={"https://www.facebook.com/Dripnbodied/"} className="mx-2 text-[#3BAFBF]">Drip N Bodied</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;