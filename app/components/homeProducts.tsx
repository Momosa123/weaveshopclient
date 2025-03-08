"use client";

import { products } from "@/lib/temp-data";
import Product from "./Product";

export default function AllProducts() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10">
        NOUVEAUTÉS
      </h1>
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
