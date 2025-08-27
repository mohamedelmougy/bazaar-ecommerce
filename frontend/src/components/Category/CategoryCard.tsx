import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title: string
  img: string
  background: string
}

const CategoryCard = ({ title, img, background }: CategoryCardProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-2.5">
        <div className={cn(`w-[130px] h-[130px] flex items-center justify-center rounded-full p-4`, background)}>
          <img src={img} alt={title} width={130} height={130} loading="lazy" />
        </div>
        <p className="font-bold text-xl text-[#555550]">{title}</p>
      </div>
    </div>
  )
}

export default CategoryCard
