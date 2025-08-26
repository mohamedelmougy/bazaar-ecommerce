import { useProductCardContext } from '../../../contexts/ProductCardContext'

const ProductPrice = () => {
  const { product } = useProductCardContext()
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        {product.originalPrice && product.originalPrice > product.price && (
          <span className="text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
        )}
      </div>

      {product.originalPrice && product.originalPrice > product.price && (
        <div className="bg-red-50 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
        </div>
      )}
    </div>
  )
}

export default ProductPrice
