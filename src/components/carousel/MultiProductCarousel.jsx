import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carouselData, carouselSettings } from "../../assets/data";
import CarouselProductCard from "../../organisms/CarouselProductCard";
import { Link } from "react-router-dom";

const MultiProductCarousel = () => {
  return (
    <Link to={"/product/8"} className="pt-12 px-[24px]">
      <Slider {...carouselSettings}>
        {carouselData.map((item, i) => (
          <CarouselProductCard
            imageSrc={item.imageSrc}
            badgeText={item.badgeText}
            productTitle={item.productTitle}
            discouont={item.discount}
            price={item.price}
            discountPrice={item.discountPrice()}
            key={i}
          />
        ))}
      </Slider>
    </Link>
  );
};

export default MultiProductCarousel;
