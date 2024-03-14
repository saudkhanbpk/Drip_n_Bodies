import React from "react";
import Image from "next/image";
import massage11 from "../images/massage11.png";
import Miami from "../images/Miami.png";
import fintness from "../images/fintness.png";
import Link from "next/link";
const Massage = () => {
  const services = [
    {
      imageSrc: fintness,
      serviceName: "Suture Removal",
      price: 229,
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will sup",
      link: "#link1",
    },
    {
      imageSrc: fintness,
      serviceName: "Drain Removal",
      price: 189,
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will sup",
      link: "#link2",
    },
    {
      imageSrc: fintness,
      serviceName: "Seroma Aspiration",
      price: 199,
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will sup",
      link: "#link3",
    },
  ];
  const massagePackages = [
    {
      id: 1,
      title: "Single Massage",
      price: "$130",
      buttonText: "Book Massage",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.",
      link: "#1",
      imageSrc: fintness,
    },
    {
      id: 2,
      title: "3 Massage Package",
      price: "$290",
      buttonText: "Book Massage",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.",
      link: "#2",
      imageSrc: fintness,
    },
    {
      id: 3,
      title: "5 Massage Package",
      price: "$450",
      buttonText: "Book Massage",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.",
      link: "#3",
      imageSrc: fintness,
    },
    {
      id: 4,
      title: "10 Massages Package",
      price: "$900",
      buttonText: "Book Massage",
      description:
        "Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.",
      link: "#4",
      imageSrc: fintness,
    },
  ];

  return (
    <>
      <div className="w-full"  style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)' }}>
        <div className="">
          <div className="w-full flex flex-col md:flex-row justify-between mx-auto">
            {/* <div className="w-[65%] lg:w-auto md:px-2 lg:pl-8 m-3 md:m-5 lg:m-14 xl:pt-20 md:ml-8 xl:ml-16 "> */}
            <div className="w-[65%] px-10  pt-6 md:pt-16 ml-22">
              <div className="flex flex-col lg:leading-[100px]">
                <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">
                  Let’s Get{" "}
                </p>
                <p className="text-4xl lg:text-8xl font-bold font-montserrat ">Those Curves </p>
                <p className="text-4xl lg:text-8xl font-bold font-montserrat "> Snatched! </p>
              </div>
              <div className="my-6 md:my-5 lg:my-10 w-[95%] lg:w-[100%] xl:h-[43px] flex flex-col lg:flex-row">
                <button className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold xl:leading-6 uppercase lg:px-4 py-2  hover:bg-blue-300 my-1 lg:my-0 xl:mr-4 bg-[#3BAFBF] text-center font-montserrat">
                  View Massages
                </button>
                <p className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2  text-[#3BAFBF] text-center font-montserrat">
                  View Post-op Recovery Addons
                </p>
              </div>
            </div>
            <div className="lg:w-[35%] flex ">
              <Image
                src={massage11}
                alt="Logo"
                className="w-full md:w-[80vw] lg:w-[656px] lg:mix-blend-multiply object-cover "
              />
            </div>
          </div>
          {/* <div className="w-full relative md:-top-36 -top-12 ">
            <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
              <div className="flex justify-center items-center w-auto h-[27px]">
                <p className="text-blue-500 text-center font-niconne text-4xl lg:text-6xl font-normal">
                  Miami Lymphatic Massages, Post-Op Treatments
                </p>
              </div>
            </div>
          </div> */}

          <div className="py-12 md:w-full md:h-[141px] bg-cover bg-[url('../images/realmiami.png')] relative -top-20">
            <div className="flex justify-center  items-center w-auto h-[27px]">
              <p className="font-niconne text-6xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] " style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }} > Miami Lymphatic Massages, Post-Op Treatments</p>
            </div>

          </div>
        </div>


        <div className="w-full">
          <div className="my-6 w-[90%]  mx-auto p-4">
            <p className="py-2 leading-normal text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
              Physical Exam And Lymphatic Massages
            </p>
            <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
              Each cocktail has essential fluids, electrolytes, vitamins and
              antioxidants, to quickly remedy a variety of conditions.
            </p>
          </div>
        </div>

        <div className=" flex justify-center gap-4 flex-col md:flex-row ">
          {massagePackages.map((data: any, index: any) => (
            <div
              key={index}
              className="flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4"
            >
              <Image
                src={data.imageSrc}
                alt="fitness"
                width={100}
                height={100}
                className="w-[270px] h-[142px] relative bottom-10"
              />
              <p className="text-xl font-bold">{data.title}</p>
              <p className="text-5xl font-normal text-[#3BAFBF] font-niconne ">
                {data.price}
              </p>
              <button className="bg-[#3BAFBF] py-1 px-2 text-white">
                {data.buttonText}
              </button>
              <p>{data.description}</p>
              <a href={data.link} className="underline text-[#3BAFBF]">
                Click here to read more
              </a>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center pb-5 pt-4 ">
          <Link href="" className="underline text-blue-400">
            View Cosmetic Surgery Treatments
          </Link>
        </div>

        <div className="w-full">
          <div className="my-6 w-[90%]  mx-auto p-4 ">
            <p className="py-2 leading-normal  text text-black text-center font-montserrat font-bold text-xl lg:text-2xl">
              Post Cosmetic Surgery Treatments
            </p>
            <p className="w-full text-center font-montserrat text-black text-base font-normal leading-normal">
              Each cocktail has essential fluids, electrolytes, vitamins and
              antioxidants, to quickly remedy a variety of conditions.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center   flex-col md:flex-row gap-8 px-8 pt-5">
          {services.map((service, index) => (
            <>
              <div className="px-4 flex flex-col w-[280px] border border-[#3BAFBF] items-center  gap-3 p-4 ">
                <Image
                  src={service.imageSrc}
                  alt={service.serviceName}
                  className="w-[270px] h-[142px] relative bottom-10"
                />
                <p className="text-2xl font-bold">{service.serviceName}</p>
                <p className="text-5xl font-normal text-[#3BAFBF] font-niconne ">
                  ${service.price}
                </p>
                <button className="bg-[#3BAFBF] py-1 px-2 text-white">
                  SCHEDULE
                </button>
                <p className="text-center">{service.description}</p>
                <a href={service.link} className="underline text-[#3BAFBF]">
                  Click here to read more
                </a>
              </div>
            </>
          ))}
        </div>

        <div className="w-full flex justify-center my-8 pt-5">
          <a href="" className="text-blue-400 underline">
            View Lymphatic Massage
          </a>
        </div>
      </div>
    </>
  );
};

export default Massage;
