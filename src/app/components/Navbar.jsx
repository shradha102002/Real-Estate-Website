'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Menu,
  X,
  User,
  ChevronDown,
  LogOut,
  Heart,
  LayoutDashboard,
  Home,
  Building,
  MapPin,
  Briefcase,
  Phone,
  Info,
} from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isLoggedIn = false; 

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Properties', href: '/properties', icon: <Building size={18} /> },
    { name: 'Blogs', href: '/blogs', icon: <MapPin size={18} /> },
    { name: 'Agents', href: '/agents', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '/contact', icon: <Phone size={18} /> },
    { name: 'About Us', href: '/about', icon: <Info size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-md text-gray-800 shadow-md transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo4.jpg"
              alt="Realty Logo"
              className="h-15 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map(({ name, href, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 font-bold text-black hover:text-yellow-400 transition"
              >
                {icon}
                {name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <Link
                href="/register"
                className="text-sm font-semibold px-5 py-2 rounded-full border border-black-400 text-blue-400 hover:bg-yellow-400 hover:text-black transition"
              >
                Register
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-full hover:bg-gray-800 transition font-semibold"
                >
                  <User size={18} />
                  <ChevronDown size={16} />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black border shadow-lg rounded-lg text-sm font-medium">
                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
                      <LayoutDashboard size={16} />
                      Dashboard
                    </Link>
                    <Link href="/favorites" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
                      <Heart size={16} />
                      My Favorites
                    </Link>
                    <button className="flex items-center gap-2 w-full text-left px-4 py-3 hover:bg-gray-100">
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-yellow-400">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e293b] text-white px-6 py-5 space-y-4 shadow-md rounded-b-xl text-sm font-medium animate-slideDown">
          {navItems.map(({ name, href, icon }) => (
            <Link key={href} href={href} className="flex items-center gap-2 font-bold text-black hover:text-yellow-400 transition">
              {icon}
              {name}
            </Link>
          ))}

          {!isLoggedIn ? (
            <Link
              href="/register"
              className="block mt-4 px-4 py-2 text-yellow-400 border border-yellow-400 rounded-full text-center hover:bg-yellow-400 hover:text-black transition"
            >
              Register
            </Link>
          ) : (
            <>
              <Link href="/dashboard" className="flex items-center gap-2">
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
              <Link href="/favorites" className="flex items-center gap-2">
                <Heart size={16} />
                My Favorites
              </Link>
              <button className="flex items-center gap-2 w-full text-left">
                <LogOut size={16} />
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
