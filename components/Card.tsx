import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const Card = () => {
  return (
    <div className='py-20' id='feature'>
        <h1 className='heading'>
        Sample Books Generated by {''} 
        <span className='text-purple'>
            BookAI
        </span>
        </h1>
        <h2 className='my-5 justify-center'>
        Explore some of the captivating books created using our AI technology.
        </h2>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
          {projects.map(( {id, title, des, img,link}) => (
            <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]">
                <PinContainer title={title} href={link}>
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] mb-10 sm:h-[40vh]  '>
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                       <img src='/bg.png' alt='bg-img' /> 
                    </div>
                    <img src={img}
                    alt={title}
                    className='z-10 absolute bottom-0' />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                </h1>
                 <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                   {des} 
                </p>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                   Read More
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                </PinContainer>
                
                </div>
          ))}  
        </div>
     
    </div>
  )
}

export default Card
