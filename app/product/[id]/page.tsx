import ProductDetail from "@/app/components/productDetail";
import { getProduct } from "@/lib/getProducts";
import ProductReviews from "@/app/components/productReviews";
export default async function ProductPage({ params }: { params: { id: string } }) {
    const response = await getProduct(params.id);
    console.log(response)
    const product = response.data.Get.FashionProducts[0];

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
        <ProductDetail 
            main_image={product.main_image}
            title={product.title}
            average_rating={product.average_rating}
            price={product.price}
            
            reviews_count={product.reviews_count}
        />
        <ProductReviews />
        </>
    );
}