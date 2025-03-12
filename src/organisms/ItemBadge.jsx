import React from 'react'

function ItemBadge({ badge_text }) {
  return (
    <div className="absolute flex items-center text-[12px] bottom-[97%] float-right right-[15px] z-[3] w-max justify-center px-[5px] py-[3px] bg-black opacity-80 rounded-[2px]">
      <span className="font-Sora uppercase">{badge_text}</span>
    </div>
  );
}

export default ItemBadge