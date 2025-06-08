import { useProductCardContext } from "../../../contexts/ProductCardContext";

const ProductBadge = () => {
  const { product } = useProductCardContext();
  return (
    <div className="absolute top-3 left-3 flex flex-col gap-2">
      {product.isNew && (
        <span className="bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          New
        </span>
      )}
      {product.onSale && (
        <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          Sale
        </span>
      )}
      {product.badge && (
        <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {product.badge}
        </span>
      )}
    </div>
  );
};

export default ProductBadge;
