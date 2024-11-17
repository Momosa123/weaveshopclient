"use client";
import { Search, ImageUp } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { fileToBase64 } from '@/utils/fileToBase64';
import { useImageSearch } from '../context/ImageSearchContext';
import { useRef } from 'react';

interface SearchBarProps {
  isMobile?: boolean;
  onClose?: () => void;
  onSearchResults?: (results: any) => void;
}

export default  function SearchBar({ isMobile = false, onClose, onSearchResults }: SearchBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { setSearchImage } = useImageSearch();
  const formRef = useRef<HTMLFormElement>(null);

  const handleTextSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchText = formData.get('search') as string;
    const params = new URLSearchParams(searchParams);
    
    if (searchText) {
      params.set('search', searchText);
      params.delete('imageSearch');
    }else{
      params.delete('search');
    }
    replace(`${pathname}?${params}`);
    
    formRef.current?.reset();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        throw new Error('File must be an image');
      }

      const base64Image = await fileToBase64(file);
      if (base64Image) {
        setSearchImage(base64Image);
        const params = new URLSearchParams(searchParams);
        params.set('imageSearch', 'true');
        replace(`${pathname}?${params.toString()}`);
      }
    } catch (error) {
      console.error('Image search error:', error);
      alert(error instanceof Error ? error.message : 'Failed to process image');
    } finally {
      // Reset the file input
      e.target.value = '';
    }
  };

  return (
    <form ref={formRef} onSubmit={handleTextSearch} className="relative">
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
                handleImageUpload(e);
            }
          }}
        />
      </label>
    </form>
  );
} 