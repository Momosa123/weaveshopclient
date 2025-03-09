"use client";

import { useCart } from "@/lib/hooks/useCart";
import { Product } from "@/app/definition";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0] || product.main_image,
      quantity: 1,
    });
    toast.success("Added to cart");
    setIsAdding(false);
  };

  return (
    <button
      type="button"
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      onClick={handleAddToCart}
      disabled={isAdding || product.stock === 0}
    >
      {isAdding
        ? "Adding..."
        : product.stock === 0
          ? "Out of Stock"
          : "Add to Cart"}
    </button>
  );
}
