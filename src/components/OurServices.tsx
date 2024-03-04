import Image from "next/image";
import React from "react";
import serv1 from "../images/serv1.png";
import serv2 from "../images/serv2.png";
import serv3 from "../images/serv3.png";
import serv4 from "../images/serv4.png";
import bbl from "../images/bbl.png";
import insta from "../images/insta.png";
import tiktok from "../images/tiktok.png";
import youtube from "../images/youtube.png";
import fb from "../images/fb.png";

const OurServices = () => {
  return (
    <>
      <div className="my-12  w-full">
        <div className=" my-16 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <p className="text-center py-6 font-montserrat text-black text-3xl font-bold leading-normal text">
            Our Services
          </p>
          <p className="w-full flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal h-[34px]">
            Drip N Bodied is a concierge IV hydration and post-operative care
            company that services clients in South Florida. We offer mobile IV
            hydration, private RN post-operative care, and essential surgery
            merchandise. Explore our website to learn more.
          </p>
        </div>

        <div className=" my-12 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <div className=" items-center w-full flex gap-8 justify-between mx-auto">
            <div className=" w-[600px] h-[360px] ">
              <Image src={serv1} alt="service1" className="w-full h-full" />
            </div>
            <div className=" w-[600px] p-6 h-[360px] bg-[#FFC700] bg-opacity-25 ">
              <div className="my-2">
                <p className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Concierge Surgery Recovery
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
                <button className=" text-black text-sm    font-bold leading-6 uppercase   px-4 py-2  rounded   hover:bg-blue-300 mt-4 lg:mt-0 bg-[#FFC700] text-center font-montserrat  ">
                  Book Free Consult
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
                  IV Therapy and Drips
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
                  Lymphatic Massages
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
            
            <div className=" w-[600px] p-6 h-[360px] bg-[#000000] bg-opacity-25 ">
            
              <div className=" my-2">
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
                <button className=" text-white text-sm    font-bold leading-6 uppercase   px-4 py-2  rounded   hover:bg-black-300 mt-4 lg:mt-0 bg-[#000000] text-center font-montserrat  ">
                Book Treatments
                </button>
              </div>

              {/* <Image src={serv1} alt="service1" className="w-full h-full" /> */}
            </div>
            <div className=" w-[600px] h-[360px] ">
              <Image src={serv4} alt="service1" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className=" my-8 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <p className="text-center font-montserrat text-[#3BAFBF] text-base font-bold leading-6 uppercase">
          View surgery recovery packages
          </p>
        </div>

        <div className=" my-12 items-center w-[1218px] flex flex-col justify-center mx-auto">
          <p className="text-center  font-montserrat text-black text-3xl font-bold leading-5">
          Follow Us On Social Media
          </p>
        </div>

        <div className="my-8  gap-8  w-[1218px] flex  mx-auto">
            <div className="">
                <Image src={bbl} alt="bbl-img" />
            </div>
            <div className=" gap-8 flex flex-col justify-start items-start ">
                <div className="">
                    <div className="flex items-center justify-normal">
                        <Image src={insta} alt="bbl-img" />
                        <p className="mx-2 text-[#3BAFBF]">@dripnbodied_recoverynurse</p>
                     </div>
                     <div className="flex items-center">
                        <Image src={tiktok} alt="bbl-img" />
                        <p className="mx-2 text-[#3BAFBF]">@dripnbodied_recoverynurse</p>
                     </div>
                     <div className="flex items-center justify-normal">
                        <Image src={youtube} alt="bbl-img" />
                        <p className="mx-2 text-[#3BAFBF]">Drip N Bodied</p>
                     </div>
                     <div className="flex items-center">
                        <Image src={fb} alt="bbl-img" />
                        <p className="mx-2 text-[#3BAFBF]">Drip N Bodied</p>
                     </div>
                </div>
            </div>

        </div>


      </div>
    </>
  );
};

export default OurServices;
