'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularHomes from './components/PopularHomes';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularHomes />
      <Footer />
    </>
  );
}
