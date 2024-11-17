"use client";
import { Search, ImageUp } from "lucide-react";
import { searchProductsByImage, searchProductsByText } from "@/utils/searchProducts";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface SearchBarProps {
  isMobile?: boolean;
  onClose?: () => void;
  onSearchResults?: (results: any) => void;
}

export default  function SearchBar({ isMobile = false, onClose, onSearchResults }: SearchBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleTextSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchText = formData.get('search') as string;
    const params = new URLSearchParams(searchParams);

    if (searchText){
      params.set('search',searchText)
    }else{
    params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`);

  };

  const handleImageSearch = async (file: File) => {
    try {
      const results = await searchProductsByImage(file);
      if (onSearchResults) {
        onSearchResults(results);
      }
    } catch (error) {
      console.error('Image search failed:', error);
    }
  };

  return (
    <form onSubmit={handleTextSearch} className="relative">
      <input
        name="search"
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
          className="w-4 h-4 text-blue-500 hover:text-blue-700 transition-colors" 
          strokeWidth={2.5}
        />
        <input 
          type="file" 
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              handleImageSearch(file);
            }
          }}
        />
      </label>
    </form>
  );
} 