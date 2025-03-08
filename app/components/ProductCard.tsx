import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@prisma/client'

interface ProductCardProps {
  product: Product & {
    category: {
      name: string
    }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
      {product.stock <= 5 && product.stock > 0 && (
        <p className="mt-1 text-sm text-red-500">Only {product.stock} left!</p>
      )}
      {product.stock === 0 && (
        <p className="mt-1 text-sm text-red-500">Out of stock</p>
      )}
    </Link>
  )
} 