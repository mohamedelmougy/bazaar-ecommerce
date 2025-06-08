import { useProductCardContext } from "../../../contexts/ProductCardContext";

const ProductText = () => {
  const { product } = useProductCardContext();
  return (
    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
      {product.description}
    </p>
  );
};

export default ProductText;
