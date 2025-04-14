'use client';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-yellow-100 shadow-lg py-4 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Logo & Website Name */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/logo.jpg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-600">
            RealEstatePro
          </h1>
        </div>

        {/* Email and Phone */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm sm:text-base text-gray-700">
          <a href="mailto:info@realestatepro.com" className="hover:text-blue-600">
            info@realestatepro.com
          </a>
          <a href="tel:+919876543210" className="hover:text-blue-600">
            +91 9876543210
          </a>
        </div>
      </div>
    </header>
  );
}
