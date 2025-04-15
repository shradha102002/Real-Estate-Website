'use client';

import { Mail, Phone, MessageSquare, Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AgentProfile() {
  const agents = [
    {
      name: 'Sanket Pawar',
      role: 'Senior Real Estate Agent',
      bio: 'Helping people find their dream homes for over 10 years. Specializing in luxury apartments, villas, and commercial properties in Pune & Mumbai.',
      email: 'johndoe@example.com',
      phone: '+91 9876543210',
      image: '/agent2.jpg',
      social: {
        facebook: 'https://facebook.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        instagram: 'https://instagram.com/johndoe',
      },
    },
    {
      name: 'Priya Sharma',
      role: 'Real Estate Consultant',
      bio: 'Focused on customer-first service, helping buyers navigate the property market in Thane and Navi Mumbai.',
      email: 'priya@example.com',
      phone: '+91 8765432109',
      image: '/agent.jpg',
      social: {
        facebook: 'https://facebook.com/priya',
        linkedin: 'https://linkedin.com/in/priyasharma',
        instagram: 'https://instagram.com/priyarealtor',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navbar at the top */}
      <Navbar /><br/>

      <h1 className="text-4xl font-bold text-center text-gray-800 mt-16 mb-12">
        Meet Our Top Agents
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:shadow-2xl transition duration-300"
          >
            <Image
              src={agent.image}
              alt={agent.name}
              width={160}
              height={160}
              className="rounded-full object-cover border-4 border-blue-400 shadow-md w-[160px] h-[160px]"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{agent.name}</h2>
              <p className="text-gray-500 text-sm mb-2">{agent.role}</p>
              <p className="text-gray-600 mb-4 max-w-md">{agent.bio}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                <a href={`tel:${agent.phone}`} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
                  <Phone size={18} /> Call
                </a>
                <a href={`mailto:${agent.email}`} className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
                  <Mail size={18} /> Email
                </a>
                <button className="bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2">
                  <MessageSquare size={18} /> Message
                </button>
              </div>
              <div className="flex gap-4">
                <a href={agent.social.facebook} target="_blank" rel="noreferrer">
                  <Facebook className="text-blue-600 hover:text-blue-800" />
                </a>
                <a href={agent.social.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="text-blue-500 hover:text-blue-700" />
                </a>
                <a href={agent.social.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="text-pink-500 hover:text-pink-600" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Properties */}
      <div className="mt-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Properties</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img src={`/img7.jpg`} alt="Property" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">3BHK Luxury Apartment</h3>
                <p className="text-sm text-gray-500">Baner, Pune • ₹85L</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-16">
        <Link href="/" passHref>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition">
            ⬅️ Back to Home
          </button>
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-10 p-0 m-0">
        <Footer />
      </div>
    </div>
  );
}
