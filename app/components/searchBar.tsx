"use client";
import { Search, ImageUp } from "lucide-react";
import { useRouter } from 'next/navigation'; // Pour naviguer ou actualiser
import { useRef, useState } from 'react';
import { searchAction } from "@/lib/action";
import { ProductType } from "../definition";
import { WeaviateReturn } from "weaviate-client";

interface SearchBarProps {
    isMobile?: boolean;
    setResults: (results: WeaviateReturn<ProductType> | undefined) => void;
    setIsImageSearch: (imageSearch: boolean) => void;
}

export default  function SearchBar({ isMobile = false, setResults, setIsImageSearch }: SearchBarProps) {


  const [searchImage, setSearchImage] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (searchImage) {
      formData.set('searchImage', searchImage);
      setIsImageSearch(true);
    } else {
      setIsImageSearch(false);
    }
    
    const results = await searchAction(formData);
    setResults(results);

    // Réinitialiser l'état de l'image
    setSearchImage(null);
    // Réinitialiser le formulaire si nécessaire
    formRef.current?.reset();
  };
console.log(searchImage);
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="relative">
      <input
        name="searchText"
        type="text"
        placeholder="Search..."
        className={`pl-8 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 ${
          isMobile ? 'w-full' : 'w-[300px]'
        }`}
        autoFocus={isMobile}
      />
      <Search className="w-4 h-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <label className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
        <ImageUp 
          className="w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors" 
          strokeWidth={2.5}
        />
        <input 
        name="searchImage"
          type="file" 
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setSearchImage(file);
              formRef.current?.requestSubmit();
            }
          }}
        />
      </label>
    </form>
  );
} 