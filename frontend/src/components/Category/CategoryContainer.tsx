import { categoriesCard } from '@/constants'
import CategoryCard from './CategoryCard'

const CategoryContainer = () => {
  return (
    <div className="container w-full space-y-7">
      <h1 className="text-[#555550] font-extrabold text-2xl">All Categories</h1>
      <div className="flex items-center justify-between flex-wrap gap-7">
        {categoriesCard?.map((cat) => (
          <CategoryCard key={cat.title} title={cat.title} img={cat.imgUrl} background={cat.background} />
        ))}
      </div>
    </div>
  )
}

export default CategoryContainer
