import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroStack = () => {
  const { perfume1, perfume2, perfume3, perfume4, perfume5, perfume6 } = assets.perfumes;
  const { scrollY } = useScroll();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerHeight <= 800);

  const scale = useTransform(scrollY, [1, 300], [1, 2]);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerHeight <= 600)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  

  return (
    <div className="h-[442px] flex items-end justify-center overflow-x-hidden  overflow-y-hidden">
      {isSmallScreen ? (
        <motion.div
          style={{ scale }}
          className="flex flex-nowrap gap-[8px] justify-center overflow-x-hidden overflow-y-hidden origin-bottom"
        >
          <div className="w-[147px] h-[220.5px] rounded">
            <img
              className="object-cover aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume1}
              alt="stack image"
            />
          </div>
          <div className="w-[147px] h-[220.5px] rounded">
            <img
              className="object-cover aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume2}
              alt="stack image"
            />
          </div>
          <div className="w-[147px] h-[220.5px] rounded">
            <img
              className="object-cover aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume3}
              alt="stack image"
            />
          </div>
          <div className="w-[147px] h-[220.5px] rounded">
            <img
              className="object-cover aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume4}
              alt="stack image"
            />
          </div>
          <div className="w-[147px] h-[220.5px] rounded">
            <img
              className="object-cover aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume5}
              alt="stack image"
            />
          </div>
          <div className="w-[147px] h-[220.5px] rounded">
            <img
              className="object-cover aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume6}
              alt="stack image"
            />
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-nowrap gap-[16px] justify-center overflow-x-hidden overflow-y-hidden origin-bottom">
          <div className="min-w-[294px] h-[441px] rounded">
            <img
              className="object-cover rounded aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume1}
              alt="stack image"
            />
          </div>
          <div className="min-w-[294px] h-[441px] rounded">
            <img
              className="object-cover rounded aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume2}
              alt="stack image"
            />
          </div>
          <div className="min-w-[294px] h-[441px]">
            <img
              className="object-cover rounded aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume3}
              alt="stack image"
            />
          </div>
          <div className="min-w-[294px] h-[441px] rounded">
            <img
              className="object-cover rounded aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume4}
              alt="stack image"
            />
          </div>
          <div className="min-w-[294px] h-[441px] rounded">
            <img
              className="object-cover rounded aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume5}
              alt="stack image"
            />
          </div>
          <div className="min-w-[294px] h-[441px] rounded">
            <img
              className="object-cover rounded aspect-3/2 h-full w-full max-h-full max-w-full"
              src={perfume6}
              alt="stack image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroStack;
