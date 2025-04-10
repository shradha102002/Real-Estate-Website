'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, ChevronDown } from 'lucide-react';



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isLoggedIn = false; // Dummy auth state

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            <Link href="/">🏠 RealtyProperties</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600">🏠 Home</Link>
            <Link href="/properties" className="hover:text-blue-600">🏘 Properties</Link>
            <Link href="/locations" className="hover:text-blue-600">📍 Locations</Link>
            <Link href="/agents" className="hover:text-blue-600">💼 Agents</Link>
            <Link href="/contact" className="hover:text-blue-600">📞 Contact</Link>
            <Link href="/about" className="hover:text-blue-600">ℹ️ About Us</Link>
          </div>

          {/* Right-side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/register"
                  className="text-sm px-3 py-1 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-blue-100"
                >
                  <User size={18} />
                  <ChevronDown size={16} />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded text-sm">
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                    <Link href="/favorites" className="block px-4 py-2 hover:bg-gray-100">My Favorites</Link>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-md">
          <Link href="/" className="block">🏠 Home</Link>
          <Link href="/properties" className="block">🏘 Properties</Link>
          <Link href="/locations" className="block">📍 Locations</Link>
          <Link href="/agents" className="block">💼 Agents</Link>
          <Link href="/contact" className="block">📞 Contact</Link>
          <Link href="/about" className="block">ℹ️ About Us</Link>
          {!isLoggedIn ? (
            <>
              <Link href="/register" className="block">Register</Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="block">Dashboard</Link>
              <Link href="/favorites" className="block">My Favorites</Link>
              <button className="block w-full text-left">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
