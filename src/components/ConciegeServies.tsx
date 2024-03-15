import Image from "next/image";
import React from "react";
import serv1 from "../images/serv1.png";
import serv2 from "../images/serv2.png";
import serv4 from "../images/serv4.png";


const ConciegeServies = () => {
  return (
    <>
       <div className="my-12  w-[90%] mx-auto">
        <div className=" my-16 items-center w-full flex flex-col justify-center mx-auto">
          <p className="text-center py-2 md:py-6 font-montserrat text-black text-3xl font-bold leading-normal text">
            Our Services
          </p>
          <p className="w-full md:flex justify-start text-center font-montserrat text-black text-base font-normal leading-normal md:h-[34px]">
            Drip N Bodied is a concierge IV hydration and post-operative care
            company that services clients in South Florida. We offer mobile IV
            hydration, private RN post-operative care, and essential surgery
            merchandise. Explore our website to learn more.
          </p>
        </div>

        <div className=" my-12 items-center w-full flex flex-col justify-center mx-auto">
          <div className="items-center w-full flex lg:flex-row flex-col gap-8 justify-between mx-auto">
            <div className=" md:w-[600px] md:h-[360px] ">
              <Image src={serv1} alt="service1" className="w-full h-full" />
            </div>
            <div className=" w-full md:w-[600px] p-6 md:h-[360px] bg-[#FFC700] bg-opacity-25 ">
              <div className="my-2">
                <p className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Concierge Surgery Recovery
                </p>
              </div>
              <div className="  md:w-[540px] md:h-auto my-4 flex-shrink-0">
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
                <button className=" text-black text-sm font-bold leading-6 uppercase   px-4 py-2    hover:bg-blue-300 mt-4 lg:mt-0 bg-[#FFC700] text-center font-montserrat  ">
                  Book Free Consult
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" my-12 items-center w-full flex flex-col justify-center mx-auto">
          <div className=" items-center w-full gap-8 flex lg:flex-row  flex-col justify-between mx-auto">
            <div className=" md:w-[600px] p-6 md:h-[360px] bg-[#3BAFBF] bg-opacity-50 ">
              <div className="my-2">
                <p className="font-montserrat  text-black text-3xl font-bold leading-7">
                  IV Therapy and Drips
                </p>
              </div>
              <div className="  md:w-[540px] md:h-auto my-4 flex-shrink-0">
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
                <button className=" text-white text-sm font-bold leading-6 uppercase   px-4 py-2   hover:bg-blue-300 mt-4 lg:mt-0 bg-[#3BAFBF] text-center font-montserrat  ">
                  Book IV Drips
                </button>
              </div>
            </div>
            <div className=" md:w-[600px]  md:h-[360px] ">
              <Image
                src={serv2}
                alt="service1"
                className="md:w-full md:h-full"
              />
            </div>
          </div>
        </div>
        <div className=" my-12 items-center w-full flex flex-col justify-center mx-auto">
          <div className=" items-center w-full flex lg:flex-row flex-col gap-8 justify-between mx-auto">
            <div className=" md:w-[600px] md:h-[360px] ">
              <Image src={serv4} alt="service1" className="w-full h-full" />
            </div>
            <div className=" md:w-[600px] p-6 md:h-[360px] bg-[#F4B5D9] bg-opacity-50 ">
              <div className="my-2">
                <p className="font-montserrat  text-black text-3xl font-bold leading-7">
                  Lymphatic Massages
                </p>
              </div>
              <div className="  md:w-[540px] h-auto my-4 flex-shrink-0">
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
                <button className=" text-black text-sm    font-bold leading-6 uppercase   px-4 py-2     hover:bg-pink-300 mt-4 lg:mt-0 bg-[#F4B5D9] text-center font-montserrat  ">
                  Book Massages
                </button>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </>
  )
}

export default ConciegeServies