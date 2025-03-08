import Image from 'next/image';
import Link from 'next/link';
import LogoScroll from './logoScroll';

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Desktop Version */}
      <div className="hidden md:block relative h-[600px]">
        <Image
          src="/hero-black.jpg"
          alt="Mannequin portant une tenue élégante"
          fill
          priority
          className="object-cover object-[center_29%]"
        />
        <div className="absolute inset-0 flex items-center bg-black/30">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px]">
              <h1 className="text-[56px] leading-tight font-bold mb-4 text-white">
                TROUVEZ DES VÊTEMENTS QUI CORRESPONDENT À VOTRE STYLE
              </h1>
              <p className="text-lg text-white mb-8">
                Découvrez notre collection soigneusement sélectionnée de mode haut de gamme. Du casual à l&apos;élégant, trouvez les pièces parfaites qui expriment votre style unique.
              </p>
              <Link 
                href="/search" 
                className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Acheter Maintenant
              </Link>
              <div className="mt-8">
                <div className="flex flex-col gap-8">
                  <div className="hidden md:flex gap-16">
                    <div>
                      <p className="text-3xl font-bold text-white">200+</p>
                      <p className="text-gray-200">Marques Internationales</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">2,000+</p>
                      <p className="text-gray-200">Produits de Qualité</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">30,000+</p>
                      <p className="text-gray-200">Clients Satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden relative">
        <div className="relative h-[400px]">
          <Image
            src="/hero-black.jpg"
            alt="Mannequin portant une tenue élégante"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30 px-6 flex flex-col">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-white mt-4">
              TROUVEZ DES VÊTEMENTS QUI CORRESPONDENT À VOTRE STYLE
            </h1>
            <div className="flex-grow" />
            <Link 
              href="/shop" 
              className="inline-block w-full bg-white text-black py-4 rounded-full text-center text-lg font-medium hover:bg-gray-100 transition-colors mb-8"
            >
              Acheter Maintenant
            </Link>
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
      <path d="M16 0L21.2 10.8L32 16L21.2 21.2L16 32L10.8 21.2L0 16L10.8 10.8L16 0Z" fill="white"/>
    </svg>
  );
} 