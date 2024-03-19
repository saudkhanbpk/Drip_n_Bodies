

import React from "react";
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


export default function IVInfusions() {
  return (
    <>
      <div className="">
        <div className="w-full flex flex-col md:flex-row justify-between ">
          {/* <div className=" lg:w-auto md:px-5 lg:pl-8 m-3 md:m-5 lg:m-10 xl:pt-20 md:ml-8 xl:ml-12 "> */}
          <div className="w-full md:w-[65%] px-10  pt-6 md:pt-16 ml-22">
            <div className="flex flex-col lg:leading-[100px]">
              <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat">Come</p>

              <p className="text-4xl lg:text-7xl xl:text-8xl font-bold font-montserrat ">Experience </p>
              <p className="text-4xl lg:text-7xl xl:text-8xl font-bold flex flex-row font-montserrat ">
                {" "}
                The <span className="text-pink-300 ml-4">Drip Effect</span>{" "}
              </p>
            </div>
            <div className="my-6 md:my-5 lg:my-10 w-[95%] lg:w-auto h-[43px] flex flex-col lg:flex-row">
              <a href="#section" className="w-full lg:w-auto text-white text-xs lg:text-sm xl:text-base font-bold lg:leading-6 uppercase lg:px-4 py-2  hover:bg-blue-300 my-1 lg:my-0 lg:mr-4 bg-[#3BAFBF] text-center font-montserrat">
                VIEW POST-OP DRIPS
              </a>
              {/* <a href="#section2" className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat">
                View Post-Op Treatments
              </a> */}
              <a href="#section2" className="w-full lg:w-auto text-xs lg:text-sm xl:text-base font-bold leading-6 uppercase px-4 py-2 rounded text-[#3BAFBF] text-center font-montserrat">
                View Premium Infusions
              </a>
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
            <h1 className="font-niconne text-3xl md:text-6xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] " style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }} >Miami IV Therapy and Post-Op Infusions</h1>
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
          <p className="py-5"
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
          >1</p>
          <p className="text-base font-bold">Choose a Formula</p>
          <p className="text-base font-normal text-center">
            Are you feeling under the weather, hungover, or dehydrated? Choose
            one of our specialty cocktails tailored to your body&apos;s needs!
          </p>
        </div>
        <div className="w-full md:w-[330px] flex flex-col items-center justify-center space-y-2 ">
        <p className="py-5"
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
          >2</p>
          <p className="text-base font-bold">Schedule Your Appointment</p>
          <p className="text-base font-normal text-center">
            Select a time and date that is convenient for you. We&apos;ll send
            our drip expert wherever you are!
          </p>
        </div>
        <div className="w-full md:w-[330px] flex flex-col items-center justify-center space-y-2 ">
        <p className="py-5"
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
          >3</p>
          <p className="text-base font-bold">Enjoy your drip!</p>
          <p className="text-base font-normal text-center">
            Each drip infusion takes about 45 - 60 minutes. Start feeling better
            in no time in the convenience of your home or office!
          </p>
        </div>
      </div>

      <div  id="section" className="w-full flex flex-col justify-center items-center p-10 ">
        <div className="flex flex-col w-[50vw] items-center justify-center space-y-2 ">
          <h2 className="text-2xl font-bold">Premium Infusions</h2>
          <p className="text-base font-normal text-center">
            Each cocktail has essential fluids, electrolytes, vitamins and
            antioxidants, to quickly remedy a variety of conditions.
          </p>
        </div>

        <div className="pt-10 flex justify-center flex-wrap gap-x-6 gap-y-20">
        <div className="flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center gap-4 p-4">
    <Image
        src={img1}
        alt="fitness"
        className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
    />
    <h2 className="text-2xl font-bold">Athletic Recovery</h2>
    <p className="text-5xl font-normal text-[#3BAFBF] font-niconne">
        $229
    </p>
    <button className="bg-[#3BAFBF] py-1 px-2 text-white">
        SCHEDULE DRIP
    </button>
    <p className="text-center">
        Working hard in the gym? This drip helps you perform better, have
        more energy, and recover faster. These ingredients will su
    </p>
    <a href="" className="underline text-[#3BAFBF]">
        Click here to read more
    </a>
</div>


          <div className="flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center gap-4 p-4">
            <Image
              src={img1}
              alt="fitness"
              className="w-[270px] h-[142px] relative bottom-10  image-with-shadow"
            />
            <h3 className="text-2xl font-bold">Baddie Drip</h3>
            <p className="text-5xl font-normal text-[#3BAFBF] font-niconne ">
              $189
            </p>
            <button className="bg-[#3BAFBF] py-1 px-2 text-white">
              SCHEDULE DRIP
            </button>
            <p className="text-center">
              Working hard in the gym? This drip helps you perform better, have
              more energy, and recover faster. These ingredients will su
            </p>
            <a href="" className="underline text-[#3BAFBF]">
              Click here to read more
            </a>
          </div>
          <div className="flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center gap-4 p-4">
            <Image
              src={img1}
              alt="fitness"
              className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
            />
            <h3 className="text-2xl font-bold">Miami Vice</h3>
            <p className="text-5xl font-normal text-[#3BAFBF] font-niconne">
              $199
            </p>
            <button className="bg-[#3BAFBF] py-1 px-2 text-white">
              SCHEDULE DRIP
            </button>
            <p className="text-center">
              Working hard in the gym? This drip helps you perform better, have
              more energy, and recover faster. These ingredients will su
            </p>
            <a href="" className="underline text-[#3BAFBF]">
              Click here to read more
            </a>
          </div>
          <div className="flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center gap-4 p-4">
            <Image
              src={img1}
              alt="fitness"
              className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
            />
            <h3 className="text-2xl font-bold">Sober Me</h3>
            <p className="text-5xl font-normal text-[#3BAFBF] font-niconne">
              $229
            </p>
            <button className="bg-[#3BAFBF] py-1 px-2 text-white">
              SCHEDULE DRIP
            </button>
            <p className="text-center">
              Working hard in the gym? This drip helps you perform better, have
              more energy, and recover faster. These ingredients will su
            </p>
            <a href="" className="underline text-[#3BAFBF]">
              Click here to read more
            </a>
          </div>
          <div className="flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center gap-4 p-4">
            <Image
              src={img1}
              alt="fitness"
              className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
            />
            <h3 className="text-2xl font-bold">High Dose Vitamin C</h3>
            <p className="text-5xl font-normal text-[#3BAFBF] font-niconne">
              $189
            </p>
            <button className="bg-[#3BAFBF] py-1 px-2 text-white">
              SCHEDULE DRIP
            </button>
            <p className="text-center">
              Working hard in the gym? This drip helps you perform better, have
              more energy, and recover faster. These ingredients will su
            </p>
            <a href="" className="underline text-[#3BAFBF]">
              Click here to read more
            </a>
          </div>
          <div className="flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center gap-4 p-4">
            <Image
              src={img1}
              alt="fitness"
              className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
            />
            <h3 className="text-2xl font-bold">Immuno-boost</h3>
            <p className="text-5xl font-normal text-[#3BAFBF] font-niconne">
              $249
            </p>
            <button className="bg-[#3BAFBF] py-1 px-2 text-white">
              SCHEDULE DRIP
            </button>
            <p className="text-center">
              Working hard in the gym? This drip helps you perform better, have
              more energy, and recover faster. These ingredients will su
            </p>
            <a href="" className="underline text-[#3BAFBF]">
              Click here to read more
            </a>
          </div>
          <div className="flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center gap-4 p-4">
            <Image
              src={img1}
              alt="fitness"
              className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
            />
            <h3 className="text-2xl font-bold">Snatched & Skinny</h3>
            <p className="text-5xl font-normal text-[#3BAFBF] font-niconne">
              $199
            </p>
            <button className="bg-[#3BAFBF] py-1 px-2 text-white">
              SCHEDULE DRIP
            </button>
            <p className="text-center">
              Working hard in the gym? This drip helps you perform better, have
              more energy, and recover faster. These ingredients will su
            </p>
            <a href="" className="underline text-[#3BAFBF]">
              Click here to read more
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center pt-10 space-x-8">
          <a  className="bg-[#F4B5D9] px-2 py-1 text-base font-bold">
            VIEW POST-OP DRIPS
          </a>
          <a href="" className="underline text-[#3BAFBF] text-base font-bold">
            View Infusion Addons
          </a>
        </div>
      </div>

      <div className="pt-10">
      <div id="section2" className=" w-full bg-gradient-to-b bg-[#F4B5D92B] from-#FFFFFF to-#FFFFFF bg-opacity-0 flex flex-col items-center justify-center p-16 space-y-20 ">
          <div className="flex flex-col w-[60vw] items-center justify-center space-y-2 ">
            <h2 className="text-2xl font-bold">
              Cosmetic Surgery Recovery Infusions
            </h2>
            <p className="text-base font-normal text-center">
              Each cocktail has essential fluids, electrolytes, vitamins and
              antioxidants, to quickly remedy a variety of conditions.
            </p>
          </div>

          <div className=" flex justify-center flex-wrap gap-6 ">
            <div className="flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center gap-4 p-4">
              <Image
                src={img1}
                alt="fitness"
                className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
              />
              <h3 className="text-2xl font-bold">Pre-Op Drip</h3>
              <p className="text-5xl font-normal font-niconne text-[#3BAFBF]">
                $149
              </p>
              <button className="bg-[#3BAFBF] py-1 px-2 text-white">
                SCHEDULE DRIP
              </button>
              <p>
                Working hard in the gym? This drip helps you perform better,
                have more energy, and recover faster. These ingredients will su
              </p>
              <a href="" className="underline text-[#3BAFBF]">
                Click here to read more
              </a>
            </div>
            <div className="flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center gap-4 p-4">
              <Image
                src={img1}
                alt="fitness"
                className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
              />
              <h3 className="text-2xl font-bold">Athletic Recovery</h3>
              <p className="text-5xl font-normal font-niconne text-[#3BAFBF]">
                $209
              </p>
              <button className="bg-[#3BAFBF] py-1 px-2 text-white">
                SCHEDULE DRIP
              </button>
              <p>
                Working hard in the gym? This drip helps you perform better,
                have more energy, and recover faster. These ingredients will su
              </p>
              <a href="" className="underline text-[#3BAFBF]">
                Click here to read more
              </a>
            </div>
            <div className="flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center gap-4 p-4">
              <Image
                src={img1}
                alt="fitness"
                className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
              />
              <h3 className="text-2xl font-bold">Iron Infusion</h3>
              <p className="text-5xl font-normal font-niconne text-[#3BAFBF]">
                $299
              </p>
              <button className="bg-[#3BAFBF] py-1 px-2 text-white">
                SCHEDULE DRIP
              </button>
              <p>
                Working hard in the gym? This drip helps you perform better,
                have more energy, and recover faster. These ingredients will su
              </p>
              <a href="" className="underline text-[#3BAFBF]">
                Click here to read more
              </a>
            </div>
            <div className="flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center gap-4 p-4">
              <Image
                src={img1}
                alt="fitness"
                className="w-[270px] h-[142px] relative bottom-10 image-with-shadow"
              />
              <h3 className="text-2xl font-bold">Hydration Me</h3>
              <p className="text-5xl font-normal font-niconne text-[#3BAFBF] ">
                $129
              </p>
              <button className="bg-[#3BAFBF] py-1 px-2 text-white">
                SCHEDULE DRIP
              </button>
              <p>
                Working hard in the gym? This drip helps you perform better,
                have more energy, and recover faster. These ingredients will su
              </p>
              <a href="" className="underline text-[#3BAFBF]">
                Click here to read more
              </a>
            </div>

            <div className="flex items-center justify-center  space-x-8">
              {/* <a href="#section" className="bg-[#F4B5D9] px-2 py-1 text-base font-bold">
                VIEW POST-OP DRIPS
              </a> */}
              <a href="#section" className="bg-[#F4B5D9] px-2 py-1 text-base font-bold">
              VIEW PREMIUM INFUSIONS

              </a>
              <a
                href=""
                className="underline text-[#3BAFBF] text-base font-bold"
              >
                View Post-op Recovery Addons
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4 md:p-20 space-y-10">
        <div className="flex flex-col  items-center justify-center md:space-y-2 ">
          <h2 className="text-2xl font-bold">Infusion Addons</h2>
          <p className="text-base font-normal">
            Can add these to a Premium Infusion or Post-Op Recovery Infusion
          </p>
        </div>

        <div className="w-full p-2 md:p-12 flex md:flex-row flex-col items-center border border-[#3BAFBF] justify-center gap-5 lg:gap-24  ">
          <div className="flex flex-col w-full p-2">
            <div className="flex justify-between  border-b p-2 ">
              <div className="flex flex-col  ">
                <h3 className="text-2xl font-bold">Biotin</h3>
                <p className="text-base font-normal italic">Help with this...</p>
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
          <button className="bg-[#F4B5D9] px-2 py-1 text-base font-bold">
            VIEW POST-OP DRIPS
          </button>
          <a href="" className="underline text-[#3BAFBF] text-base font-bold">
            View Premium Infusions
          </a>
        </div>
      </div>
    </>
  );
}
