import React from 'react'
import MagicButton from './UI/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10' id='contact'>
      

        <div className='flex flex-col items-center '>
            <h1 className='heading lg:max-w-[45vw] text-white'>Ready to build something<span className='text-green-300'>Great?</span></h1>
            <p className='md:mt-10 my-5 text-white-100'>Reach out to me and let&apos;s build it <span className='text-green-300'>together</span> </p>
            <a href="mailto:maazaf10@gmail.com">
                <MagicButton
                title="lets get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                />

            </a>

        </div>
        <div className='flex md:flex-row flex-col mt-16  justify-between items-center'>
            <p className='md:text-base text-white-100 text-sm md:font-normal font-light'>Copyright© 2024 maaz</p>
            <p className='text-sm text-white-100'>A huge thank you Adrian Hajdin for helping me build this website</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                   <a key={profile.id} href={profile.link} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                   <img src={profile.img} width={20} height={20} alt="social media icon"/>
                 </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer

