import React from 'react'
import { Link } from 'react-router-dom'

export const SideBarLink = ({ link, linkText, size="" }) => {
  return (
    <li className="nav_li">
      <Link className={`nav_link ${size}`} to={link}>
        {linkText}
      </Link>
    </li>
  );
}

