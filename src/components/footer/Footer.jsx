import React from "react";
import PheebsLogo from "../../organisms/PheebsLogo";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  const { applePay, googlePay, visa, mastercard, paypal } = assets.icons
  
  return (
    <div className="px-[24px] py-20 bg-black border-t border-white/10 flex flex-col md:flex-row gap-20 md:gap-0 justify-between">
      <div className="flex flex-col justify-between">
        <div className="socials">
          <PheebsLogo />
          <div className="flex gap-[15px] pt-12">
            <div className="x">
              <a href="http://www.x.com/excel_bill" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                  fill="white"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </div>
            <div className="insta">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20"
                  fill="white"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
            <div className="tiktok">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20"
                  fill="white"
                >
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="hidden md:flex">© 2024 Pheebscent. All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-40">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
          <ul className="flex flex-col gap-[20px]">
            <li className="text-[18px] font-bold text-white">Company</li>
            <li className="text-[#696969] hover:text-white/70">
              <Link to={"/help/contact"}>Contact</Link>
            </li>
            <li className="text-[#696969] hover:text-white/70">
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li className="text-[#696969] hover:text-white/70">
              <Link to={"/help/faq"}>FAQs</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[20px]">
            <li className="text-[18px] font-bold text-white">Legal</li>
            <li className="text-[#696969] hover:text-white/70">
              <Link to={"/privacy"}>Pivacy</Link>
            </li>
            <li className="text-[#696969] hover:text-white/70">
              <Link to={"/terms"}>Terms</Link>
            </li>
            <li className="text-[#696969] hover:text-white/70">
              <Link to={"/help/not_found"}>404</Link>
            </li>
          </ul>
        </div>
        <ul className="flex gap-[10px]">
          <li className="payment-type-card">
            <img src={visa} alt="" />
          </li>
          <li className="payment-type-card">
            <img src={mastercard} alt="" />
          </li>
          <li className="payment-type-card">
            <img src={applePay} alt="" />
          </li>
          <li className="payment-type-card">
            <img src={googlePay} alt="" />
          </li>
          <li className="payment-type-card">
            <img src={paypal} alt="" />
          </li>
          <li className="payment-type-card">
            <img src={applePay} alt="" />
          </li>
        </ul>
        <li className="md:hidden">© 2024 Pheebscent. All rights reserved.</li>
      </div>
    </div>
  );
};

export default Footer;
