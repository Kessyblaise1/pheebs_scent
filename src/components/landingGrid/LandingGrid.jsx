import React from 'react'

const LandingGrid = () => {
  return (
    <div className="pt-[50px] pb-[24px] px-[24px]">
      <div className="grid grid-rows-9 md:grid-rows-3 md:grid-cols-3 gap-[14px]">
        <div className="grid-item item1 row-span-2 ">
          Item 1
        </div>
        <div className="grid-item item2 row-span-3 ">
          Item 2
        </div>
        <div className="grid-item item3">
          Item 3
        </div>
        <div className="grid-item item4 row-span-2">
          Item 4
        </div>
        <div className="grid-item item5">
          Item 5
        </div>
      </div>
    </div>
  );
}

export default LandingGrid