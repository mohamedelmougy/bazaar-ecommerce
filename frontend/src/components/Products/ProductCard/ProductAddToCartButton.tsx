import { ShoppingCart } from 'lucide-react'

const ProductAddToCartButton = () => {
  return (
    <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 group/cart cursor-pointer">
      <ShoppingCart className="w-4 h-4 group-hover/cart:scale-110 transition-transform duration-200" />
      Add to Cart
    </button>
  )
}

export default ProductAddToCartButton
