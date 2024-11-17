import { ProductGraphQL } from "../definition";
import Product from "./Product";
import { getProducts } from "@/utils/getProducts";
export default async function AllProducts(){
   const response = await getProducts()
   const products = response.data.Get.FashionProducts
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product:ProductGraphQL,index:number) => (
                <Product 
                    key={index}
                    main_image={product.main_image}
                    title={product.title}
                    average_rating={product.average_rating}
                    price={product.price}
                />
            ))} 
        </div>
    );
}