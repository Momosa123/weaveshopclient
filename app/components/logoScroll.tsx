import Image from 'next/image';

export default function LogoScroll() {
  const logos = [
    { src: '/versace-logo.png', alt: 'Versace' },
    { src: '/zara-logo.png', alt: 'Zara' },
    { src: '/gucci-logo.png', alt: 'Gucci' },
    { src: '/prada-logo.png', alt: 'Prada' },
    { src: '/calvin-logo.png', alt: 'Calvin Klein' },
  ];

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <div className="inline-flex animate-scroll">
        {/* Premier groupe de logos */}
        <div className="flex">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-12 w-[200px] flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
        {/* Deuxième groupe de logos (copie exacte) */}
        <div className="flex">
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-12 w-[200px] flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 