import { searchProductsByText } from "@/utils/searchProducts";

import Product from "./Product";

export default async function SearchResults({query}:{query:string}) {
    const result = await searchProductsByText(query) 
    
    if (result.objects.length === 0) {
      return <div className="text-center py-8">No results found</div>;
    }

    return (
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Search Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.objects.map((product) => (
            <Product     key={product.uuid}
            main_image={product.properties.main_image}
            title={product.properties.title}
            average_rating={product.properties.average_rating}
            price={product.properties.price} />
          ))}
        </div>
      </div>
    );
}
