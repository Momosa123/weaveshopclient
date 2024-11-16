"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBasket, Search, User, ImageUp } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative px-4 md:px-[80px] py-4">
      <div className="flex items-center justify-between">
        {/* Left section with hamburger and logo */}
        <div className="flex items-center gap-4 flex-1 md:flex-none">
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image 
              src="/hamburger-button.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
          <h1 className="text-2xl font-bold text-center flex-1 md:flex-none">WEAVISHOP</h1>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/">Shop</Link>
          <Link href="/about">On Sale</Link>
          <Link href="/contact">New Arrivals</Link>
          <Link href="/contact">Brands</Link>
        </div>

        {/* Right section: Search and Basket */}
        <div className="flex items-center gap-4">
          {/* Search - Icon only on mobile, full input on desktop */}
          <div className="relative">
            <button 
              className="md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-6 h-6" />
            </button>
            
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-[300px]"
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
                      console.log('File selected:', file);
                      // Add your image search logic here
                    }
                  }}
                />
              </label>
            </div>
          </div>
          
          <button className="relative">
            <ShoppingBasket className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>

          <button className="relative">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="px-4 py-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2"
              >
                ✕
              </button>
            </div>
            
            {/* Search input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500"
                autoFocus
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
                      console.log('File selected:', file);
                      // Add your image search logic here
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4">
            <Link href="/" className="py-2 hover:bg-gray-100">Shop</Link>
            <Link href="/about" className="py-2 hover:bg-gray-100">On Sale</Link>
            <Link href="/contact" className="py-2 hover:bg-gray-100">New Arrivals</Link>
            <Link href="/contact" className="py-2 hover:bg-gray-100">Brands</Link>
          </div>
        </div>
      )}
    </div>
  );
}
