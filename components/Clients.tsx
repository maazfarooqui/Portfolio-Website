import React from 'react'
import { InfiniteMovingCards } from './UI/InfiniteMovingCards'
import { testimonials } from '@/data'
import { companies } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading text-white'>Words from My{''} <span className='text-green-300'> Clients</span>
            </h1>

            <div className='flex flex-col items-center max-lg:mt-10'>

                <InfiniteMovingCards

                    items={testimonials}
                    direction='left'
                    speed='slow'


                />

                <div className=' flex flex-wrap gap-6 items-center justify-center md:gap-4 max-lg:mt-10'>
                    {companies.map(({id, img, name, nameImg})=>(
                        <div key={id} className='flex md:max-w-60 max-w-32'>
                            <img src={img} alt={name} className='md:w-30 w-30 h-20 relative' />
                            {/* <img src={nameImg} alt={name} className='md:w-28 w-28 h-12' /> */}
                            
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Clients
