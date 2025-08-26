import ProductCardContext from '../../../contexts/ProductCardContext'
import ProductBody from './ProductBody'
import ProductImage from './ProductImage'
import ProductAddToCartButton from './ProductAddToCartButton'
import ProductBadge from './ProductBadge'
import ProductButtonsContainer from './ProductButtonsContainer'
import ProductImageContainer from './ProductImageContainer'
import ProductPrice from './ProductPrice'
import ProductRating from './ProductRating'
import ProductText from './ProductText'
import ProductWishlistButton from './ProductWishlistButton'
import ProductTitle from './ProductTitle'
import { ReactNode } from 'react'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  imageUrl: string
  badge?: string
  isNew?: boolean
  onSale?: boolean
}

interface ProductCardProps {
  children: ReactNode
  product: Product
}

const ProductCard = ({ product, children }: ProductCardProps) => {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        {children}
      </div>
    </ProductCardContext.Provider>
  )
}
ProductCard.ImageContainer = ProductImageContainer
ProductCard.Image = ProductImage
ProductCard.Badge = ProductBadge

ProductCard.Body = ProductBody
ProductCard.Rating = ProductRating
ProductCard.Title = ProductTitle
ProductCard.Text = ProductText
ProductCard.Price = ProductPrice

ProductCard.ButtonsContainer = ProductButtonsContainer
ProductCard.AddToCartButton = ProductAddToCartButton
ProductCard.WishlistButton = ProductWishlistButton

export default ProductCard
