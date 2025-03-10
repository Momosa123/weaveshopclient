import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "@/app/components/AddToCartButton";
import { Product } from "@/app/definition";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  await searchParams;

  const productData = await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });

  if (!productData) {
    notFound();
  }

  // Adapter l'objet product pour correspondre au type Product
  const product: Product = {
    ...productData,
    main_image: productData.images[0] || "",
    average_rating: 0, // Valeur par défaut
    rating_number: 0, // Valeur par défaut
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.title}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                ${product.price.toFixed(2)}
              </p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="ml-2 text-sm text-gray-500">
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.title}
              className="h-full w-full object-cover object-center"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>

        {/* Add to cart */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
