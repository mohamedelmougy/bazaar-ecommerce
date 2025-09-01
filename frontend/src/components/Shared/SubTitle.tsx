import { Link } from 'react-router-dom'

interface SubTitleProps {
  title: string
  btnTitle?: string
  to: string
}

const SubTitle = ({ title, btnTitle, to }: SubTitleProps) => {
  return (
    <div className="container w-full flex items-center justify-between">
      <span className="font-bold text-2xl text-[#272727]">{title}</span>
      {btnTitle && (
        <Link
          to={to}
          className="border border-[#272727] px-6 py-1.5 rounded-2xl text-[#272727] hover:text-[#f9f9f9] hover:bg-[#272727] cursor-pointer"
        >
          {btnTitle}
        </Link>
      )}
    </div>
  )
}

export default SubTitle
