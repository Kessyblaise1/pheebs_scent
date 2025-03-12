import perfume1 from "./images/perfumes/black_opium.avif";
import perfume2 from "./images/perfumes/chance_chanel.avif";
import perfume3 from "./images/perfumes/coco_noir.avif";
import perfume4 from "./images/perfumes/creed.avif";
import perfume5 from "./images/perfumes/davidoff.avif";
import perfume6 from "./images/perfumes/forbidden.avif";
import perfume7 from "./images/perfumes/n5_chanel.avif";
import perfume8 from "./images/perfumes/park_avenue.avif";
import perfume9 from "./images/perfumes/versace_eros.avif";


export const carouselData = [
  {
    productId: "1",
    imageSrc: perfume1,
    badgeText: "Full-Stock",
    productTitle: "Black Opium",
    discount: "40",
    price: "130",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "2",
    imageSrc: perfume2,
    badgeText: "Promotions",
    productTitle: "Chance Chanel",
    discount: "60",
    price: "850",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "3",
    imageSrc: perfume3,
    badgeText: "Full-Stock",
    productTitle: "Coco Noir",
    discount: "30",
    price: "1630",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "4",
    imageSrc: perfume4,
    badgeText: "Stock",
    productTitle: "Creed",
    discount: "10",
    price: "720",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "5",
    imageSrc: perfume5,
    badgeText: "Stock",
    productTitle: "Davidoff",
    discount: "40",
    price: "2400",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "6",
    imageSrc: perfume6,
    badgeText: "Promotions",
    productTitle: "L'Interdit",
    discount: "60",
    price: "799",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "7",
    imageSrc: perfume7,
    badgeText: "Full-Stock",
    productTitle: "N5 Chanel",
    discount: "20",
    price: "1130",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "8",
    imageSrc: perfume8,
    badgeText: "Few Units",
    productTitle: "Park Avenue",
    discount: "20",
    price: "625",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "9",
    imageSrc: perfume9,
    badgeText: "Full-Stock",
    productTitle: "Versace Eros",
    discount: "7",
    price: "4200",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
  {
    productId: "10",
    imageSrc: perfume4,
    badgeText: "Stock",
    productTitle: "Creed",
    discount: "10",
    price: "720",
    discountPrice: function () {
      return this.price - (Number(this.discount) / 100) * Number(this.price);
    },
  },
];

export const carouselSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const categories = [
  {
    title: "advisable",
    link: "/products/advisable",
  },
  {
    title: "best-seller",
    link: "/products/best-seller",
  },
  {
    title: "alphabetical-AZ",
    link: "/products/sort-by/dsc",
  },
  {
    title: "alphabetical-ZA",
    link: "/products/sort-by/asc",
  },
  {
    title: "price-from-low-to-high",
    link: "/products/sort-by/price/desc",
  },
  {
    title: "price-from-high-to-low",
    link: "/products/sort-by/price/asc",
  },
  {
    title: "date-from-old-to-new",
    link: "/products/sort-by/latest",
  },
  {
    title: "date-from-new-to-old",
    link: "/products/sort-by/oldest",
  },
];
