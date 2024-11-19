"use client";
import { WeaviateReturn } from "weaviate-client";
import SearchBar from "../components/searchBar";
import SearchResults from "../components/searchResults";
import { useState } from "react";
import { ProductType } from "../definition";

export default function SearchPage() {
    const [results, setResults] = useState<WeaviateReturn<ProductType> | undefined>(undefined); 
    const [isImageSearch, setIsImageSearch] = useState(false);
   
    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <SearchBar setResults={setResults} setIsImageSearch={setIsImageSearch} isMobile />  
            <SearchResults results={results} isImageSearch={isImageSearch} />
        </div>
    );
}