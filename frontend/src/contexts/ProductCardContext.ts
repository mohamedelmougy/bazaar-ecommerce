import { createContext, useContext } from "react";
import { Product } from "../components/Products/ProductCard";

interface ProductCardContextProps {
  product: Product;
}

const ProductCardContext = createContext<ProductCardContextProps | null>(null);

export function useProductCardContext() {
  const product = useContext(ProductCardContext);

  if (!product) {
    throw new Error("ProductCard.* component must be rendered as child of ProductCard component");
  }

  return product;
}

export default ProductCardContext;
