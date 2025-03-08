import { ProductProperties } from "../definition";
import Product from "./Product";

interface SimilarProductsProps {
    similarProducts:ProductProperties[] | undefined
    title: string
    }

export default function SimilarProducts({ similarProducts, title }: SimilarProductsProps) {
    return (
        <div className="container mx-auto px-4 mt-10">
        <h1 className="text-5xl font-integral font-bold text-center mb-10">{title}</h1>
     
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts?.map((product) => (
              <Product
                id={product.uuid}
                key={product.uuid}
                main_image={product.properties.main_image}
                title={product.properties.title}  
                average_rating={product.properties.average_rating}
                price={product.properties.price}
              />
            ))}
          </div>
      </div>
    );
 
}