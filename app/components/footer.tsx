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
          <h2 className="text-xl font-bold mb-3">Weavishop</h2>
          <p className="text-gray-600 text-sm max-w-xs">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          
          {/* Réseaux sociaux */}
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

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Features</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Works</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Career</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-4">HELP</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">Customer Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Delivery Details</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-4">FAQ</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">Account</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Manage Deliveries</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Orders</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Payments</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black">Free eBooks</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Development Tutorial</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">How to - Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              Weavishop © 2000-2024. All Rights Reserved
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