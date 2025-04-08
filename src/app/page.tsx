'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/hero-bg.jpg" // Replace with your image name
        alt="Real Estate Hero"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to Dream Homes
        </h1>
      </div>
    </div>
  );
}
