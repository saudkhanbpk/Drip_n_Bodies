import React from 'react'
import Image from 'next/image'
import heroimg from '../images/heroimg.png'
import liscence from '../images/liscence.png'
import afterpay from '../images/afterpay.png'
import Link from 'next/link'

const ResourceHub = () => {
    
    return (
        <>
            <div className="w-full" style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)' }}>
                <div className='md:flex flex-col md:flex-row justify-between items-center md:items-start relative'>

                    <div className=" px-12  pt-6 md:pt-16 ml-16">
                        <div className="md:flex flex-col lg:leading-[100px]">
                            <p className="text-5xl md:text-7xl xl:text-8xl font-bold font-montserrat">Your</p>
                            <p className="text-5xl md:text-7xl xl:text-8xl font-bold font-montserrat">Booking </p>
                            <p className="text-5xl md:text-7xl xl:text-8xl text-[#3BAFBF] font-bold font-montserrat ">Resource Hub
                            </p>
                        </div>
                        <div className='md:flex justify-center items-center gap-6 md:justify-start mt-4 mr-6 md:mt-8 mb-10'>
                            <button className='bg-[#3BAFBF] px-6 py-2 ms-2 text-sm md:text-base font-bold text-white'>Book a Consult</button>
                            <p className='font-montserrat text-base font-bold leading-27 text-center text-[#3BAFBF]'>View Our Packages</p>
                        </div>
                    </div>

                    <div className="w-full md:w-[34%] mt-4 md:mt-0 md:ml-4 lg:ml-8 relative">
                        <Image src={heroimg} alt="Logo" className="w-full md:w-[506px] lg:w-[606px] h-[480px] lg:h-[640px] mix-blend-multiply object-cover  " />
                    </div>
                    <div className="py-12 md:w-full md:h-[141px] bg-cover bg-[url('../images/realmiami.png')] absolute md:-bottom-0 ">
                        <div className="flex justify-center  items-center w-auto h-[27px]">
                            <h1 className="font-niconne md:text-6xl text-3xl font-normal leading-7 tracking-normal text-center text-[#3BAFBF] " style={{ textShadow: "1px 1px 1px white,2px 2px 2px white" }} > Cosmetic Surgery Recovery Resource Hub</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto text-white text-center font-montserrat text-lg font-italic text-[32px] bg-black mb-10 p-10 '>
                <p>Hey Bodied Babe...</p>
                <p> <span className='md:inline-block  h-[20px] text-[#F4B5D9] text-center font-montserrat md:text-7xl text-2xl italic font-normal leading-tight'>“</span>  Thank you for selecting us to be part of your post- <span className='md:inline-block  h-[20px] text-[#F4B5D9] text-center font-montserrat md:text-7xl text-2xl italic font-normal leading-tight'>”</span> <br /> operative recovery experience! We look forward to  <br /> getting you snatched and recovered! Feel free to reach <br /> out and schedule a complimentary consultation call if <br /> you have any questions about our services or just shoot <br /> us a text at 305-908-9282!</p>
            </div>
            <div className=''>
                <h2  className=' text-black text-center font-montserrat text-[24px] font-bold leading-normal'>Frequently Asked Questions</h2>
            </div>
            <div className=' w-[80%] mx-auto lg:flex justify-center p-2 lg:p-10 gap-6 '>

                <div className='lg:w-1/2 mb-10'>
                    <div className='lg:px-8 p-2'>

                        <p className="text-[#3BAFBF] font-montserrat text-base font-bold leading-6 ">OMG! 😱 I don&apos;t see my surgery date available online! Are you guys booked?</p>
                        <p className="text-black font-montserrat text-base font-normal leading-6 pt-4">If your surgery date is unavailable on the calendar, please text us to confirm</p>
                        <p className="text-[#3BAFBF] font-montserrat text-base font-bold leading-6 pt-3">What area do you service?</p>
                        <p>Our central location for services is any residency within 10 miles of the Miami International Airport. If your lodging is beyond this 10-mile limit from the airport, regrettably, your services will be canceled. Please note that we do not provide services to locations including Miami Beach, Cutler Bay, or the vicinity of the Miami</p>
                        <p className="text-[#3BAFBF] font-montserrat text-base font-bold leading-5.75 pt-4 pb-2">I&apos;m traveling alone! Can I book your services?</p>
                        <p className="text-black font-montserrat text-base font-normal leading-5.75">We HIGHLY recommend bringing a companion! If you are planning to travel alone you must get prior approval AND pay for additional CNA care ($300) during the day post-op day 1.</p>
                    </div>
                </div>
                <div className='border-r-2 border-[#3BAFBF] h-[300px]  hidden lg:flex my-auto'></div>
                <div className='lg:w-1/2 mb-10'>
                    <div className='lg:px-8 p-2'>

                        <p className="text-[#3BAFBF] lg:text-end text-start font-montserrat text-base font-bold leading-6 pb-2">What time should I book? I don&apos;t know
                            <p className='lg:text-end text-start '>my surgery time yet!</p> </p>
                        <p className="text-black text-start lg:text-end font-montserrat text-base font-normal leading-6">Please book all packages for your ACTUAL surgery date. When booking a post-op recovery package, please select any me available on the calendar. We will service you according to your scheduled surgery time assigned by your surgery center.</p>
                        <p className="text-[#3BAFBF] lg:text-right text-start font-montserrat  font-bold leading-6 pt-4 md:pt-4">Do you offer transportation?</p>
                        {/* <p className='text-start lg:text-left ps-10'>Each recovery package comes with complimentary transportation from the surgical center to your
                            accommodation. Transportation to surgery and to post-op appointments can be arranged for an additional cost.</p> */}
                        <div className='lg:ms-8  '>
                            <p className='text-start lg:text-left'>Each recovery package comes with complimentar</p>
                            <p className='lg:ps-8 text-start lg:text-left'>transportation from the surgical center to your</p>
                            <p>accommodation. Transportation to surgery and to </p>
                            <p className='lg:ps-6 text-start lg:text-left'> post-op appointments can be arranged for an </p>
                            <p className='lg:text-end text-start'>additional cost.</p>
                        </div>
                        <p className="text-[#3BAFBF] lg:text-right text-start  font-montserrat text-base font-bold pt-4 pb-1 leading-5.75 uppercase">Let’s Chat!</p>
                        <p className=" lg:text-right text-start font-montserrat text-base font-bold leading-5.75 uppercase">305-908-9282</p>
                        <p className="lg:text-right text-start  font-montserrat text-base font-bold leading-5.75 lowercase">booking@dripnbodied.com</p>
                    </div>
                </div>

            </div>
            <div className='text-center mb-5'>
                <Link href="/faq#section2" className='text-[#3BAFBF] font-[400px]'>See all frequently asked questions</Link>
            </div>
            <div className='w-[80%] mx-auto bg-black gap-6 mb-10'>
                <div className='w-[80%] mx-auto md:flex justify-center  '>
                    <div className='md:w-1/2 mb-10 text-center p-2 md:p-10 '>
                        <h2 className="text-white text-center font-montserrat text-3xl font-bold leading-normal">Deposits</h2>
                        <h3 className="text-[#3BAFBF] font-montserrat text-base text-[24px] font-bold leading-6 pt-4">ALL DEPOSITS ARE NON-REFUNDABLE</h3>
                        <p className='text-white'>A deposit can be transferred one time for free to a different date. The second transfer will incur a $75 transfer fee.</p>
                        <h3 className='text-[#3BAFBF] font-bold pt-6'>Post-op Recovery Package</h3>
                        <p className='text-white'> A $250 deposit is required to book any post-op recovery/Bodied Babe package. The remaining balance will be 7 days before surgery</p>
                        <h3 className='font-bold text-[#3BAFBF] pt-6'>Surgery Sister Post-Op Recovery Package</h3>
                        <p className='text-white'>A $500 deposit is required for surgery sister packages. </p>
                        <h3 className='text-[#3BAFBF] font-bold pt-6'>IV Therapy</h3>
                        <p className='text-white'> A $50 deposit is required to book IV hydration services. The full and remaining balance will be due at the time of service.</p>
                    </div>
                    <div className='border-r-2 border-[#3BAFBF] h-[250px] hidden md:flex my-auto'></div>
                    <div className='md:w-1/2 mb-[174px] text-center p-2 md:p-10 '>
                        <p className="text-white text-center font-montserrat text-3xl font-bold leading-normal ">Uploads</p>
                        <p className="text-white text-center  font-montserrat pt-4 text-base font-normal leading-5.75">PHOTO ID submission is required to book all services. Identification provided must match card used to book or deposit fee will be forfeited and appointment canceled</p>
                        <Image src={liscence} alt="liscence" className='pt-10' />

                    </div>
                </div>

            </div>
            <div className='w-[80%] mx-auto  '>
                <h2 className="text-black text-center font-montserrat text-3xl font-bold leading-normal mb-4">Payment Methods</h2>
                <p className='mb-8 text-center'>Payments can be made using Visa, MasterCard, Discover or American Express. Now accepting AfterPay. <br />Cash payments are not accepted.</p>
                <h2 className='font-bold text-center mb-5'>The remaining balance is due one week prior to the start of services. Failure to fulfill payment will result in <br />cancellation.
                </h2>
                <p className='mb-10 text-center'> In order to utilize AfterPay, clients must schedule their appointment by paying a deposit using a credit or debit card. The remaining balance will be conveniently settled through an invoice that offers AfterPay as a payment option during checkout. Invoices are sent after the mandatory pre-op call.</p>
                <div className=' mb-10 flex justify-center  w-140 h-58.71 '>
                    <Image src={afterpay} alt="afterpay" />
                </div>

            </div>
            <div className='border-b border-b-black/10 w-[80%] mx-auto '> <div className='border border-[#3BAFBF] w-[40%] ms-auto'>  </div> </div>
            <div className='w-[80%] mx-auto text-center mb-10 mt-10 p-5'>
                <h2 className="text-black text-center font-montserrat text-3xl font-bold leading-normal mb-10">Cancellation Policy</h2>
                <p >If your full payment for the package is settled and you decide to cancel more than 7 days prior to your scheduled service date, you will receive a refund of the entire amount paid, excluding the non-refundable deposit.</p>
                <p className='pt-5'> However, if you&apos;ve paid in full and choose to cancel 7 days or less before your scheduled service date, a partial refund will be issued. Your refund will be reduced by the non-refundable deposit, and an additional $100 fee for each night a CNA was assigned to your package will also be deducted from the balance.</p>
            </div>
            <div className='w-[80%] mx-auto  p-5  text-center'>
                <h2 className="text-black text-center font-montserrat text-3xl  font-bold leading-normal  pb-5 ">IV Drips</h2>
                <p className='text-[#3BAFBF] font-bold'>Post-Op Drip: Schedule your appointment on your surgery day.</p>
                <p>Please be aware that the designated time slot for your drip is merely a placeholder. Kindly send us a text with your surgery time on pre-op day to provide us with a rough estimate of when your surgery will conclude. Additionally, have your companion to notify us once your surgery is finished so that we can arrange for your infusion. (305) 908-9282 </p>
                <div className='py-5'>
                    <Link href="/ivinfusion" className='text-[#3BAFBF] underline '>Book an IV Drip</Link>
                </div>
            </div>
            <div className='md:w-[80%] mx-auto'>
                <h2 className="text-black text-center font-montserrat font-bold text-3xl">Lodging Requirements</h2>
            </div>
            <div className='md:w-[80%] mx-auto md:flex  justify-center '>
                <div className='md:w-[80%] mx-auto mb-10 p-5 '>
                    <h3 className="text-[#3BAFBF] text-center font-montserrat font-bold text-base pb-4">Distance</h3>
                    <p >Please make sure it is within 10 miles of the Miami International Airport. This is a requirement in order to get complimentary (no charge) post-op transportation services, your lodging must be within 10 miles of your surgery center.</p>
                    <p className='pt-5'>You can always text us pictures of your choice of lodging for approval if you have any concerns.</p>
                </div>
                <div className='border-r-2 border-r-[#3BAFBF] hidden md:block h-[150px] my-auto'></div>
                <div className='md:w-[80%] mx-auto mb-10 p-5 '>
                    <h3 className="text-[#3BAFBF] text-center font-montserrat font-bold text-base pb-4">Room Type</h3>
                    <p className='pl-3'>We would like to emphasize that booking a studio-type room is not acceptable for our overnight CNA services.</p>
                    <p className='py-5 pl-3'>Please be advised that only a suite with a l-bedroom setup, including a separate living room, will meet our requirements.</p>
                    <p className='pl-3'>Any reservation for a studio-type room will result in the cancellation of overnight CNA services. Your attention to this matter is appreciated.</p>
                </div>
            </div>
            <div className='md:w-[80%] mx-auto mb-10 text-xl md:text-3xl font-bold font-montserrat'>
                <h2 className='text-center'>Lodging Recommendations</h2>
            </div>
            <div className='w-[80%] mx-auto mb-10 text-center'>
                <p>We HIGHLY recommend Provident Grand Luxury Short Term Residences Doral, Provident Doral at the Blue, Marriott Villas Doral, Homewood Suites Miami, Staybridge Doral, or Staybridge Miami International Airport as a choice of lodging. These places are very surgery-friendly and have suites that are spacious.
                </p>
                <p className='pt-5'>Provident Grand Luxury: Located in downtown Doral, this lodging is about a 15-20 mins drive to all the major surgery centers. This location has a luxury Airbnb condo feel with hotel amenities. This can be booked directly through the building&apos;s website or third-party sites. They have spacious and modern one and two-bedroom options, Staybridge Doral: This lodging is close to all the major surgery centers. They have one-bedroom or two-bedroom suites available. Do not book a studio room.</p>
                <p className='pt-5 '>Feel free to text us pictures of your choice of lodging for approval if you have any concerns.</p>
                <p className='pt-5'>Also please note that booking a STUDIO type room is not acceptable and will result in the cancellation of overnight
                    CNA services.</p>
            </div>
            {/* <div className='border-b border-b-black/10 w-[80%] mx-auto '> <div className='border border-[#3BAFBF] w-[40%] ms-auto'>  </div> </div> */}
            <div className='w-[80%] mx-auto'>

                <div className=' border-b-4 border-b-[#3BAFBF] w-[40%]'> </div><div className=' border-b-2 border-b-[#000000]/20% w-full'></div>
            </div>
            <div className='md:w-[80%] my-2 md:my-0 mx-auto '>
                <h2 className="text-black text-center font-montserrat font-bold text-3xl pt-10 ">Pre-Op Call</h2>
            </div>
            <div className='w-[80%] mx-auto text-center mb-10 pt-5 pb-2'>
                <p className='pb-1'>Once you&apos;ve booked your post-operative recovery package, utilize the link in your confirmation email to schedule a pre-operative call. Make sure to schedule this call within 30 days of your surgery date. The call will involve a review of your medical background and more!</p>
            </div>

        </>
    )
}

export default ResourceHub
