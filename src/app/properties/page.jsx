'use client';

import { Suspense } from 'react';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Make sure you import the Navbar component

export default function PropertiesPage() {
  return (
    <div className="m-0 p-0">
      {/* Include Navbar at the top */}
      <Navbar />

     

      <section className="m-0 p-0 max-w-7xl mx-auto pt-20">
        {/* ✅ Wrapped PropertyList in Suspense */}
        <Suspense fallback={<div className="text-center py-10">Loading properties...</div>}>
          <PropertyList />
        </Suspense>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-10 mb-10">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
