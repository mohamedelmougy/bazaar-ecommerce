import { categoriesCard } from '@/constants'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Shared/SubTitle'

const HomeCategories = () => {
  return (
    <div className="container w-full space-y-5">
      <SubTitle title="Categories" btnTitle="More" />
      <div className="flex items-center justify-between container flex-wrap">
        {categoriesCard?.map((cat) => (
          <CategoryCard title={cat.title} img={cat.imgUrl} background={cat.background} />
        ))}
      </div>
    </div>
  )
}

export default HomeCategories
