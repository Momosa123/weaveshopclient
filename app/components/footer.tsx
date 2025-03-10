import Image from 'next/image';
import Link from 'next/link';
import Newsletter from './newsletter';

export default function Footer() {
  return (
    <>
    <Newsletter />   
    <footer className="bg-gray-50 px-6 py-12 md:px-12 pt-24 mt-3">
      <div className="max-w-7xl mx-auto">
        {/* Logo et description */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl font-bold mb-3">Hakk</h2>
          <p className="text-gray-600 text-sm max-w-xs">
            Nous proposons des vêtements qui correspondent à votre style et que vous êtes fier de porter. Pour femmes et hommes.
          </p>
          
          {/* Liens sociaux */}
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" /* Twitter icon */ />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" /* Facebook icon */ />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" /* Instagram icon */ />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" /* Github icon */ />
            </Link>
          </div>
        </div>

          {/* Liens de navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-semibold mb-4">ENTREPRISE</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">À propos</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Caractéristiques</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Nos réalisations</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Carrières</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-4">AIDE</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">Service Client</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Détails de livraison</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Conditions générales</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Politique de confidentialité</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-4">FAQ</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">Mon compte</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Gérer mes livraisons</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Commandes</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Paiements</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-4">RESSOURCES</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">Guides gratuits</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Tutoriels</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Blog conseils</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Chaîne YouTube</Link></li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              Weavishop © 2000-2024. Tous droits réservés
            </p>
            <div className="flex items-center gap-6">
              <Image src="/visa-badge.png" alt="Visa" width={60} height={38} className="object-contain" />
              <Image src="/mastercard.png" alt="Mastercard" width={60} height={38} className="object-contain" />
              <Image src="/paypal-badge.png" alt="PayPal" width={60} height={38} className="object-contain" />
              <Image src="/apple-badge.png" alt="Apple Pay" width={60} height={38} className="object-contain" />
              <Image src="/google-badge.png" alt="Google Pay" width={60} height={38} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
} 