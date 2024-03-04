// import React from 'react'
// import Image from 'next/image';
// import img1 from "../images/fintness.png";
// import img2 from "../images/infusionhero.png";
// import heroimg1 from "../images/heroimg1.png";
// import quote1 from "../images/quote1.svg";
// import quote2 from "../images/quote2.svg";
// import realmiami from "../images/realmiami.png";
// import thereal from "../images/TheReal.png";
// import realnurses from "../images/realnurses.svg";

// export default function IVInfusions() {
//     return (
//         <>
//         <div className="w-full flex justify-between ">
//         <div className="w-auto px-10  pt-16 ml-22">
//           <div className="  flex flex-col gap-8 ">
//             <p className="text-7xl font-bold">Come</p>
//             <p className="text-7xl font-bold">Experience</p>
//             <p className="text-7xl font-bold ">The <span className='text-pink-300'>Drip Effect</span></p>
//           </div>
//           <div className='flex items-center justify-center  space-x-8 pt-6'>
//                             <button className='bg-[#3BAFBF] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
//                             <a href="" className=' text-[#3BAFBF] text-base font-bold'>View Post-op Recovery Addons</a>
//                         </div>
          
          
//           <div className="my-8">
//             {/* <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black text-center ">“</span>
//             <p className="font-montserrat text-base font-normal w-[500px] h-[40px]">
//               Drip N Bodied absolutely amazing. Hands down one of the best
//               service I have ever received.
//             </p> */}
            
//           </div>
//         </div>
//         <div className="w-auto flex justify-end items-center">
//           <Image src={img2} alt="Logo" className=" w-[606px] h-[580px]" />
//         </div>
//       </div>
//       <div className="w-full relative -top-16 ">
//         <div className=" py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
//           <div className="flex justify-center items-center w-auto h-[27px]">
//             <Image src={thereal} alt="real" />
//           </div>
//         </div>
//       </div>
//             <div className='w-full flex justify-center items-center pt-6 '>
//                 <div className='w-[50vw] flex flex-col space-y-2 items-center justify-center'>
//                     <p className='text-2xl font-bold'>The Drip “3 Step” Process</p>
//                     <p className='text-base font-normal'>Drip N Bodied offers IV hydration therapy directly to YOU in the comfort of your home, hotel, or office. We offer personalized IV infusions and boosters that maximize your health and wellness by rehydrating, building immunity, and curing hang-overs. All treatments are administered by a RN.</p>
//                 </div>
//             </div>

//             <div className='flex justify-center items-center space-x-10 p-24'>
//                 <div className='w-[400px] flex flex-col items-center justify-center space-y-2 '>
//                     <p className='font-thin text-7xl font-montserrat'>1</p>
//                     <p className='text-base font-bold'>Choose a Formula</p>
//                     <p className='text-base font-normal'>Are you feeling under the weather, hungover, or dehydrated? Choose one of our specialty cocktails tailored to your body &apos; s needs!</p>
//                 </div>
//                 <div className='w-[400px] flex flex-col items-center justify-center space-y-2 '>
//                     <p className='font-thin text-7xl font-montserrat'>2</p>
//                     <p className='text-base font-bold'>Schedule Your Appointment</p>
//                     <p className='text-base font-normal'>Select a time and date that is convenient for you. We&apos;ll send our drip expert wherever you are!</p>
//                 </div>
//                 <div className='w-[400px] flex flex-col items-center justify-center space-y-2 '>
//                     <p className='font-thin text-7xl font-montserrat'>3</p>
//                     <p className='text-base font-bold'>Enjoy your drip!</p>
//                     <p className='text-base font-normal'>Each drip infusion takes about 45 - 60 minutes. Start feeling better in no time in the convenience of your home or office!</p>
//                 </div>
//             </div>


//             <div className='w-full flex flex-col justify-center items-center p-16 '>
//                 <div className='flex flex-col w-[50vw] items-center justify-center space-y-2 '>
//                     <p className='text-2xl font-bold'>Premium Infusions</p>
//                     <p className='text-base font-normal'>Each cocktail has essential fluids, electrolytes, vitamins and antioxidants, to quickly remedy a variety of conditions.</p>
//                 </div>

//                 <div className='pt-10 flex justify-center flex-wrap gap-10'>
//                     <div className='flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4 '>
//                         <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                         <p className='text-2xl font-bold'>Athletic Recovery</p>
//                         <p className='text-5xl font-normal text-[#3BAFBF] font-niconne '>$229</p>
//                         <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                         <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                         <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                     </div>
//                     <div className='flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                         <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                         <p className='text-2xl font-bold'>Baddie Drip</p>
//                         <p className='text-5xl font-normal text-[#3BAFBF] font-niconne '>$189</p>
//                         <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                         <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                         <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                     </div>
//                     <div className='flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                         <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                         <p className='text-2xl font-bold'>Miami Vice</p>
//                         <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$199</p>
//                         <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                         <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                         <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                     </div>
//                     <div className='flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                         <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                         <p className='text-2xl font-bold'>Sober Me</p>
//                         <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$229</p>
//                         <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                         <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                         <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                     </div>
//                     <div className='flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                         <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                         <p className='text-2xl font-bold'>High Dose Vitamin C</p>
//                         <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$189</p>
//                         <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                         <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                         <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                     </div>
//                     <div className='flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                         <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                         <p className='text-2xl font-bold'>Immuno-boost</p>
//                         <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$249</p>
//                         <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                         <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                         <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                     </div>
//                     <div className='flex flex-col w-[300px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                         <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                         <p className='text-2xl font-bold'>Snatched & Skinny</p>
//                         <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$199</p>
//                         <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                         <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                         <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                     </div>
//                 </div>

//                 <div className='flex items-center justify-center pt-16 space-x-8'>
//                     <button className='bg-[#F4B5D9] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
//                     <a href="" className='underline text-[#3BAFBF] text-base font-bold'>View Infusion Addons</a>
//                 </div>
//             </div>


//             <div className='pt-10'>
//                 <div className='w-full bg-[#F4B5D92B] flex flex-col items-center justify-center p-16 space-y-16 '>
//                     <div className='flex flex-col w-[50vw] items-center justify-center space-y-2 '>
//                         <p className='text-2xl font-bold'>Cosmetic Surgery Recovery Infusions</p>
//                         <p className='text-base font-normal'>Each cocktail has essential fluids, electrolytes, vitamins and antioxidants, to quickly remedy a variety of conditions.</p>
//                     </div>

//                     <div className=' flex justify-center flex-wrap gap-8 '>
//                         <div className='flex flex-col w-[300px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                             <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                             <p className='text-2xl font-bold'>Pre-Op Drip</p>
//                             <p className='text-5xl font-normal font-niconne text-[#3BAFBF]'>$149</p>
//                             <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                             <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                             <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                         </div>
//                         <div className='flex flex-col w-[300px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                             <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                             <p className='text-2xl font-bold'>Athletic Recovery</p>
//                             <p className='text-5xl font-normal font-niconne text-[#3BAFBF]'>$209</p>
//                             <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                             <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                             <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                         </div>
//                         <div className='flex flex-col w-[300px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                             <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                             <p className='text-2xl font-bold'>Iron Infusion</p>
//                             <p className='text-5xl font-normal font-niconne text-[#3BAFBF]'>$299</p>
//                             <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                             <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                             <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                         </div>
//                         <div className='flex flex-col'>

//                         <div className='flex flex-col w-[300px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
//                             <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
//                             <p className='text-2xl font-bold'>Hydration Me</p>
//                             <p className='text-5xl font-normal font-niconne text-[#3BAFBF] '>$129</p>
//                             <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
//                             <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
//                             <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
//                         </div>

//                         <div className='flex items-center justify-center  space-x-8'>
//                             <button className='bg-[#F4B5D9] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
//                             <a href="" className='underline text-[#3BAFBF] text-base font-bold'>View Post-op Recovery Addons</a>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             <div className='flex flex-col justify-center items-center p-28 space-y-8'>
//                 <div className='flex flex-col  items-center justify-center space-y-2 '>
//                     <p className='text-2xl font-bold'>Infusion Addons</p>
//                     <p className='text-base font-normal'>Can add these to a Premium Infusion or Post-Op Recovery Infusion</p>
//                 </div>


//                 <div className='w-full flex  border border-[#3BAFBF] p-8 gap-24  justify-center items-center'>
//                     <div className='flex flex-col'>
//                         <div className='flex justify-between  border-b p-2 '>
//                             <div className='flex flex-col  '>
//                                 <p className='text-2xl font-bold'>Biotin</p>
//                                 <p className='text-base font-normal'>Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$35</p>
//                             </div>

//                         </div>
//                         <div className='l flex justify-between   border-b p-2 '>
//                             <div className='flex flex-col  '>
//                                 <p className='text-2xl font-bold'>Pepcid</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
//                             </div>

//                         </div>
//                         <div className='l flex justify-between   border-b p-2 '>
//                             <div className='flex flex-col  '>
//                                 <p className='text-2xl font-bold'>Toradol</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
//                             </div>

//                         </div>
//                         <div className='l flex justify-between   border-b p-2 '>
//                             <div className='flex flex-col  '>
//                                 <p className='text-2xl font-bold'>Zofran</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$50</p>
//                             </div>

//                         </div>
//                         <div className='l flex justify-between   border-b p-2 '>
//                             <div className='flex flex-col w-[25vw]'>
//                                 <p className='text-2xl font-bold'>Extra Vitamin C</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
//                             </div>

//                         </div>
//                     </div>

//                     <div className='flex flex-col w-[35vw]'>
//                         <div className=' flex justify-between w-[35vw]  border-b p-2 '>
//                             <div className='flex flex-col w-[25vw] '>
//                                 <p className='text-2xl font-bold'>Glutathione</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
//                             </div>


//                         </div>
//                         <div className=' flex justify-between w-[35vw]  border-b p-2 '>
//                             <div className='flex flex-col w-[25vw] '>
//                                 <p className='text-2xl font-bold'>Extra B12</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$30</p>
//                             </div>


//                         </div>
//                         <div className=' flex justify-between w-[35vw]  border-b p-2 '>
//                             <div className='flex flex-col w-[25vw] '>
//                                 <p className='text-2xl font-bold'>Extra Fluid</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$50</p>
//                             </div>


//                         </div>
//                         <div className=' flex justify-between w-[35vw]  border-b p-2 '>
//                             <div className='flex flex-col w-[25vw] '>
//                                 <p className='text-2xl font-bold'>Semaglutide</p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>Enquire</p>
//                             </div>


//                         </div>
//                         <div className=' flex justify-between w-[35vw]  border-b p-2 '>
//                             <div className='flex flex-col w-[25vw] '>
//                                 <p className='text-2xl font-bold'>NAD+ </p>
//                                 <p >Help with this...</p>
//                             </div>

//                             <div>
//                                 <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>Enquire</p>
//                             </div>

//                         </div>
//                     </div>

//                 </div>


//                 <div className='flex items-center justify-center  space-x-8'>
//                     <button className='bg-[#F4B5D9] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
//                     <a href="" className='underline text-[#3BAFBF] text-base font-bold'>View Premium Infusions</a>
//                 </div>

//             </div>

//         </>
//     )
// }


import React from 'react'
import Image from 'next/image';
import img1 from "../images/fintness.png";
import img2 from "../images/infusionhero.png";
import heroimg1 from "../images/heroimg1.png";
import quote1 from "../images/quote1.svg";
import quote2 from "../images/quote2.svg";
import realmiami from "../images/realmiami.png";
import thereal from "../images/TheReal.png";
import realnurses from "../images/realnurses.svg";

export default function IVInfusions() {
    return (
        <>
        <div className="w-full flex justify-between ">
        <div className="w-auto px-10  pt-16 ml-22">
          <div className="  flex flex-col gap-8 ">
            <p className="text-7xl font-bold">Come</p>
            <p className="text-7xl font-bold">Experience</p>
            <p className="text-7xl font-bold ">The <span className='text-pink-300'>Drip Effect</span></p>
          </div>
          <div className='flex items-center justify-center  space-x-8 pt-6'>
                            <button className='bg-[#3BAFBF] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
                            <a href="" className=' text-[#3BAFBF] text-base font-bold'>View Post-op Recovery Addons</a>
                        </div>
          
          
          <div className="my-8">
            {/* <span className="font-niconn text-[50px] font-normal text-opacity-50 text-black text-center ">“</span>
            <p className="font-montserrat text-base font-normal w-[500px] h-[40px]">
              Drip N Bodied absolutely amazing. Hands down one of the best
              service I have ever received.
            </p> */}
            
          </div>
        </div>
        <div className="w-auto flex justify-end items-center">
          <Image src={img2} alt="Logo" className=" w-[606px] h-[580px]" />
        </div>
      </div>
      <div className="w-full relative -top-16 ">
        <div className=" py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
          <div className="flex justify-center items-center w-auto h-[27px]">
            <Image src={thereal} alt="real" />
          </div>
        </div>
      </div>
            <div className='w-full flex justify-center items-center '>
                <div className='w-[55vw] flex flex-col space-y-2 items-center justify-center'>
                    <p className='text-2xl font-bold'>The Drip “3 Step” Process</p>
                    <p className='text-base font-normal'>Drip N Bodied offers IV hydration therapy directly to YOU in the comfort of your home, hotel, or office. We offer personalized IV infusions and boosters that maximize your health and wellness by rehydrating, building immunity, and curing hang-overs. All treatments are administered by a RN.</p>
                </div>
            </div>

            <div className='flex justify-center items-center space-x-20 p-20'>
                <div className='w-[330px] flex flex-col items-center justify-center space-y-2 '>
                    <p className='font-thin text-7xl font-montserrat'>1</p>
                    <p className='text-base font-bold'>Choose a Formula</p>
                    <p className='text-base font-normal'>Are you feeling under the weather, hungover, or dehydrated? Choose one of our specialty cocktails tailored to your body&apos;s needs!</p>
                </div>
                <div className='w-[330px] flex flex-col items-center justify-center space-y-2 '>
                    <p className='font-thin text-7xl font-montserrat'>2</p>
                    <p className='text-base font-bold'>Schedule Your Appointment</p>
                    <p className='text-base font-normal'>Select a time and date that is convenient for you. We&apos;ll send our drip expert wherever you are!</p>
                </div>
                <div className='w-[330px] flex flex-col items-center justify-center space-y-2 '>
                    <p className='font-thin text-7xl font-montserrat'>3</p>
                    <p className='text-base font-bold'>Enjoy your drip!</p>
                    <p className='text-base font-normal'>Each drip infusion takes about 45 - 60 minutes. Start feeling better in no time in the convenience of your home or office!</p>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-center p-10 '>
                <div className='flex flex-col w-[50vw] items-center justify-center space-y-2 '>
                    <p className='text-2xl font-bold'>Premium Infusions</p>
                    <p className='text-base font-normal'>Each cocktail has essential fluids, electrolytes, vitamins and antioxidants, to quickly remedy a variety of conditions.</p>
                </div>

                <div className='pt-10 flex justify-center flex-wrap gap-x-6 gap-y-20'>
                    <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4 '>
                        <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                        <p className='text-2xl font-bold'>Athletic Recovery</p>
                        <p className='text-5xl font-normal text-[#3BAFBF] font-niconne '>$229</p>
                        <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                        <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                        <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                    </div>
                    <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                        <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                        <p className='text-2xl font-bold'>Baddie Drip</p>
                        <p className='text-5xl font-normal text-[#3BAFBF] font-niconne '>$189</p>
                        <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                        <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                        <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                    </div>
                    <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                        <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                        <p className='text-2xl font-bold'>Miami Vice</p>
                        <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$199</p>
                        <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                        <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                        <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                    </div>
                    <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                        <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                        <p className='text-2xl font-bold'>Sober Me</p>
                        <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$229</p>
                        <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                        <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                        <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                    </div>
                    <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                        <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                        <p className='text-2xl font-bold'>High Dose Vitamin C</p>
                        <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$189</p>
                        <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                        <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                        <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                    </div>
                    <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                        <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                        <p className='text-2xl font-bold'>Immuno-boost</p>
                        <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$249</p>
                        <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                        <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                        <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                    </div>
                    <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                        <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                        <p className='text-2xl font-bold'>Snatched & Skinny</p>
                        <p className='text-5xl font-normal text-[#3BAFBF] font-niconne'>$199</p>
                        <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                        <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                        <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                    </div>
                </div>

                <div className='flex items-center justify-center pt-10 space-x-8'>
                    <button className='bg-[#F4B5D9] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
                    <a href="" className='underline text-[#3BAFBF] text-base font-bold'>View Infusion Addons</a>
                </div>
            </div>


            <div className='pt-10'>
                <div className='w-full bg-[#F4B5D92B] flex flex-col items-center justify-center p-16 space-y-20 '>
                    <div className='flex flex-col w-[60vw] items-center justify-center space-y-2 '>
                        <p className='text-2xl font-bold'>Cosmetic Surgery Recovery Infusions</p>
                        <p className='text-base font-normal'>Each cocktail has essential fluids, electrolytes, vitamins and antioxidants, to quickly remedy a variety of conditions.</p>
                    </div>

                    <div className=' flex justify-center flex-wrap gap-6 '>
                        <div className='flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                            <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                            <p className='text-2xl font-bold'>Pre-Op Drip</p>
                            <p className='text-5xl font-normal font-niconne text-[#3BAFBF]'>$149</p>
                            <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                            <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                            <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                        </div>
                        <div className='flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                            <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                            <p className='text-2xl font-bold'>Athletic Recovery</p>
                            <p className='text-5xl font-normal font-niconne text-[#3BAFBF]'>$209</p>
                            <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                            <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                            <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                        </div>
                        <div className='flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                            <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                            <p className='text-2xl font-bold'>Iron Infusion</p>
                            <p className='text-5xl font-normal font-niconne text-[#3BAFBF]'>$299</p>
                            <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                            <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                            <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                        </div>
                        <div className='flex flex-col w-[280px] border bg-white border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                            <Image src={img1} alt='fitness' className='w-[270px] h-[142px] relative bottom-10' />
                            <p className='text-2xl font-bold'>Hydration Me</p>
                            <p className='text-5xl font-normal font-niconne text-[#3BAFBF] '>$129</p>
                            <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SHEDULE DRIP</button>
                            <p>Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will su</p>
                            <a href="" className='underline text-[#3BAFBF]'>Click here to read more</a>
                        </div>

                        <div className='flex items-center justify-center  space-x-8'>
                            <button className='bg-[#F4B5D9] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
                            <a href="" className='underline text-[#3BAFBF] text-base font-bold'>View Post-op Recovery Addons</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col justify-center items-center p-20 space-y-10'>
                <div className='flex flex-col  items-center justify-center space-y-2 '>
                    <p className='text-2xl font-bold'>Infusion Addons</p>
                    <p className='text-base font-normal'>Can add these to a Premium Infusion or Post-Op Recovery Infusion</p>
                </div>


                <div className='p-12 flex  border border-[#3BAFBF] justify-center gap-24  '>
                    <div className='flex flex-col'>
                        <div className='flex justify-between  border-b p-2 '>
                            <div className='flex flex-col  '>
                                <p className='text-2xl font-bold'>Biotin</p>
                                <p className='text-base font-normal'>Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$35</p>
                            </div>

                        </div>
                        <div className='l flex justify-between   border-b p-2 '>
                            <div className='flex flex-col  '>
                                <p className='text-2xl font-bold'>Pepcid</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
                            </div>

                        </div>
                        <div className='l flex justify-between   border-b p-2 '>
                            <div className='flex flex-col  '>
                                <p className='text-2xl font-bold'>Toradol</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
                            </div>

                        </div>
                        <div className='l flex justify-between   border-b p-2 '>
                            <div className='flex flex-col  '>
                                <p className='text-2xl font-bold'>Zofran</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$50</p>
                            </div>

                        </div>
                        <div className='l flex justify-between   border-b p-2 '>
                            <div className='flex flex-col w-[25vw]'>
                                <p className='text-2xl font-bold'>Extra Vitamin C</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col w-[35vw]'>
                        <div className=' flex justify-between w-[35vw]  border-b p-2 '>
                            <div className='flex flex-col w-[25vw] '>
                                <p className='text-2xl font-bold'>Glutathione</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$45</p>
                            </div>


                        </div>
                        <div className=' flex justify-between w-[35vw]  border-b p-2 '>
                            <div className='flex flex-col w-[25vw] '>
                                <p className='text-2xl font-bold'>Extra B12</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$30</p>
                            </div>


                        </div>
                        <div className=' flex justify-between w-[35vw]  border-b p-2 '>
                            <div className='flex flex-col w-[25vw] '>
                                <p className='text-2xl font-bold'>Extra Fluid</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>$50</p>
                            </div>


                        </div>
                        <div className=' flex justify-between w-[35vw]  border-b p-2 '>
                            <div className='flex flex-col w-[25vw] '>
                                <p className='text-2xl font-bold'>Semaglutide</p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>Enquire</p>
                            </div>


                        </div>
                        <div className=' flex justify-between w-[35vw]  border-b p-2 '>
                            <div className='flex flex-col w-[25vw] '>
                                <p className='text-2xl font-bold'>NAD+ </p>
                                <p >Help with this...</p>
                            </div>

                            <div>
                                <p className='text-4xl font-normal text-[#3BAFBF] font-niconne'>Enquire</p>
                            </div>

                        </div>
                    </div>

                </div>


                <div className='flex items-center justify-center  space-x-8'>
                    <button className='bg-[#F4B5D9] px-2 py-1 text-base font-bold'>VIEW POST-OP DRIPS</button>
                    <a href="" className='underline text-[#3BAFBF] text-base font-bold'>View Premium Infusions</a>
                </div>

            </div>

        </>
    )
}