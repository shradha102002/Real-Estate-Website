// src/app/page.jsx
'use client';

import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularHomes from './components/PopularHomes';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate Pro</title>
      </Head>
      <Navbar />
      <Hero />
      <PopularHomes />
      <Footer />
      
    </>
  );
}
