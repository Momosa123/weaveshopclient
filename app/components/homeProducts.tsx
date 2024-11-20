import { ProductGraphQL } from "../definition";
import Product from "./product";
import { getProducts } from "@/lib/getProducts";
export default async function AllProducts(){
   const response = await getProducts()
   const products = response.data.Get.FashionProducts
    return (

      <div>
        <h1 className="text-5xl font-integral font-bold text-center mb-10">NEW ARRIVALS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product:ProductGraphQL) => (
                <Product 
                    key={product._additional.id}
                    id={product._additional.id}
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