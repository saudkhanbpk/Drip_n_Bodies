// import React from 'react';
// import Image from "next/image";
// import Calendar from 'react-calendar';
// import CalendarHeaderPic from "../images/Calendar/CalendarHeaderPic.png";
// import MeetUpPic from "../images/Calendar/MeetupPic.png";
// import LocationPic from "../images/Calendar/LocationPic.png";
// import DripsCalendar from "../images/Calendar/Drip N Bodied Calendar.png";
// const CalendarPage = () => {
//     return (
//         <>
//             <div className="container">
//                 <div className='Header flex justify-between gap-x-12 items-center  '>
//                     <div className='title w-1/2 flex flex-col ps-20 gap-y-4'>
//                         <p className='capitalize  text-wrap lg:text-6xl md:text-5xl font-bold '>View Our<br />
//                             Calendar For<br />
//                             Your Big Day</p>
//                         <button className='bg-[#3BAFBF] w-36 font-bold text-xs text-nowrap text-white  py-1'>Book a Consultation</button>
//                     </div>
//                     <div className='image object-contain w-80 '>
//                         <Image src={CalendarHeaderPic} alt="logo" />
//                     </div>
//                 </div>
//                 <div className="py-8 flex justify-center  bg-cover bg-[url('../images/realmiami.png')]">
//                     <Image src={DripsCalendar} className="mix-blend-multiply  object-cover" alt='drips' />
//                 </div>
//                 <div className='Main py-12 '>
//                     <div className='heading flex flex-col justify-center items-center'>
//                         <h4 className='font-bold py-6'>
//                             Choose Your Booking Date
//                         </h4>
//                         <p className='text-xs py-3'>
//                             Use the calendar to book your date.
//                         </p>
//                     </div>
//                     <div className='MainContent flex justify-center items-center my-3 '>
//                         <div className='BookingAction w-60 h-96 flex flex-col bg-[#3BAFBF] gap-y-4 p-4'>
//                             <h6 className='text-[#FFFFFF]'>Friday November 12th</h6>
//                             <hr />
//                             <p className='text-xs/3 text-[#FFFFFF]'>Book a service by clicking one of the services below</p>
//                             <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Cosmetic Surgery Recovery</button>
//                             <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Lymphatic Massage (Med Spa)</button>
//                             <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Lymphatic Massage (Mobile)</button>
//                             <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>IV Hydration (Med Spa)</button>
//                             <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>IV Hydration (Mobile)</button>
//                             <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Consultation / Pre-Op Call</button>
//                             <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Drain & Suture Management</button>
//                         </div>
//                         <div className='Calendar flex items-center h-96 w-72 px-3 bg-[#FDF3F9]'>
//                             <Calendar />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='Meetus my-3'>
//                     <div className='MeetusHeading flex flex-col items-center my-4'>
//                         <h6 className='font-bold'>Meet Us At the Bar</h6>
//                         <p className='text-xs py-2'>We also service those in the miami area</p>
//                     </div>
//                     <div className='MeetupContent flex justify-center items-center gap-x-6'>
//                         <div className='MeetupDetails  flex flex-col items-centen gap-y-5'>
//                             <div className='ContactDetails'>
//                                 <div className='border-b border-b-slate-300 flex justify-around pb-4'>
//                                     <div className='flex flex-col'>
//                                         <span className='font-bold text-sm text-center'>Monday - Saturday</span>
//                                         <p className='text-center text-sm'>8:00 AM - 7:00 PM</p>
//                                         <div className='flex pt-3 '>
//                                             <div className='flex flex-col'>
//                                                 <span className='text-3xl mx-auto'>✉</span>
//                                                 <p className='text-wrap text-sm'>booking@dripnbodied.com</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='font-bold text-sm text-center'>After Hours:</span>
//                                         <p className='text-center text-sm'>By request only</p>
//                                         <div className='flex pt-3 '>
//                                             <div className='flex flex-col'>
//                                                 <span className='text-center text-2xl '>☎</span>
//                                                 <p className='text-wrap text-sm'>(305) 908-9282</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='LocationHeading flex justify-center font-bold text-wrap '>
//                                 <h6>1001 Ponce de Leon, Suite A Coral Gables, Florida
//                                 </h6>
//                             </div>
//                             <div className='LocationPic object-contain w-80'>
//                                 <Image src={LocationPic} alt='Location' />
//                             </div>
//                         </div>
//                         <div className='MeetupPic object-contain w-80'>
//                             <Image src={MeetUpPic} alt='Logo' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };
// export default CalendarPage;


import React from 'react';
import Image from "next/image";
import Calendar from 'react-calendar';
import CalendarHeaderPic from "../images/Calendar/calendarHeaderPic.png";
import MeetUpPic from "../images/Calendar/MeetupPic.png";
import LocationPic from "../images/Calendar/LocationPic.png";
import DripsCalendar from "../images/Calendar/Drip N Bodied Calendar.png";
const CalendarPage = () => {
    return (
        <>
            <div className="">
                <div className='Header flex justify-between gap-x-12 items-center  '>
                    <div className='title w-1/2 flex flex-col ps-20 gap-y-4'>
                        <p className='capitalize  text-wrap lg:text-6xl md:text-5xl font-bold '>View Our<br />
                            Calendar For<br />
                            Your Big Day</p>
                        <button className='bg-[#3BAFBF] w-36 font-bold text-xs text-nowrap text-white  py-1'>Book a Consultation</button>
                    </div>
                    <div className='image object-contain w-80 '>
                        <Image src={CalendarHeaderPic} alt="logo" />
                    </div>
                </div>
                <div className="py-8 flex justify-center  bg-cover bg-[url('../images/realmiami.png')]">
                    <Image src={DripsCalendar} className="mix-blend-multiply  object-cover" alt='drips' />
                </div>
                <div className='Main py-12 '>
                    <div className='heading flex flex-col justify-center items-center'>
                        <h4 className='font-bold py-6'>
                            Choose Your Booking Date
                        </h4>
                        <p className='text-xs py-3'>
                            Use the calendar to book your date.
                        </p>
                    </div>
                    <div className='MainContent flex justify-center items-center my-3 '>
                        <div className='BookingAction w-60 h-96 flex flex-col bg-[#3BAFBF] gap-y-4 p-4'>
                            <h6 className='text-[#FFFFFF]'>Friday November 12th</h6>
                            <hr />
                            <p className='text-xs/3 text-[#FFFFFF]'>Book a service by clicking one of the services below</p>
                            <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Cosmetic Surgery Recovery</button>
                            <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Lymphatic Massage (Med Spa)</button>
                            <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Lymphatic Massage (Mobile)</button>
                            <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>IV Hydration (Med Spa)</button>
                            <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>IV Hydration (Mobile)</button>
                            <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Consultation / Pre-Op Call</button>
                            <button className='bg-[#FFFFFF] text-[#3BAFBF] text-xs/3 p-1 text-nowrap'>Drain & Suture Management</button>
                        </div>
                        <div className='Calendar flex items-center h-96 w-72 px-3 bg-[#FDF3F9]'>
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div className='Meetus my-3'>
                    <div className='MeetusHeading flex flex-col items-center my-4'>
                        <h6 className='font-bold'>Meet Us At the Bar</h6>
                        <p className='text-xs py-2'>We also service those in the miami area</p>
                    </div>
                    <div className='MeetupContent flex justify-center items-center gap-x-6'>
                        <div className='MeetupDetails  flex flex-col items-centen gap-y-5'>
                            <div className='ContactDetails'>
                                <div className='border-b border-b-slate-300 flex justify-around pb-4'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-sm text-center'>Monday - Saturday</span>
                                        <p className='text-center text-sm'>8:00 AM - 7:00 PM</p>
                                        <div className='flex pt-3 '>
                                            <div className='flex flex-col'>
                                                <span className='text-3xl mx-auto'>✉</span>
                                                <p className='text-wrap text-sm'>booking@dripnbodied.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-sm text-center'>After Hours:</span>
                                        <p className='text-center text-sm'>By request only</p>
                                        <div className='flex pt-3 '>
                                            <div className='flex flex-col'>
                                                <span className='text-center text-2xl '>☎</span>
                                                <p className='text-wrap text-sm'>(305) 908-9282</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='LocationHeading flex justify-center font-bold text-wrap '>
                                <h6>1001 Ponce de Leon, Suite A Coral Gables, Florida
                                </h6>
                            </div>
                            <div className='LocationPic object-contain w-80'>
                                <Image src={LocationPic} alt='Location' />
                            </div>
                        </div>
                        <div className='MeetupPic object-contain w-80'>
                            <Image src={MeetUpPic} alt='Logo' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default CalendarPage;