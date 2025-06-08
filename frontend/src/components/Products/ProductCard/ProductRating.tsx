import { Star } from "lucide-react";
import { useProductCardContext } from "../../../contexts/ProductCardContext";
import { cn } from "../../../utils";

const ProductRating = () => {
  const { product } = useProductCardContext();
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const isFullStar = index < Math.floor(rating);
      const isHalfStar = index < rating;

      return (
        <Star
          key={index}
          className={cn("w-4 h-4", {
            "fill-yellow-400 text-yellow-400": isFullStar,
            "fill-yellow-200 text-yellow-200": !isFullStar && isHalfStar,
            "text-gray-300": !isHalfStar,
          })}
        />
      );
    });
  };
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex items-center gap-0.5">
        {renderStars(product.rating)}
      </div>
      <span className="text-sm text-gray-500">
        {product.rating} ({product.reviewCount} reviews)
      </span>
    </div>
  );
};

export default ProductRating;
