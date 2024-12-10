import React, { useState } from 'react'
import { SECTION_2_CONTENT, SECTIONS } from '../constants/constant'
import { useNavigate } from 'react-router-dom'
import HeroImage from '../../src/assets/section2Images/heroImage.svg'
const Section2 = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState('')

    const handleSubmit = () => {
        navigate(`/other-info?title=${SECTIONS.section2}`);
    }

    return (
        <>
            <div className='pt-10'>
                <img src={HeroImage} alt="heroImg2" className='mix-blend-darken max-w-[400px] w-[60%] mx-auto aspect-square' />
                <h1 className='text-center text-purple'>Help Us to Know You Better!</h1>
                <div className='flex flex-wrap justify-between gap-4 pt-6 pb-2'>
                    {SECTION_2_CONTENT.map((content, idx) => {
                        return (
                            <div onClick={() => setActive(idx)} key={idx} className={`border-[1px] bg-white ${active == idx ? 'border-pink' : 'border-transparent'}  shadow-xl rounded-lg w-[160px] aspect-square text-center flex flex-col justify-center items-center`}>
                                <img src={content.icon} alt={content.title} className='mx-auto' />
                                <span className='px-4 pt-4 block'>{content.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={handleSubmit} className="mt-4 w-full bg-pink rounded-xl py-4 text-white text-[19px] font-500" onC>Continue</button>
        </>
    )
}

export default Section2