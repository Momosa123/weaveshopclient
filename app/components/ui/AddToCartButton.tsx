'use client';

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <button 
      className="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors"
      onClick={() => {/* TODO: Ajouter la logique du panier */}}
    >
      Ajouter au panier
    </button>
  );
} 