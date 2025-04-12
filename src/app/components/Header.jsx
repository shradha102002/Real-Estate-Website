import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-yellow-100 shadow-lg py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Website Name */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.jpg" 
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-2xl font-semibold text-blue-600">
            RealEstatePro
          </h1>
        </div>

        {/* Email and Phone */}
        <div className="flex gap-6 text-gray-700">
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
