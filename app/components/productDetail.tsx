import Image from "next/image";
import StarRating from "./starRating";

interface ProductDetailProps {
  main_image: string;
  title: string;
  average_rating: number;
  price: number;
  reviews_count: number;
}

export default function ProductDetail({ 
  main_image, 
  title, 
  average_rating, 
  price, 
  reviews_count 
}: ProductDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative aspect-square">
          <Image
            src={main_image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2 truncate">{title}</h1>
          
          <div className="flex items-center gap-2 mb-2">
            <StarRating rating={average_rating} />
            <span className="text-gray-600">({reviews_count} reviews)</span>
          </div>

          <div className="text-xl font-bold mb-4">
            ${price.toFixed(2)}
          </div>

          <p className="text-gray-600 mb-4">
            {title}
          </p>

          <button 
            className="bg-black text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity mb-4"
          >
            ADD TO CART
          </button>

          <div className="space-y-3 mt-4">
            <div className="border-t pt-3">
              <h3 className="font-semibold mb-1">Free Delivery</h3>
              <p className="text-gray-600 text-sm">Enter your postal code for delivery availability</p>
            </div>

            <div className="border-t pt-3">
              <h3 className="font-semibold mb-1">Return Delivery</h3>
              <p className="text-gray-600 text-sm">Free 30 days return. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 