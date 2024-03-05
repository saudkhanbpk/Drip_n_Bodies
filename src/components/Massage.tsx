import React from 'react'
import Image from 'next/image'
import about1 from '../images/about1.png'
import Miami from '../images/Miami.png'
import fintness from '../images/fintness.png'
const Massage = () => {

    const services = [
        {
            imageSrc: fintness,
            serviceName: 'Suture Removal',
            price: 229,
            description: 'Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will sup',
            link: '#link1',
        },
        {
            imageSrc: fintness,
            serviceName: 'Drain Removal',
            price: 189,
            description: 'Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will sup',
            link: '#link2',
        },
        {
            imageSrc: fintness,
            serviceName: 'Seroma Aspiration',
            price: 199,
            description: 'Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will sup',
            link: '#link3',
        },
    ];
    const massagePackages = [
        {
            id: 1,
            title: 'Single Massage',
            price: '$130',
            buttonText: 'SCHEDULE',
            description: 'Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.',
            link: '#1',
            imageSrc: fintness,
        },
        {
            id: 2,
            title: '3 Massage Package',
            price: '$290',
            buttonText: 'SCHEDULE',
            description: 'Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.',
            link: '#2',
            imageSrc: fintness,
        },
        {
            id: 3,
            title: '5 Massage Package',
            price: '$450',
            buttonText: 'Book Massage',
            description: 'Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.',
            link: '#3',
            imageSrc: fintness,
        },
        {
            id: 4,
            title: '10 Massages Package',
            price: '$900',
            buttonText: 'Book Massage',
            description: 'Working hard in the gym? This drip helps you perform better, have more energy, and recover faster. These ingredients will support your fitness journey.',
            link: '#4',
            imageSrc: fintness,
        },
    ];

    return (
        <>
            <div className='w-full'>

                <div className="w-auto  md:flex justify-between px-10">
                    <div className="  flex flex-col gap-3 my-14 p-5 ">
                        <p className="md:text-6xl text-4xl font-bold">Let’s Get</p>
                        <p className="md:text-6xl text-4xl font-bold">Those Curves </p>
                        <p className="md:text-6xl text-4xl font-bold ">Snatched! </p>
                        <div className='md:flex items-center justify-start  md:gap-8 md:ps-3 pt-4 pb-4 mt-2'>
                            <button className='bg-[#3BAFBF] px-2 py-1 text-white font-bold'>View Massages</button>
                            <button  className=' text-[#3BAFBF] text-start text-base font-bold'>View Post-op Recovery Addons</button>
                        </div>
                    </div>
                    <div className="">
                        <Image src={about1} alt="Logo" className=" w-[606px] h-[580px]" />
                    </div>
                </div>
                <div className="w-full relative -top-16 ">
                    <div className=" py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
                        <div className="flex justify-center items-center w-auto h-[27px]">
                            <Image src={Miami} alt="real" />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mb-5'>
                    <div className='w-[55vw] flex flex-col space-y-2 items-center justify-center'>
                        <p className='text-xl font-bold'>Physical Exam And Lymphatic Massages</p>
                        <p className='text-base font-normal'>Each cocktail has essential fluids, electrolytes, vitamins and antioxidants, to quickly remedy a variety of conditions.</p>
                    </div>
                </div>
                <div className=' flex justify-center gap-4 flex-wrap'>

                    {massagePackages.map((data: any, index: any) => (
                        <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4'>
                            <Image src={data.imageSrc} alt='fitness' width={100} height={100} className='w-[270px] h-[142px] relative bottom-10' />
                            <p className='text-2xl font-bold'>{data.title}</p>
                            <p className='text-5xl font-normal text-[#3BAFBF] font-niconne '>{data.price}</p>
                            <button className='bg-[#3BAFBF] py-1 px-2 text-white'>{data.buttonText}</button>
                            <p>{data.description}</p>
                            <a href={data.link} className='underline text-[#3BAFBF]'>Click here to read more</a>
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-center items-center pb-5 pt-4 '>
                    <a href="" className='underline text-blue-400'>View Cosmetic Surgery Treatments</a>
                </div>
                <div className='w-full mb-10 flex flex-col pt-3'>
                    <p className='text-black text-center font-Montserrat text-24  font-bold leading-normal'>Post Cosmetic Surgery Treatments</p>
                    <p className='text-center'>Each cocktail has essential fluids, electrolytes, vitamins and antioxidants, to quickly remedy a variety of conditions.</p>
                </div>
                <div className='w-full flex justify-center gap-4 pt-5'>
                    {services.map((service, index) => (
                        <>
                            <div className='flex flex-col w-[280px] border border-[#3BAFBF] items-center justify-center space-y-2 p-4 '>
                                <Image src={service.imageSrc} alt={service.serviceName} className='w-[270px] h-[142px] relative bottom-10' />
                                <p className='text-2xl font-bold'>{service.serviceName}</p>
                                <p className='text-5xl font-normal text-[#3BAFBF] font-niconne '>${service.price}</p>
                                <button className='bg-[#3BAFBF] py-1 px-2 text-white'>SCHEDULE</button>
                                <p>{service.description}</p>
                                <a href={service.link} className='underline text-[#3BAFBF]'>Click here to read more</a>
                            </div>
                        </>
                    ))}
                </div>

                <div className='w-full flex justify-center mb-10 pt-5' >
                    <a href="" className='text-blue-400 underline'>View Lymphatic Massage</a>
                </div>
            </div>

        </>
    )
}

export default Massage
