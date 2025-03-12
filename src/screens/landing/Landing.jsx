import React, { useState } from "react";
import "./Landing.css";
import LandingHeader from "../../components/headers/LandingHeader";
import Hero from "../../components/hero/Hero";
import HeroStack from "../../components/expandingImage/HeroStack";
import SectionElement from "../../components/sectionElement/SectionElement";
import MultiProductCarousel from "../../components/carousel/MultiProductCarousel";
import LandingGrid from "../../components/landingGrid/LandingGrid";
import Marquee from "../../components/marquee/Marquee";
import Footer from "../../components/footer/Footer";
import { Backdrop } from "../../organisms/BackDrop";
import SideBar from "../../components/sideBar/SideBar";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <SideBar isOpen={isOpen} onClose={toggleMenu} />
      <LandingHeader onMenuClick={toggleMenu} />
      <Hero />
      <HeroStack />
      <SectionElement title={"Signature Collection"}>
        <MultiProductCarousel />
      </SectionElement>
      <SectionElement
        padding={"pt-[32]"}
        title={"Limited Edition"}
        subTitle={"Personal fragrance consultations tailored to you"}
      >
        <LandingGrid />
      </SectionElement>
      <Marquee />
      <Footer />
      <Backdrop show={isOpen} onClick={toggleMenu} />
    </div>
  );
};

export default Landing;
