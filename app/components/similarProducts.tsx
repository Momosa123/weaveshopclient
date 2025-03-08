import { Product as ProductType } from "../definition";
import Product from "./Product";

interface SimilarProductsProps {
  similarProducts: ProductType[] | undefined;
  title: string;
}

export default function SimilarProducts({
  similarProducts,
  title,
}: SimilarProductsProps) {
  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-5xl font-integral font-bold text-center mb-10">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProducts?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            main_image={product.main_image}
            title={product.title}
            average_rating={product.average_rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
