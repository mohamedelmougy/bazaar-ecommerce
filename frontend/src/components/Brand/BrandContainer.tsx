import { brands } from '@/constants'
import BrandCard from './BrandCard'

const BrandContainer = () => {
  return (
    <div className="container w-full space-y-7">
      <h1 className="text-[#555550] font-extrabold text-2xl">All Brands</h1>
      <div className=" flex items-center justify-center md:justify-between flex-wrap">
        {brands.map((brand) => (
          <BrandCard key={brand.name} src={brand.imgUrl} brandName={brand.name} />
        ))}
      </div>
    </div>
  )
}

export default BrandContainer
