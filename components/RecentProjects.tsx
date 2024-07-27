import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './UI/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading text-white'>A selction of {''} <span className='text-green-300'> My Projects</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link, }) =>
                (
                    <div className='text-white lg:min-h-[32.5rem]  flex items-center justify-center sm:h-[41rem] sm:w-[570px] w-[80vw] h-[32rem]' key={id}>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex  items-center justify-center sm:w-[560px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                                <div className='relative flex w-full h-full overflow-hidden lg:rounded-3xl bg-black-200'>
                                    <img src="/bg,png" alt="bg image" />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
 
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index)=>(
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center' style={{transform:`translateX(-${5*index*2}px)`}}>
                                            <img src={icon} alt={icon} className='p-2' />

                                        </div>
                                    ))}
                                    
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-green-300'>Check Live Site</p>
                                    <FaLocationArrow className='ms-3 ' color='#86EFAC'/>
                                </div>

                            </div>
                        </PinContainer>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default RecentProjects
