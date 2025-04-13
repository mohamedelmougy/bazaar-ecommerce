import type { Slide } from "./types";
import { phones,tvs,pots,shampooProducts } from "../assets/images";

export const carouselSlides: Slide[] = [
  {
    imgUrl: phones,
    alt:"Phone img",
    background: "bg-gradient-to-br from-[#ffedf5] to-[#ffd5e7]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
  {
    imgUrl: tvs,
    alt:"Tvs img",
    background: "bg-gradient-to-br from-[#d3deff] to-[#a8baff]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
  {
    imgUrl: pots,
    alt:"Pots and Pans img",
    background: "bg-gradient-to-br from-[#f8f0d5] to-[#efdcab]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
  {
    imgUrl: shampooProducts,
    alt:"Shampoo products img",
    background: "bg-gradient-to-br from-[#b2e8f0] to-[#7bccdc]",
    headings: "Great discount!",
    paragraph: "Enjoy 50% off when you buy.",
  },
];
