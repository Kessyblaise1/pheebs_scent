import React from 'react'
import "./Hero.css";

const Hero = () => {
  
  return (
    <div className="h-screen md:h-[600px] w-full items-center justify-center flex flex-col">
      <div className={`h-full w-full bg-[auto_100%] hero_bg`}>
        <div className="bg-black/50 h-full w-full items-center justify-center flex flex-col">
          <h1 className="font-IBM font-[700] tracking-tight text-[40px] sm:text-[50px] px-2 text-center">
            The Art of Refined Scents
          </h1>
          <p className="text-[14px] font-bold font-Sora">Experience perfumery in its finest form</p>
          <button className="bg-white px-[15px] cursor-pointer py-[12px] rounded-lg mt-[16px] text-[14px] text-black/80 font-bold font-Inter">
            Discover Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero