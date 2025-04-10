'use client';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-96">
        <Image
          src="/aboutus.jpg"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-white drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">
        {/* Who We Are */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a passionate team helping people find homes they love. At <span className="font-semibold text-blue-600">PropertyHub</span>,
            we blend technology and personalized service to simplify real estate for buyers, sellers, and agents.
          </p>
        </motion.section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="bg-white rounded-3xl shadow-md p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">🌟 Our Mission</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Our mission is to create India’s most user-friendly real estate experience — where dreams of owning,
              renting, or investing in properties become reality through transparency, innovation, and trust.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-3xl shadow-md p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">🚀 Our Vision</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              We envision a future where technology transforms every aspect of the real estate journey — from discovery
              to documentation. A future that’s seamless, transparent, and empowering for all.
            </p>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <motion.section
          className="bg-blue-100 rounded-3xl p-10 text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold text-blue-800 mb-6">✨ Why Choose PropertyHub?</h4>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg font-medium">
            <div>✅ Verified listings & updated data</div>
            <div>✅ Trusted by 1,000+ clients</div>
            <div>✅ Agent contact & instant inquiry</div>
            <div>✅ Clean interface & filters</div>
          </div>
        </motion.section>
      </div>

      {/* Back to Home */}
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

      <Footer />
    </div>
  );
}
