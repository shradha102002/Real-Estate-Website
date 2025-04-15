'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4ff]">
       {/* 🧭 Navbar */}
                <Navbar />
  

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/conus.jpg"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="rounded-b-2xl shadow"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form with 3D Gradient */}
      <div className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-3xl shadow-xl p-1 bg-gradient-to-tr from-blue-500 via-pink-400 to-yellow-300">
          <div className="bg-white rounded-[inherit] p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">We’d love to hear from you</h2>
            <form className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Ritvik Patil"
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label className="text-sm font-medium text-gray-600 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Regarding property inquiry"
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label className="text-sm font-medium text-gray-600 mb-1">Message</label>
                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div className="sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mb-10">
        <Link href="/">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg transition">
            ⬅️ Back to Home
          </button>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
