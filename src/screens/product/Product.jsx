import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import LandingHeader from '../../components/headers/LandingHeader'
import SideBar from '../../components/sideBar/SideBar'
import { Backdrop } from '../../organisms/BackDrop'
import Marquee from '../../components/marquee/Marquee'
import Accordion from '../../molecules/accordion/Accordion'
import ScrollSlide from '../../molecules/scrollSlide/ScrollSlide'
import MultiProductCarousel from '../../components/carousel/MultiProductCarousel'

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <SideBar isOpen={isOpen} onClose={toggleMenu} />
      <LandingHeader onMenuClick={toggleMenu} />
      <div>
        <div className="">
          {/* product carousel */}
          <div className="carousel">
            <img src="" alt="" />
          </div>
          {/* product details */}
          <div className="">
            <div>
              <span className="product_category">Jeans</span>
              <h2 className="product_title">Blue Jeans</h2>
              <div className="tags">
                <span>FULL-STOCK</span>
                <span>MAN</span>
              </div>
            </div>
            <div className="price_info">
              <p>$50</p>
              <div className="discount">
                <span className="old_price">
                  <strike>$100</strike>
                </span>
                <span className="discount_percent">50%</span>
              </div>
            </div>
            <div className="variations">
              <p>Choose Other Versions</p>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <div className="sizes">
              <p>Choose Other Versions</p>
              <span className="size">S</span>
              <span className="size">M</span>
              <span className="size">L</span>
              <span className="size">XL</span>
            </div>
            <div className="product_description">
              <Accordion title={"Product Description"}>
                <h6>Current trends and vibrant colors:</h6>
                <p>
                  Keep up with fashion by choosing clothes inspired by the latest trends. Vibrant
                  colors and modern prints will help you create unique and personal outfits.
                </p>
                <h6>For an impeccable shopping experience:</h6>
                <p>
                  Our team is dedicated to your satisfaction. Visit our stores or explore the online
                  collection and benefit from personalized advice, fast delivery, and free returns.
                </p>
                <h6>Discover the new collection and redefine your personal style!</h6>
              </Accordion>
            </div>
            <div className="policies"></div>
            <div className="button_group">
              <button>Purchase Now</button>
            </div>
          </div>
        </div>
      </div>
      <ScrollSlide />
      <div className="">
        <p className="font-Sora text-[12px] text-center uppercase">RECOMMENDATIONS FOR YOU</p>
        <h3 className="font-Sora text-[40px] uppercase font-bold text-center py-2">
          Similar products
        </h3>
        <MultiProductCarousel />
      </div>
      <Marquee />
      <Footer />
      <Backdrop show={isOpen} onClick={toggleMenu} />
    </div>
  );
}

export default Product