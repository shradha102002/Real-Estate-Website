'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isLoggedIn = false; // Dummy auth state

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur shadow-md text-gray-900 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-3xl font-extrabold text-blue-700 tracking-wide">
            🏠 RealtyProperties
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-base font-bold">
            {[
              { label: '🏠 Home', href: '/' },
              { label: '🏘 Properties', href: '/properties' },
              { label: '📍 Blogs', href: '/blogs' },
              { label: '💼 Agents', href: '/agents' },
              { label: '📞 Contact', href: '/contact' },
              { label: 'ℹ️ About Us', href: '/about' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-blue-700 transition duration-200 ease-in-out"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right-side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <Link
                href="/register"
                className="text-sm font-bold px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200"
              >
                Register
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-blue-100 font-semibold"
                >
                  <User size={18} />
                  <ChevronDown size={16} />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded-lg text-sm font-medium">
                    <Link href="/dashboard" className="block px-4 py-3 hover:bg-gray-100">Dashboard</Link>
                    <Link href="/favorites" className="block px-4 py-3 hover:bg-gray-100">My Favorites</Link>
                    <button className="block w-full text-left px-4 py-3 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-700"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-5 space-y-4 shadow-md rounded-b-lg animate-slideDown text-base font-bold">
          {[
            { label: '🏠 Home', href: '/' },
            { label: '🏘 Properties', href: '/properties' },
            { label: '📍 Blogs', href: '/blogs' },
            { label: '💼 Agents', href: '/agents' },
            { label: '📞 Contact', href: '/contact' },
            { label: 'ℹ️ About Us', href: '/about' },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="block hover:text-blue-700">
              {label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <Link href="/register" className="block text-blue-600 hover:underline">
              Register
            </Link>
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
