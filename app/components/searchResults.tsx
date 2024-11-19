'use client';
import Product from "./product";
import { WeaviateReturn } from "weaviate-client";
import { ProductType } from "../definition";

interface SearchResultsProps {
results:WeaviateReturn<ProductType> | undefined

}



export default function SearchResults({ results }: SearchResultsProps) {
 console.log(results?.objects);

  return (
    <div className="container mx-auto px-4">
      {results && (
        <>
          <h1 className="text-2xl font-bold mb-6">Search Results</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.objects.map((product) => (
              <Product
                key={product.uuid}
                id={product.uuid}
                main_image={product.properties.main_image}
                title={product.properties.title}
                average_rating={product.properties.average_rating}
                price={product.properties.price}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}