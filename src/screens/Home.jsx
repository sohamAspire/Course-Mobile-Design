import React from 'react'
import Dropdown from '../components/Dropdown'
import { useNavigate } from 'react-router-dom'
import { CITIES } from '../constants/constant';
import HeroImage from '../../src/assets/heroImage.svg'


const Home = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/other-info?title=help-us-to-know-you-better');
    }
    return (
        <>
            <div className='pt-10'>
                <img src={HeroImage} alt="heroImg" className='mix-blend-darken max-[400px] w-[60%] mx-auto aspect-square' />
                <h1 className='w-full text-center text-purple'>Your Basic Information</h1>
                <div className='flex flex-col gap-5 pt-10'>
                    <input type="text" className='rounded-lg h-[64px] ps-4' placeholder='Enter your name' />
                    <Dropdown options={CITIES} label={'Select City'} />
                    <p className='text-right pt-2'>Have a referral code? <span className='text-purple'>Click here</span></p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <label className="flex items-start">
                    <input type="checkbox" className="appearance-none w-8 aspect-square rounded-md mr-2 mt-[2px] border-2 border-black/20 checked:bg-white checked:border-black/20 checked:icon-black flex items-center justify-center" />
                    <p>
                        I agree to Dream Child Life Science LLP Terms & Conditions and Privacy Policy
                    </p>
                </label>
                <button onClick={handleSubmit} className="mt-4 w-full bg-pink rounded-xl py-4 text-white text-[19px] font-500" onC>Continue</button>
            </div>
        </>
    )
}

export default Home


