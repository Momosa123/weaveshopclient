import Image from "next/image";
import StarRating from "./starRating";
import Link from "next/link";
import AddToCartButton from "./ui/AddToCartButton";
import { useCart } from "@/lib/hooks/useCart";

interface ProductProps {
  id: string;
  main_image: string;
  title: string;
  average_rating: number;
  price: number;
}

export default function Product({
  id,
  main_image,
  title,
  average_rating,
  price,
}: ProductProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price,
      image: main_image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square mb-4">
          <Image
            src={main_image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900 truncate">{title}</h3>
          <div className="flex items-center gap-1">
            <StarRating rating={average_rating} />
            <span className="text-sm text-gray-500">({average_rating})</span>
          </div>
          <p className="font-semibold text-lg">{price.toFixed(2)} €</p>
        </div>
      </Link>
      <AddToCartButton onClick={handleAddToCart} />
    </div>
  );
}
