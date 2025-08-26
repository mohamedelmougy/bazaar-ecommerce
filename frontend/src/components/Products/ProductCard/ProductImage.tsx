import { useProductCardContext } from '../../../contexts/ProductCardContext'

const ProductImage = () => {
  const { product } = useProductCardContext()
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  )
}

export default ProductImage
