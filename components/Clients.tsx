import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
    <h1 className='heading'>
    What Our  {''} 
    <span className='text-purple'>
        Users Say
    </span>
    </h1>
    <div className='flex flex-col items-center max-lg:mt-10'>
       
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow' />
        
        </div>
        </div>
    
  )
}

export default Clients
