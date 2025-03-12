import React from 'react'
import { assets } from '../../assets/assets'

const Marquee = () => {
  const { marqueeGroup } = assets.images
  
  return (
    <div className="slider">
      <div className="list">
        <div className="item" style={{ "--position": 1 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src={marqueeGroup} alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src={marqueeGroup} alt="" />
        </div>
      </div>
      <div className="newsletter_form">
        <form action="" className="flex flex-col gap-[12px] w-[92%] max-w-[551px]">
          <p className="form_title font-IBM font-bold text-[20px]">Discover Your Signature Scent</p>
          <div className="form-group w-full max-w-[551px]">
            <input
              className="w-full h-[41.6px] border border-gray-50/20 focus:outline-none focus:border-blue-300/40 px text-center font-Sora bg-[#1C1C1C]" type="email"
              name="email"
              id="email"
              placeholder="Your email address"
            />
          </div>
          <div className="button_group">
            <button className='w-full h-[41.6px] bg-white text-black font-Sora font-bold rounded cursor-pointer' type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Marquee