import Image from 'next/image';
import Link from 'next/link';
import LogoScroll from './logoScroll';

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Desktop Version */}
      <div className="hidden md:block relative h-[600px]">
        <Image
          src="/hero-large.png"
          alt="Fashion couple wearing stylish outfits"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px]">
              <h1 className="text-[56px] leading-tight font-bold mb-4">
                FIND CLOTHES THAT MATCHES YOUR STYLE USING AI
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Use AI to search with text or image for clothes that matches your style. Our advanced AI technology analyzes your preferences and finds the perfect pieces for your wardrobe. Simply describe what you&apos;re looking for or upload a reference image, and let our AI do the work for you.
              </p>
              <Link 
                href="/search" 
                className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Search Now
              </Link>
              <div className="mt-8">
                {/* Container pour les stats */}
                <div className="flex flex-col gap-8">
                  {/* Desktop: tous les éléments en ligne */}
                  <div className="hidden md:flex gap-16">
                    <div>
                      <p className="text-3xl font-bold">200+</p>
                      <p className="text-gray-600">International Brands</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">2,000+</p>
                      <p className="text-gray-600">High-Quality Products</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">30,000+</p>
                      <p className="text-gray-600">Happy Customers</p>
                    </div>
                  </div>

                  {/* Mobile: 2 en haut, 1 centré en bas */}
                  <div className="md:hidden">
                    {/* Première ligne avec 2 éléments côte à côte */}
                    <div className="flex justify-between mb-8">
                      <div className="w-1/2">
                        <p className="text-3xl font-bold">200+</p>
                        <p className="text-gray-600">International Brands</p>
                      </div>
                      <div className="w-1/2">
                        <p className="text-3xl font-bold">2,000+</p>
                        <p className="text-gray-600">High-Quality Products</p>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne avec 1 élément centré */}
                    <div className="flex justify-center">
                      <div>
                        <p className="text-3xl font-bold text-center">30,000+</p>
                        <p className="text-gray-600 text-center">Happy Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="px-6 pt-8 pb-6">
          <h1 className="text-4xl font-integral leading-tight mb-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE USING AI
          </h1>
          <p className="text-gray-600 mb-6">
           Use AI to search with text or image for clothes that matches your style.
          </p>
          <Link 
            href="/shop" 
            className="inline-block w-full bg-black text-white py-4 rounded-full text-center text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Search Now
          </Link>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <p className="text-3xl font-bold">200+</p>
              <p className="text-gray-600">International Brands</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2,000+</p>
              <p className="text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold">30,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-12 right-12 hidden md:block">
        <Star />
      </div>
      <div className="absolute bottom-24 left-24 hidden md:block">
        <Star />
      </div>
      <LogoScroll />    
    </section>
  );
}

function Star() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 0L21.2 10.8L32 16L21.2 21.2L16 32L10.8 21.2L0 16L10.8 10.8L16 0Z" fill="black"/>
    </svg>
  );
} 