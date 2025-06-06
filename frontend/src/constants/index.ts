import type { Category, Slide } from "./types";
import {
  phones,
  tvs,
  pots,
  shampooProducts,
  notebook,
  pot,
  cloth,
  makeup,
  watch,
  phone,
} from "../assets/images";

export const carouselSlides: Slide[] = [
  {
    imgUrl: phones,
    alt: "Phone img",
    background: "bg-gradient-to-br from-[#ffedf5] to-[#ffd5e7]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
  {
    imgUrl: tvs,
    alt: "Tvs img",
    background: "bg-gradient-to-br from-[#d3deff] to-[#a8baff]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
  {
    imgUrl: pots,
    alt: "Pots and Pans img",
    background: "bg-gradient-to-br from-[#f8f0d5] to-[#efdcab]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
  {
    imgUrl: shampooProducts,
    alt: "Shampoo products img",
    background: "bg-gradient-to-br from-[#b2e8f0] to-[#7bccdc]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
];

export const categoriesCard: Category[] = [
  {
    title: "School",
    imgUrl: notebook,
    background: "bg-[#FFD3E8]",
  },
  {
    title: "Kitchen",
    imgUrl: pot,
    background: "bg-[#F4DBA5]",
  },
  {
    title: "Clothes",
    imgUrl: cloth,
    background: "bg-[#55CFDF]",
  },
  {
    title: "Makeup",
    imgUrl: makeup,
    background: "bg-[#FF6262]",
  },
  {
    title: "Watches",
    imgUrl: watch,
    background: "bg-[#a3b5ff]",
  },
  {
    title: "Phones",
    imgUrl: phone,
    background: "bg-[#FFD3E8]",
  },
];
