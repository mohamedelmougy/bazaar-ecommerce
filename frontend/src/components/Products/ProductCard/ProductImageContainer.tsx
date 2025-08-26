import { ChildrenProps } from '../../../types/global'

const ProductImageContainer = ({ children }: ChildrenProps) => {
  return <div className="relative overflow-hidden bg-gray-50">{children}</div>
}

export default ProductImageContainer
