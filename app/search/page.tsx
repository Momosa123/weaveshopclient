"use client";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import { Product } from "../definition";
import Container from "../components/Container";
import SimilarProducts from "../components/similarProducts";

export default function SearchPage() {
  const [results, setResults] = useState<Product[] | undefined>(undefined);

  return (
    <Container>
      <div className="flex flex-col gap-4 mb-6 mt-8 max-w-3xl mx-auto pt-[72px]">
        <h1 className="text-2xl font-bold text-center">
          Find your perfect look
        </h1>
        <SearchBar setResults={setResults} isMobile />
      </div>
      <SimilarProducts similarProducts={results} title="Search Results" />
    </Container>
  );
}
