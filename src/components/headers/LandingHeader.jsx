import { Bars2Icon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import PheebsLogo from "../../organisms/PheebsLogo";

const LandingHeader = ({ onMenuClick }) => {
  return (
    <div className="bg-black w-full flex items-center justify-center h-[64px] sm:h-[72px] pl-[10px] pr-[10px] border-white/10 border-b">
      <div className="max-w-6xl flex w-full justify-between items-center">
        <div className="sm:hidden">
          <Bars2Icon
            title="Menu"
            aria-label="Navigation Menu"
            className="size-8 cursor-pointer"
            onClick={onMenuClick}
          />
        </div>
        <div className="lh_logo">
          <PheebsLogo />
        </div>
        <div className="hidden sm:block">
          <nav className="flex items-center justify-between gap-6">
            <Link to={"/Shop"}>Shop</Link>
            <Link to={"/Collection"}>Collection</Link>
            <Link to={"/Blog"}>Blog</Link>
            <Link to={"/Support"}>Support</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <MagnifyingGlassIcon
            role="button"
            aria-hidden="false"
            tabIndex={0}
            aria-label="Search Icon"
            title="search"
            className="size-8 p-1 cursor-pointer hover:text-black rounded hover:bg-gray-200"
          />
          <ShoppingCartIcon
            role="button"
            aria-hidden="false"
            tabIndex={0}
            aria-label="Shopping Cart Icon"
            title="cart"
            className="size-8 p-1 cursor-pointer hover:text-black rounded hover:bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
