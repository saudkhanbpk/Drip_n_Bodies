import Image from "next/image";
import React from "react";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import about3 from "../images/about3.png";
import ashley from "../images/Ashley.png";
import anika from "../images/Anika.png";
import thereal from "../images/thereal.png";
import recoverynurses from "../images/aboutmiani.png";

const AboutUs = () => {
  return (
    <>
      <div className="pb-20" style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)' }}>
        <div className=" w-full md:flex  justify-between ">
          <div className=" px-10 m-10 pt-16 ml-22 w-full">
            <div className="  md:flex flex-col gap-4 ">
              <p className="md:text-6xl text-3xl font-bold">Who Are </p>
              <p className="md:text-6xl  text-3xl font-bold text-[#F4B5D9]">
                The Real Nurses
              </p>
              <p className="md:text-6xl text-3xl font-bold text-[#F4B5D9]">Of Miami®</p>
            </div>
            <div className="my-10 w-auto h-[43px]">
              <button className="font-montserrat text-white text-sm font-bold leading-6 uppercase   px-4 py-2    hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center   ">
                Book Free Consultation
              </button>
            </div>
          </div>
          <div className=" md:w-full md:flex justify-end items-center">
            <Image src={about1} alt="Logo" className=" md:w-[606px] mix-blend-multiply md:h-[650px] object-cover" />
          </div>
        </div>
        <div className="w-full  relative md:-top-14 ">
          <div className="py-12 md:w-full md:h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
            <div className="flex justify-center  items-center w-auto h-[27px]">
                <p className="font-niconne md:text-6xl text-3xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] " style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }} > Miami Cosmetic Recovery Nurses</p>
            </div>

          </div>
        </div>
        <div className="w-[90%] mx-auto">

          <div className=" w-full">
            <div className=" items-center w-[88%]  md:flex flex-col justify-center mx-auto">
              <p className="text-center py-2 font-montserrat text-black text-[20px] md:text-3xl font-bold leading-normal text">
                About Drip N Bodied
              </p>
              <p className="w-full my-8 flex justify-start  text-center font-montserrat text-black text-base font-normal leading-normal ">
                Drip N Bodied is a concierge IV hydration and post-operative care
                company that services clients in South Florida’s tri-county area in
                the comfort of their home, office, or hotel. We are known for
                providing luxury IV therapy for clients that want to feel
                rehydrated, build up their immunity, or in desperate need of a
                hang-over cure! We also provide concierge post-operative services to
                clients having cosmetic surgery such as Brazilian Butt Lifts, Mommy
                Makeovers, Lipo 360, and more! At Drip N Bodied, we take pride in
                assisting our clients with a speedy and safe recovery after cosmetic
                surgery.
              </p>
            </div>
          </div>

          <div className=" w-full my-6 md:my-16">
            <div className=" items-center w-[88%] gap-12 md:flex  justify-center mx-auto">
              <div className="md:w-[350px] p-2 ">
                <p className=" text-black text-center font-montserrat text-16 font-bold leading-23">
                  Our Goal
                </p>
                <p className="text-black text-center font-montserrat text-16 font-normal leading-17 ">
                  Our goal is to provide a safe and speedy recovery to all of our
                  clients.
                </p>
              </div>
              <div className="md:w-[350px] mx-auto">
                <p className=" text-black text-center font-montserrat text-16 font-bold leading-23">
                  Drip N Bodied Is
                </p>
                <p className="text-black text-center font-montserrat text-16 font-normal leading-17 ">
                  Drip N Bodeid is nurse owned and operated. We are licensed, bonded
                  and insured!
                </p>
              </div>
              <div className="md:w-[350px] mx-auto">
                <p className=" text-black text-center font-montserrat text-16 font-bold leading-23">
                  We Take Pride
                </p>
                <p className="text-black text-center font-montserrat text-16 font-normal leading-17 ">
                  We take pride that Drip N Bodied is centered around educating our
                  clients!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full my-3 md:my-8">
          <div className=" items-center md:w-full  md:flex flex-col  justify-center mx-auto">
            <p className="text-center py-2 font-montserrat text-black text-[22px] md:text-3xl font-bold leading-normal text">
              Meet Your Registered Nurses
            </p>
            <p className="w-full px-2  md:flex justify-center text-center font-montserrat text-black text-base font-normal leading-normal ">
              Our dedicated team of Registered Nurses help to ensure you have the
              best post operative experience possible.
            </p>
          </div>
        </div>

        <div className=" w-full my-8 ">
          <div className=" items-center md:w-full  md:flex  justify-center mx-auto">
            <div className="md:flex gap-20  w-[90%] mx-auto">
              <div className="md:w-1/2 bg-white ">
                <Image
                  src={about2}
                  alt="img here"
                  className="md:w-full md:h-[650px] object-cover"
                />
                <div className=" p-4">

                  {/* <Image src={ashley} alt="img here" className="my-6 " /> */}
                  <p className=" font-niconne text-5xl font-normal leading-16 tracking-normal text-left md:ps-3 text-[#3BAFBF]">Ashley Peters</p>
                  <div className="md:w-full ">
                    <p className="py-4 text-black  md:ps-3 font-montserrat text-[24px] font-bold">
                      Registered Nurse, BS
                    </p>
                    <p className="text-black text-start md:ps-3 font-montserrat text-[16px] font-normal leading-16 ">
                      I have been a Registered Nurse for 4 years and received my
                      bachelor’s degree from Nova South Eastern University (NSU). My
                      area of specialty is in the cardiac Progressive Care Unit
                      (PCU) with plenty of experience with post-surgical patients
                      who have had open-heart surgeries and more. I have been a
                      travel nurse for 3 years and had the opportunity to travel
                      across the nation. During the pandemic, I worked inside the
                      COVID-19 epicenters in New York, Texas, and Florida. My
                      experiences in the acute care setting have truly sharpened my
                      clinical skills! I am currently in graduate school pursuing my
                      Masters of Science to become a Family Nurse Practitioner.
                      clients.
                    </p>
                  </div>
                </div>

              </div>
              <div className="md:w-1/2 bg-white ">
                <Image
                  src={about3}
                  alt="img here"
                  className="md:w-full h-[650px] object-cover "
                />
                <div className=" p-4">

                  {/* <Image src={anika} alt="img here" className="my-6 " /> */}
                  <p className="font-niconne text-5xl font-normal leading-16 tracking-normal text-left md:ps-3 text-[#3BAFBF]">Anika Davis</p>
                  <div className="md:w-full ">
                    <p className="py-4 text-black  md:ps-3 font-montserrat text-[24px] font-bold">
                      Registered Nurse, BS
                    </p>
                    <p className="text-black text-start md:ps-3 font-montserrat text-[16px] font-normal leading-16 ">
                      I have been a Registered Nurse for 4 years and received my
                      bachelor’s degree from Nova South Eastern University (NSU). My
                      area of specialty is in the cardiac Progressive Care Unit
                      (PCU) with plenty of experience with post-surgical patients
                      who have had open-heart surgeries and more. I have been a
                      travel nurse for 3 years and had the opportunity to travel
                      across the nation. During the pandemic, I worked inside the
                      COVID-19 epicenters in New York, Texas, and Florida. My
                      experiences in the acute care setting have truly sharpened my
                      clinical skills! I am currently in graduate school pursuing my
                      Masters of Science to become a Family Nurse Practitioner.
                      clients.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
