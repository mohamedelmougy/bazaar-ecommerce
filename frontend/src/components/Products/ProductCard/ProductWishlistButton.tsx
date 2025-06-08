import { useState } from "react";
import { Heart } from "lucide-react";

const ProductWishlistButton = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };
  return (
    <button
      onClick={toggleWishlist}
      className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-center justify-center group/wishlist cursor-pointer ${
        isWishlisted
          ? "border-red-500 bg-red-50 text-red-600 hover:bg-red-100"
          : "border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-500 hover:bg-red-50"
      }`}
    >
      <Heart
        className={`w-5 h-5 transition-all duration-200 group-hover/wishlist:scale-110 ${
          isWishlisted ? "fill-red-500" : "group-hover/wishlist:fill-red-500"
        }`}
      />
    </button>
  );
};

export default ProductWishlistButton;
