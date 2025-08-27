import type { Brand, Category, Media, Slide } from './types'
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
  poloLogo,
  appleLogo,
  lacosteLogo,
  samsungLogo,
  casioLogo,
  lgLogo,
  tupperwareLogo,
} from '../assets/images'
import { FacebookIcon, InstagramIcon, XIcon } from '@/assets/icons'

export const carouselSlides: Slide[] = [
  {
    imgUrl: phones,
    alt: 'Phone img',
    background: 'bg-gradient-to-br from-[#ffedf5] to-[#ffd5e7]',
    headings: 'Great discount!',
    paragraph: 'Enjoy 50% off when you buy.',
  },
  {
    imgUrl: tvs,
    alt: 'Tvs img',
    background: 'bg-gradient-to-br from-[#d3deff] to-[#a8baff]',
    headings: 'Great discount!',
    paragraph: 'Enjoy 50% off when you buy.',
  },
  {
    imgUrl: pots,
    alt: 'Pots and Pans img',
    background: 'bg-gradient-to-br from-[#f8f0d5] to-[#efdcab]',
    headings: 'Great discount!',
    paragraph: 'Enjoy 50% off when you buy.',
  },
  {
    imgUrl: shampooProducts,
    alt: 'Shampoo products img',
    background: 'bg-gradient-to-br from-[#b2e8f0] to-[#7bccdc]',
    headings: 'Great discount!',
    paragraph: 'Enjoy 50% off when you buy.',
  },
]

export const categoriesCard: Category[] = [
  {
    title: 'School',
    imgUrl: notebook,
    background: 'bg-[#FFD3E8]',
  },
  {
    title: 'Kitchen',
    imgUrl: pot,
    background: 'bg-[#F4DBA5]',
  },
  {
    title: 'Clothes',
    imgUrl: cloth,
    background: 'bg-[#55CFDF]',
  },
  {
    title: 'Makeup',
    imgUrl: makeup,
    background: 'bg-[#FF6262]',
  },
  {
    title: 'Watches',
    imgUrl: watch,
    background: 'bg-[#a3b5ff]',
  },
  {
    title: 'Phones',
    imgUrl: phone,
    background: 'bg-[#FFD3E8]',
  },
]

export const brands: Brand[] = [
  { name: 'Apple', imgUrl: appleLogo },
  { name: 'Lacoste', imgUrl: lacosteLogo },
  { name: 'Samsung', imgUrl: samsungLogo },
  { name: 'Casio', imgUrl: casioLogo },
  { name: 'LG', imgUrl: lgLogo },
  { name: 'Polo', imgUrl: poloLogo },
  { name: 'Tupperware', imgUrl: tupperwareLogo },
]

export const socialMedia: Media[] = [
  { name: 'Facebook', icon: FacebookIcon },
  { name: 'x', icon: XIcon },
  { name: 'Instagram', icon: InstagramIcon },
]
