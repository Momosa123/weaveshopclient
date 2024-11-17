'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ImageSearchContextType {
  searchImage: string | null;
  setSearchImage: (image: string | null) => void;   
}

const ImageSearchContext = createContext<ImageSearchContextType | undefined>(undefined);

export function ImageSearchProvider({ children }: { children: ReactNode }) {
  const [searchImage, setSearchImage] = useState<string | null>(null);
  
  return (
    <ImageSearchContext.Provider value={{ searchImage, setSearchImage }}>
      {children}
    </ImageSearchContext.Provider>
  );
}

export function useImageSearch() {
  const context = useContext(ImageSearchContext);
  if (context === undefined) {
    throw new Error('useImageSearch must be used within an ImageSearchProvider');
  }
  return context;
} 