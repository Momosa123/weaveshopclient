'use client';
import Product from "./Product";
import { useEffect, useState } from 'react';
import { useImageSearch } from '../context/ImageSearchContext';

interface SearchResultsProps {
  query: string;
  isImageSearch: boolean;
}

interface ProductResult {
  uuid: string;
  properties: {
    main_image: string;
    title: string;
    average_rating: number;
    price: number;
  };
}

export default function SearchResults({ query, isImageSearch }: SearchResultsProps) {
  const { searchImage } = useImageSearch();
  const [results, setResults] = useState<ProductResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        let response;
        console.log('Search params:', { isImageSearch, searchImage: !!searchImage });
        
        if (isImageSearch && searchImage) {
          console.log('Making image search request');
          response = await fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify({ query: searchImage, isImage: true }),
            headers: {
              'Content-Type': 'application/json',
            }
          });
        } else {
          console.log('Making text search request');
          response = await fetch(`/api/search?search=${encodeURIComponent(query)}`);
        }
        
        const data = await response.json();
        console.log('Search response:', data);
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setResults(data.objects || []);
      } catch (err) {
        console.error('Search error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch results');
      } finally {
        setLoading(false);
      }
    };

    if (query || (isImageSearch && searchImage)) {
      fetchResults();
    }
  }, [query, isImageSearch, searchImage]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (results.length === 0) {
    return <div className="text-center py-8">No results found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((product) => (
          <Product
            key={product.uuid}
            main_image={product.properties.main_image}
            title={product.properties.title}
            average_rating={product.properties.average_rating}
            price={product.properties.price}
          />
        ))}
      </div>
    </div>
  );
}