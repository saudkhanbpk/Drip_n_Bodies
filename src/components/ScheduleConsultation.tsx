import React from "react";

const ScheduleConsultation = () => {
  return (
    <>
      {/* <div className=" h-[450px] bg-[url('../images/Rectangle.png')]">
                <div className='flex justify-center py-auto'>
                    <div className='flex flex-col justify-center h-[450px]  items-center'>
                        <h1 className='text-white text-3xl mt-2 mb-4 '>Talk To Your Nurse Babe</h1>
                        <div className='border-2 border-blue-300 h-1 w-[300px] mx-auto'>

                        </div>
                        <hr />
                        <p className='pt-2 my-2  text-white'>Schedule A Free Consultation!</p>
                        <p className='pt-2  text-white text-sm'>Talk one on one with your Drip N Bodied nurse babe! </p>
                        <p className='pt-2  text-white text-sm'>We are ready and willing to answer questions related to surgery, nursing or business start ups.</p>
                        <button className='p-2 mt-12 text-white bg-[#3BAFBF]'>SCHEDULE A CONSULT CALL</button>
                    </div>
                </div>

            </div> */}
      <div className="h-[450px] bg-[url('../images/Rectangle.png')] backgrou">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className=" mt-2 mb-4 text-white text-center font-montserrat text-[24px] font-semibold leading-[27px]">
              Talk To Your Nurse Babe
            </p>
            <div className="border-[4px] border-[#3BAFBF]  w-[200px] md:w-[200px] mx-auto"></div>
            <p className="px-2 pt-2   text-white text-center font-montserrat text-base font-bold leading-[27px]">
              Schedule A Free Consultation!
            </p>
            <div className="text-center font-montserrat">
              <p className="px-2  text-sm md:text-base text-white text-center font-montserrat font-normal leading-[27px]">
                Talk one on one with your Drip N Bodied nurse babe!
              </p>
              <p className="px-2  text-sm md:text-base text-white text-center font-montserrat font-normal leading-[27px]">
                We are ready and willing to answer questions related to surgery,
                nursing, or business start-ups.
              </p>
            </div>
            <button className="px-6 p-2 font-bold text-[16px] mt-8 md:mt-8 text-white bg-[#3BAFBF]">
              SCHEDULE A CONSULT CALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleConsultation;
