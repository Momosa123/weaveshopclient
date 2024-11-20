import ProductDetail from "@/app/components/productDetail";
import { getProduct } from "@/lib/getProducts";
import ProductReviews from "@/app/components/productReviews";
import { searchProductsByImage } from "@/lib/searchProducts";
import { imageUrlToBase64 } from "@/lib/utils";
import SimilarProducts from "@/app/components/similarProducts";

export default async function ProductPage({
    params,
  }: {
    params: Promise<{ id: string }>
  })  {
    const {id} = await params
    const response = await getProduct(id);
    const product = response.data.Get.FashionProducts[0];
    const imageUrl = product.main_image;
    const base64Image = await imageUrlToBase64(imageUrl);
    const allSimilarProducts = await searchProductsByImage(base64Image, 4);
    const similarProducts = allSimilarProducts?.slice(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen pt-[72px]">
        <ProductDetail 
            main_image={product.main_image}
            title={product.title}
            average_rating={product.average_rating}
            price={product.price}
            
            reviews_count={product.reviews_count}
        />
        <SimilarProducts similarProducts={similarProducts} title="Similar Products" />

        <ProductReviews />
        </div>
    );
}