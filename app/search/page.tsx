"use client";
import { WeaviateReturn } from "weaviate-client";
import SearchBar from "../components/searchBar";
import SearchResults from "../components/searchResults";
import { useState } from "react";
import { ProductType } from "../definition";
import Container from "../components/Container";

export default function SearchPage() {
    const [results, setResults] = useState<WeaviateReturn<ProductType> | undefined>(undefined); 

    return (
        <Container>
             <div className="flex flex-col gap-4 mb-6 mt-8 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold text-center">Find your perfect look using AI search powered by Weaviate</h1>
                <SearchBar setResults={setResults} isMobile /> 
            </div>
            <SearchResults results={results}  />

        </Container>
    );
}