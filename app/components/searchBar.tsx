"use client";
import { Search, ImageUp } from "lucide-react";
import { useRef } from "react";
import { searchAction } from "@/lib/action";
import { Product } from "../definition";

interface SearchBarProps {
  isMobile?: boolean;
  setResults: (results: Product[] | undefined) => void;
}

export default function SearchBar({
  isMobile = false,
  setResults,
}: SearchBarProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const results = await searchAction(formData);
    setResults(results);

    // Reset form
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="relative">
      <input
        name="searchText"
        type="text"
        placeholder="Search..."
        className={`pl-8 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 ${
          isMobile ? "w-full" : "w-[300px]"
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
              formRef.current?.requestSubmit();
            }
          }}
        />
      </label>
    </form>
  );
}
