import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';


const PheebsLogo = () => {
  const { pheebs_logo } = assets.images;

  return (
    <Link to={"/"} role="button" tabIndex={0}>
      <img width={100} src={pheebs_logo} alt="Pheebs Scents Logo" />
    </Link>
  );
}

export default PheebsLogo