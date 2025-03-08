import { products } from "@/lib/temp-data";
import Product from "./product";

export default function AllProducts() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-10">NEW ARRIVALS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            main_image={product.images[0]}
            title={product.title}
            average_rating={product.average_rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}