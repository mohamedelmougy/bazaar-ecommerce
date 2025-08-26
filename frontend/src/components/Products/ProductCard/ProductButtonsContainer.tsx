import { ChildrenProps } from '../../../types/global'

const ProductButtonsContainer = ({ children }: ChildrenProps) => {
  return <div className="flex gap-3 mt-4 px-5 pb-5">{children}</div>
}

export default ProductButtonsContainer
