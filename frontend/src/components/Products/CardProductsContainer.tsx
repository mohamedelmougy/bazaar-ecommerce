import { Fragment } from 'react/jsx-runtime'
import SubTitle from '../Shared/SubTitle'
import ProductCard from './ProductCard'

const CardProductsContainer = () => {
  const list = [
    {
      id: '4',
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with crystal clear sound and 20-hour battery life.',
      price: 89.99,
      rating: 2,
      reviewCount: 567,
      imageUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: '5',
      name: 'Laptop Stand',
      description: 'Ergonomic aluminum laptop stand for better posture and comfort.',
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.5,
      reviewCount: 234,
      imageUrl: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      onSale: true,
    },
    {
      id: '6',
      name: 'Wireless Mouse',
      description: 'Precision wireless mouse with ergonomic design and long battery life.',
      price: 39.99,
      rating: 5,
      reviewCount: 445,
      imageUrl: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=500',
      isNew: true,
    },
    {
      id: '7',
      name: 'Phone Case',
      description: 'Premium protective case with military-grade drop protection.',
      price: 24.99,
      rating: 3,
      reviewCount: 1123,
      imageUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Best Seller',
    },
  ]
  return (
    <div className="container w-full space-y-5">
      <SubTitle title="Best Selling" btnTitle="More" />
      <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {list.map((product) => (
          <Fragment key={product.id}>
            <ProductCard product={product}>
              <ProductCard.ImageContainer>
                <ProductCard.Image />
                <ProductCard.Badge />
              </ProductCard.ImageContainer>
              <ProductCard.Body>
                <ProductCard.Rating />
                <ProductCard.Title />
                <ProductCard.Text />
                <ProductCard.Price />
              </ProductCard.Body>
              <ProductCard.ButtonsContainer>
                <ProductCard.AddToCartButton />
                <ProductCard.WishlistButton />
              </ProductCard.ButtonsContainer>
            </ProductCard>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default CardProductsContainer
