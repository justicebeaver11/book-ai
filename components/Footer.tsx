import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      
      
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
           <span className="text-purple">Stay Updated</span> 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Subscribe to our newsletter for the latest AI writing tips and BookAI updates.
        </p>
        <a href="mailto:samyakanand2004@gmail.com">
          <MagicButton
            title="Subscribe"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
  <p className="md:text-base text-sm md:font-normal font-light text-center">
    Copyright © 2024 BookAI. All rights reserved.
  </p>
</div>

      </footer>
  )
}

export default Footer
