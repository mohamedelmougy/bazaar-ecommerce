import CategoryContainer from '@/components/Category/CategoryContainer'
import Pagination from '@/components/Shared/Pagination'

const AllCategoryPage = () => {
  const onPageClick = (selected: number) => {}
  return (
    <>
      <section className="mt-6 min-h-[85vh]">
        <CategoryContainer />
        <div className="my-10">
          <Pagination pageCount={20} onPageClick={onPageClick} />
        </div>
      </section>
    </>
  )
}

export default AllCategoryPage
