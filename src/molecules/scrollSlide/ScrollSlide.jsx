import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const ScrollSlide = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [x, setX] = useState(0);
  const prevScrollY = useRef(0);
  const { perfumes } = assets
  const dataLength = Object.keys(perfumes);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
        setX((prevX) => prevX - 1);
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection("up");
        setX((prevX) => prevX + 1);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ padding: "50px 20px", overflowX: "hidden" }}>
      <p className="font-Sora text-[12px] text-center uppercase">We give you more</p>
      <h3 className="font-Sora text-[40px] uppercase font-bold text-center py-2">CCOMMERCE</h3>
      <motion.div
        className="flex sticky gap-[20px] left-[-120px] pt-4"
        animate={{ x }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {Array.from(dataLength).map((item, index) => (
          <div key={index} className="min-w-[250px] w-[250px] h-[350px] bg-blue-500 rounded-md">
            <img className="h-full w-full object-cover" src={perfumes[item]} alt="" />
          </div>
        ))}
      </motion.div>
    </div>  
  );
};

export default ScrollSlide;
