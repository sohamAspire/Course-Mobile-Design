import React, { useState } from 'react'
import { MONTHS, SECTION_3_TOGGLE_OPTIONS, YEARS } from '../constants/constant'
import { useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import DateScroller from './DateScroller'
import HeroImage from '../../src/assets/section3Images/heroImage.svg'

const Section3 = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState('');

    const toggleOption = (value) => {
        setActive(value);
    };

    const handleSubmit = () => {
        navigate(`/classes`);
    }

    return (
        <>
            <div className='pt-10'>
                <img src={HeroImage} alt="heroImg2" className='mix-blend-darken max-w-[200px] w-[70%] mx-auto aspect-square' />
                <h1 className='text-center text-purple'>Help Us to Customize Your Course!</h1>
                <div className="flex items-center justify-center pt-6">
                    <div className="relative flex items-center bg-[#C56EFD1A]/20 p-2 rounded-md w-full h-[100px]">
                        <div className={`absolute top-0 left-0 scale-90 h-full shadow-lg w-1/2 bg-white border-[2px] border-pink rounded-md transform transition-transform duration-300 ${active == SECTION_3_TOGGLE_OPTIONS[0] ? "translate-x-0" : "translate-x-full"}`}></div>
                        {SECTION_3_TOGGLE_OPTIONS.map((option) => {
                            return (
                                <button onClick={() => toggleOption(option)} className={`z-10 flex-1 text-center px-6 py-2 rounded-full transition-colors duration-300 ${option === active ? "text-black" : "text-[#242424B2]/70"}`}>
                                    {option}
                                </button>)
                        })}
                    </div>
                </div>
                <p className='pt-6 text-[17px] w-[60%]'>Select the date of the first day of our last month here.</p>
                <div className='flex gap-4 pt-4'>
                    <div className='min-w-[100px]'> <Dropdown options={MONTHS} label={'Month'} overflow={true} medium={true} /></div>
                    <div className='min-w-[100px]'> <Dropdown options={YEARS} label={'Year'} overflow={true} medium={true} /></div>
                </div>
                <DateScroller />
            </div>
            <button onClick={handleSubmit} className="mt-4 w-full bg-pink rounded-xl py-4 text-white text-[19px] font-500" onC>Continue</button>
        </>
    )
}

export default Section3