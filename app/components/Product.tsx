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
    <Link href={`/products/${id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={main_image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${price.toFixed(2)}</p>
      </div>
      <div className="mt-1">
        <StarRating rating={average_rating} />
      </div>
    </Link>
  );
}