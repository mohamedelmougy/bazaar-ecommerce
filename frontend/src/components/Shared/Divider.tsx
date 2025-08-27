import { ChildrenProps } from '@/types/global'

const Divider = ({ children }: ChildrenProps) => {
  return (
    <div className="flex items-center text-gray-500 before:content-[''] before:flex-1 before:p-[0.5px] before:bg-gray-200 before:m-[10px] after:content-[''] after:flex-1 after:p-[0.5px] after:bg-gray-200 after:m-[10px]">
      {children}
    </div>
  )
}

export default Divider
