'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Residential Areas in Pune for Investment in 2025',
    image: '/blog1.jpg',
    snippet: 'Explore the best neighborhoods in Pune for real estate investment this year. From Baner to Hinjewadi...',
  },
  {
    id: 2,
    title: 'Buying vs Renting: What’s Right For You?',
    image: '/blog2.jpg',
    snippet: 'Not sure whether to rent or buy your next home? Here’s a breakdown of pros, cons, and smart tips...',
  },
  {
    id: 3,
    title: 'How to Prepare Your Home for Sale – Expert Checklist',
    image: '/blog3.jpg',
    snippet: 'Planning to sell your home? Maximize your property value with this essential preparation checklist...',
  },
  {
    id: 4,
    title: 'Understanding Real Estate Documents in India',
    image: '/blog4.jpg',
    snippet: 'Confused by property paperwork? This guide explains sale deeds, agreements, and registration essentials...',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50 to-white">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🖼️ Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/property.jpg"
          alt="Our Blog"
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            📝 PropertyHub Blog
          </motion.h1>
        </div>
      </div>

      {/* 📰 Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-blue-800">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.snippet}</p>
                <Link href={`/blog/${blog.id}`}>
                  <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                    Read More →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔙 Back to Home */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/">
          <button className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg transition">
            ⬅️ Back to Home
          </button>
        </Link>
      </motion.div>

      {/* 📩 Footer */}
      <Footer />
    </div>
  );
}
