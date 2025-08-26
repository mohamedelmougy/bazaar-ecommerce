interface SubTitleProps {
  title: string
  btnTitle?: string
}

const SubTitle = ({ title, btnTitle }: SubTitleProps) => {
  return (
    <div className="container w-full flex items-center justify-between">
      {btnTitle && (
        <button className="border border-[#272727] px-6 py-1.5 rounded-2xl text-[#272727] hover:text-[#f9f9f9] hover:bg-[#272727] cursor-pointer">
          More
        </button>
      )}
      <span className="font-bold text-2xl text-[#272727]">{title}</span>
    </div>
  )
}

export default SubTitle
