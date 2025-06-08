import { useProductCardContext } from "../../../contexts/ProductCardContext";

const ProductTitle = () => {
  const { product } = useProductCardContext();
  return (
    <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">
      {product.name}
    </h3>
  );
};

export default ProductTitle;
