import { MoveLeft, MoveRight } from 'lucide-react'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
  pageCount: number
  onPageClick: (selected: number) => void
}

const Pagination = ({ pageCount, onPageClick }: PaginationProps) => {
  const handleClick = ({ selected }: { selected: number }) => {
    onPageClick(selected + 1)
  }

  return (
    <ReactPaginate
      previousLabel={<MoveLeft />}
      nextLabel={<MoveRight />}
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handleClick}
      containerClassName="pagination-container"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeLinkClassName="active-item"
      disabledLinkClassName="disabled-item"
    />
  )
}

export default Pagination
