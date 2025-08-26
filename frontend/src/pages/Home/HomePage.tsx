import Carousel from '@/components/Home/Carousel'
import HomeCategories from '@/components/Home/HomeCategories'
import CardProductsContainer from '@/components/Products/CardProductsContainer'

const HomePage = () => {
  return (
    <>
      <section className="mb-5">
        <Carousel />
      </section>
      <section className="mb-5">
        <HomeCategories />
      </section>
      <section className="mb-5">
        <CardProductsContainer />
      </section>
    </>
  )
}

export default HomePage
