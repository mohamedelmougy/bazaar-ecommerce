import BrandContainer from '@/components/Brand/BrandContainer'
import Pagination from '@/components/Shared/Pagination'

const AllBrandPage = () => {
  const onPageClick = (selected: number) => {}
  return (
    <section className="mt-6 min-h-[85vh]">
      <BrandContainer />
      <div className="my-10">
        <Pagination pageCount={20} onPageClick={onPageClick} />
      </div>
    </section>
  )
}

export default AllBrandPage
