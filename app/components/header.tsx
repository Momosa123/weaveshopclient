"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBasket, Search, User } from "lucide-react";
/* import SearchBar from "./searchBar" */
    
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 px-4 md:px-[80px] py-4">
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
          <Link href="/"><h1 className="text-2xl font-bold text-center flex-1 md:flex-none">HAKK</h1></Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/search">Rechercher</Link>
          <Link href="/">Promotions</Link>
          <Link href="/">Nouveautés</Link>
          <Link href="/">Marques</Link>
        </div>

        {/* Right section: Search and Basket */}
        <div className="flex items-center gap-4">
          {/* Desktop search */}
        {/*   <div className="hidden md:block">
            <SearchBar />
          </div> */}

          {/* Mobile search button */}
          <button 
            className="md:hidden"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="w-6 h-6" />
          </button>

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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Rechercher</h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2"
              >
                ✕
              </button>
            </div>
          {/*   <SearchBar isMobile onClose={() => setIsSearchOpen(false)} /> */}
          </div>
        </div>
      )}

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4">
            <Link href="/search" className="py-2 hover:bg-gray-100">Rechercher</Link>
            <Link href="/" className="py-2 hover:bg-gray-100">Promotions</Link>
            <Link href="/" className="py-2 hover:bg-gray-100">Nouveautés</Link>
            <Link href="/" className="py-2 hover:bg-gray-100">Marques</Link>
          </div>
        </div>
      )}
    </div>
  );
}
