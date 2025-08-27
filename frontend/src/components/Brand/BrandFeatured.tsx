import { brands } from '@/constants'
import SubTitle from '../Shared/SubTitle'
import BrandCard from './BrandCard'

const BrandFeatured = () => {
  return (
    <div className="container">
      <SubTitle title="Brand" btnTitle="More" />

      <div className=" flex items-center justify-center md:justify-between flex-wrap">
        {brands.slice(0, 4).map((brand) => (
          <BrandCard key={brand.name} src={brand.imgUrl} brandName={brand.name} />
        ))}
      </div>
    </div>
  )
}

export default BrandFeatured
