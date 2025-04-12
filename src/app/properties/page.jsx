'use client';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';
import Link from 'next/link';

export default function PropertiesPage() {
  return (
    <div className="m-0 p-0">
      
      <Header />

      <section className="m-0 p-0 max-w-7xl mx-auto">
        <PropertyList />

        
        
        {/* Back to Home Button Centered */}
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
