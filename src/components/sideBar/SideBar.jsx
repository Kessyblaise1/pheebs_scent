import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import "./Sidebar.css"
import { SideBarLink } from '../../organisms/SideBarLink'
import Accordion from '../../molecules/accordion/Accordion';
import { categories } from '../../assets/data';

const SideBar = ({ isOpen, onClose }) => {

  return (
    <div className={`side_bar ${isOpen ? "active" : ""}`}>
      <div className="nav_head">
        <span className="font-Sora text-[16px] font-bold">MENU</span>
        <XMarkIcon className="size-5.5 cursor-pointer" onClick={onClose} />
      </div>
      <ul className="link_container">
        <SideBarLink link="/" linkText={"HOME"} />
        <Accordion title={"PRODUCT"} itemCount={categories.length}>
          {categories.map((item, i) => (
            <SideBarLink key={i} size="small" link={item.link} linkText={item.title} />
          ))}
        </Accordion>
        <SideBarLink link="/categories" linkText={"SORT-BY"} />
        <SideBarLink link="/blog" linkText={"BLOG"} />
        <SideBarLink link="/help/faq" linkText={"FAQ"} />
        <SideBarLink link="/help/contact" linkText={"CONTACT"} />
      </ul>
    </div>
  );
};

export default SideBar