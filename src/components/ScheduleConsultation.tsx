import React from 'react'

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
            <div className="h-[450px] bg-[url('../images/Rectangle.png')] bg-cover">
  <div className='flex justify-center items-center h-full'>
    <div className='flex flex-col justify-center items-center space-y-3'>
      <h1 className='text-white text-2xl md:text-3xl lg:text-4xl mt-2 mb-4 text-center font-montserrat font-semibold'>Talk To Your Nurse Babe</h1>
      <div className='border-2 border-[#3BAFBF] h-1 w-[200px] md:w-[300px] mx-auto'></div>
      <hr />
      <p className='px-2 pt-2 my-2 text-white text-sm md:text-base text-center font-montserrat font-bold leading-7 '>Schedule A Free Consultation!</p>
      <div className='text-center leading-none'>
      <p className='px-2 pt-2 text-white text-sm md:text-base font-montserrat font-normal'>Talk one on one with your Drip N Bodied nurse babe!</p>
      <p className='px-2 pt-2  text-white text-sm md:text-base text-center font-montserrat font-normal'>We are ready and willing to answer questions related to surgery, nursing, or business start-ups.</p>
      </div>
      <div>
      <button className='p-2 mt-8 md:mt-10 text-white bg-[#3BAFBF] font-montserrat font-bold px-10 py-3'>SCHEDULE A CONSULT CALL</button>
    </div>
    </div>
  </div>
</div>

        </>
    )
}

export default ScheduleConsultation