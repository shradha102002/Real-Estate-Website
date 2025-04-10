'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import PropertyList from '../components/PropertyList';

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        
        <PropertyList />
      </div>
      <Footer />
    </>
  );
}
