import React from 'react'
import Toggle from '../assets/classes/toggle.svg'
import Calendar from '../assets/classes/calendar.svg'
import Book from '../assets/classes/book.svg'
import ClipBoard from '../assets/classes/clipboard.svg'
import Lock from '../assets/classes/lock.svg'
import Pass from '../assets/classes/pass.svg'
import { CLASSES_SECTION, DISABLED_CONTENT, EXTRA_CONTENT } from '../constants/constant'


const Classes = () => {
    return (
        <>
            <div className='absolute top-0 left-0 right-0 w-full h-[300px] rounded-b-[50px] purple-gradient z-[1]'></div>
            <div className='z-[1]'>
                <nav className='flex justify-between'>
                    <div className='text-white flex gap-3 items-center'>
                        <img src={Toggle} alt="toggle" />
                        <span className='text-[20px]'>Classes</span>
                    </div>
                    <button className='bg-pink shadow-md text-white rounded-md px-6 py-2'>Demo</button>
                </nav>
                <div className='text-white flex gap-3 items-center pt-10'>
                    <img src={Calendar} alt="toggle" />
                    <span className='text-[22px] font-600'>Current Week Class</span>
                </div>
                <div className='w-[80%] pt-6 flex mx-auto items-center gap-4'>
                    <img src={Book} alt="book" />
                    <div className='flex flex-col text-white'>
                        <span className='text-[21px] font-[600] pb-1'>Standard Book</span>
                        <span> <span className='pr-1'>Expires in </span> <span className='px-2 bg-white py-1 text-black rounded-xl'>6 Days</span> </span>
                    </div>
                </div>
                <div className='flex justify-between pt-6'>
                    {CLASSES_SECTION.map((section, idx) => {
                        return (
                            <div key={idx} className='border-pink bg-white w-[160px] rounded-lg border-[1px] gap-2 p-2 flex flex-col justify-center items-center'>
                                <img src={section.icon} alt={section.title} className='w-[72px] aspect-square' />
                                <span>{section.title}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='bg-[#C56EFD33] rounded-lg text-center mt-4 py-2 text-[#4A189F]'>
                    Free trial will be expired in 6 Days
                </div>

                <div className='flex pt-6 items-center'>
                    <img src={ClipBoard} alt="clipboard" />
                    <span className='text-purple text-[22px] font-[600] ps-4'>Extra Content</span>
                </div>

                <div className='pt-6 flex flex-col gap-5 justify-center'>
                    {EXTRA_CONTENT.map((content , idx) => {
                        return (
                            <div className='relative'>
                                {(idx === EXTRA_CONTENT.length - 1) &&  <div className='absolute top-0 left-0 right-0 w-full h-full z-[999] flex items-center justify-end pr-4'>
                                    <img src={Lock} alt="lock" />
                                </div>}
                                <div className={`bg-white border-[1px] border-pink rounded-lg flex items-center overflow-hidden w-full ${idx === EXTRA_CONTENT.length - 1 ? 'opacity-30' : ''}`}>
                                    <img src={content.icon} alt={content.title} className='w-[100px] aspect-square ms-4' />
                                    <span className='px-4'>{content.title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-4 flex items-center justify-between flex-row bg-pass gap-2 bg-cover py-5 rounded-[16px] overflow-hidden">
                    <img src={Pass} alt="pass" className='w-[90px] aspect-square' />
                    <div className='w-full flex flex-col text-white gap-1'>
                        <span className='text-[19px] font-600 leading-[20px]'>Get 36 Weekly Classes Access!!</span>
                        <span className='text-[15px] font-500'>Smart mothers select for this plan.</span>
                        <button className='text-[#4A189F] w-[120px] p-1 bg-white rounded-xl text-[15px]'>Upgrade Now</button>
                    </div>
                </div>

                <div className='pt-4 flex flex-col gap-5 justify-center'>
                    {DISABLED_CONTENT.map((content, idx) => {
                        return (
                            <div className='relative' key={idx}>
                                <div className='absolute top-0 left-0 right-0 w-full h-full z-[999] flex items-center justify-end pr-4'>
                                    <img src={Lock} alt="lock" />
                                </div>
                                <div className='bg-white opacity-30 border-[1px] border-pink rounded-lg flex items-center overflow-hidden w-full z-0'>
                                    <img src={content.icon} alt={content.title} className='w-[100px] aspect-square ms-4' />
                                    <span className='px-4'>{content.title}</span>
                                </div >
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default Classes