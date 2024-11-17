import { getAllProducts } from "@/utils/action";
import Product from "./Product";
export default async function AllProducts(){
    const products = await getAllProducts();
   console.log(products)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {products.map((product) => (
                <Product 
                    key={product.uuid}
                    main_image={product.properties.main_image}
                    title={product.properties.title}
                    average_rating={product.properties.average_rating}
                    price={product.properties.price}
                />
            ))} 
          
        </div>
    );
}