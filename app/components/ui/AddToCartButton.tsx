'use client';

interface AddToCartButtonProps {
  onClick: () => void;
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button 
      className="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors"
      onClick={onClick}
    >
      Ajouter au panier
    </button>
  );
} 