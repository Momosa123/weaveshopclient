import ProductDetail from "@/app/components/productDetail";
import ProductReviews from "@/app/components/productReviews";
import { searchProductsByImage } from "@/lib/searchProducts";
import { imageUrlToBase64 } from "@/lib/utils";
import SimilarProducts from "@/app/components/similarProducts";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!product) {
    notFound();
  }

  const base64Image = await imageUrlToBase64(product.images[0]);
  const allSimilarProducts = await searchProductsByImage(base64Image, 4);
  const similarProducts = allSimilarProducts?.slice(1);

  return (
    <div className="flex flex-col min-h-screen pt-[72px]">
      <ProductDetail
        main_image={product.images[0]}
        title={product.title}
        average_rating={4.5}
        price={product.price}
        reviews_count={0}
      />
      <SimilarProducts
        similarProducts={similarProducts}
        title="Similar Products"
      />
      <ProductReviews />
    </div>
  );
}
