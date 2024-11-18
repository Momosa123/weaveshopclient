import Image from "next/image";
import StarRating from "./starRating";
import Link from "next/link";

interface ProductProps {
    id: string;
    main_image: string;
    title: string;
    average_rating: number;
    price: number;
}

export default function Product({ id, main_image, title, average_rating, price }: ProductProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-48 mb-4">
          <Image
            src={main_image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2 truncate">
          {title}
        </h2>
        <StarRating rating={average_rating} />
        <p className="text-xl font-bold mt-2">
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}