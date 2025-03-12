import React from "react";
import ItemBadge from "./ItemBadge";

const CarouselProductCard = ({
  imageSrc,
  badgeText,
  productTitle,
  discouont,
  price,
  discountPrice,
  styles = "Available as Seen",
}) => {
  return (
    <div className="relative h-full w-[252px] mx-auto">
      <div className="h-[378px] relative">
        <img
          className="max-h-full min-h-full w-full absolute top-0"
          src={imageSrc}
          alt={productTitle}
        />
        <ItemBadge badge_text={badgeText} />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <h5 className="text-[16px] font-bold text-white">{productTitle}</h5>
          <p className="px-[5px] py-[3px] bg-[rgb(28,28,28)] opacity-90 text-[12px] rounded-[2px]">{discouont}%</p>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="font-bold font-Sora text-[rgb(222, 222, 222)]">${discountPrice}</h6>
          <h6 className="font-Sora text-[rgb(105,105,105)] text-[16px]">${price}</h6>
        </div>
        <p className="font-Sora text-[12px] text-[rgb(222,222,222)] ">{styles}</p>
      </div>
    </div>
  );
};

export default CarouselProductCard;
