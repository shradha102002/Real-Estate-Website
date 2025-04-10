'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-900 via-blue-800 to-indigo-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-white">
            Dream<span className="text-yellow-400">Homes</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Find your dream property across Pune’s finest locations.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-300">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Buy</a></li>
            <li><a href="#" className="hover:text-white transition">Rent</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-300">Popular Areas</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Baner</li>
            <li>Koregaon Park</li>
            <li>Kalyani Nagar</li>
            <li>Viman Nagar</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-300">Connect With Us</h4>
          <div className="flex space-x-5 text-2xl">
            <a href="#" className="hover:text-pink-400 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-indigo-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DreamHomes • All rights reserved 💜
      </div>
    </footer>
  );
};

export default Footer;
