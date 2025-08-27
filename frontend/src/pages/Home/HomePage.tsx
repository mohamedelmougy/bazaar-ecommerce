import BrandFeatured from '@/components/Brand/BrandFeatured'
import Carousel from '@/components/Home/Carousel'
import HomeCategories from '@/components/Home/HomeCategories'
import CardProductsContainer from '@/components/Products/CardProductsContainer'

const HomePage = () => {
  return (
    <>
      <section className="mb-14">
        <Carousel />
      </section>
      <section className="mb-14">
        <HomeCategories />
      </section>
      <section className="mb-14">
        <CardProductsContainer />
      </section>
      <section className="mb-14">
        <BrandFeatured />
      </section>
    </>
  )
}

export default HomePage
