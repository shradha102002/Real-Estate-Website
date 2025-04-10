'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const homes = [
  // ... [Same homes array as before]
  // Baner
  { title: 'Modern 3BHK in Baner', location: 'Baner', price: '₹1,20,00,000', image: '/img2.jpg' },
  { title: 'Luxury Duplex in Baner', location: 'Baner', price: '₹2,10,00,000', image: '/img3.jpg' },
  { title: 'Cozy Flat near Balewadi High Street', location: 'Baner', price: '₹95,00,000', image: '/img4.jpg' },

  // Koregaon Park
  { title: 'Charming Villa in Koregaon Park', location: 'Koregaon Park', price: '₹3,50,00,000', image: '/img5.jpg' },
  { title: '2BHK Apartment in Koregaon Park', location: 'Koregaon Park', price: '₹1,05,00,000', image: '/img7.jpg' },
  { title: 'Green View Penthouse in Koregaon Park', location: 'Koregaon Park', price: '₹4,10,00,000', image: '/img8.jpg' },

  // Kalyani Nagar
  { title: 'Elegant Apartment in Kalyani Nagar', location: 'Kalyani Nagar', price: '₹1,75,00,000', image: '/img9.jpg' },
  { title: 'Riverfront Condo in Kalyani Nagar', location: 'Kalyani Nagar', price: '₹2,60,00,000', image: '/img10.jpg' },

  // Aundh
  { title: 'Premium Flat in Aundh', location: 'Aundh', price: '₹1,40,00,000', image: '/img11.jpg' },
  { title: 'Compact 2BHK in Aundh', location: 'Aundh', price: '₹85,00,000', image: '/img12.jpg' },

  // Viman Nagar
  { title: 'Skyline View Apartment in Viman Nagar', location: 'Viman Nagar', price: '₹2,90,00,000', image: '/img13.jpg' },
  { title: 'Modern 3BHK in Viman Nagar', location: 'Viman Nagar', price: '₹1,25,00,000', image: '/img14.jpg' },

  // Hadapsar
  { title: 'Family Home in Hadapsar', location: 'Hadapsar', price: '₹75,00,000', image: '/img15.jpg' },
  { title: 'Row House in Magarpatta City', location: 'Hadapsar', price: '₹1,10,00,000', image: '/img16.jpg' },

  // Bavdhan
  { title: 'Luxury Flat with Hillside View in Bavdhan', location: 'Bavdhan', price: '₹1,60,00,000', image: '/img17.jpg' },
  { title: '2BHK in Bavdhan Budruk', location: 'Bavdhan', price: '₹90,00,000', image: '/img18.jpg' },

  // Sinhagad Road
  { title: 'Farmhouse on Sinhagad Road', location: 'Sinhagad Road', price: '₹67,00,000', image: '/img19.jpg' },
  { title: 'Plot + Bungalow near Khadakwasla', location: 'Sinhagad Road', price: '₹1,80,00,000', image: '/img20.jpg' }
];


export default function PopularHomes() {
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredHomes = homes.filter((home) => {
    const matchLocation = locationFilter ? home.location === locationFilter : true;
    const price = parseInt(home.price.replace(/[^0-9]/g, ''));
    let matchPrice = true;
    if (priceFilter === 'low') matchPrice = price < 10000000;
    if (priceFilter === 'mid') matchPrice = price >= 10000000 && price <= 20000000;
    if (priceFilter === 'high') matchPrice = price > 20000000;
    return matchLocation && matchPrice;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentHomes = filteredHomes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredHomes.length / itemsPerPage);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Popular Homes</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <select onChange={(e) => setLocationFilter(e.target.value)} className="px-4 py-2 rounded border border-gray-300">
          <option value="">All Locations</option>
          {[...new Set(homes.map((h) => h.location))].map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <select onChange={(e) => setPriceFilter(e.target.value)} className="px-4 py-2 rounded border border-gray-300">
          <option value="">Any Price</option>
          <option value="low">Below ₹1 Cr</option>
          <option value="mid">₹1 Cr - ₹2 Cr</option>
          <option value="high">Above ₹2 Cr</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentHomes.map((home, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={home.image} alt={home.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{home.title}</h3>
              <p className="text-gray-600">{home.location}</p>
              <p className="text-blue-600 font-bold mt-2">{home.price}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setShowModal(true)}
              >
                Contact Agent
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-4 py-2 border rounded ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">
            <button className="absolute top-3 right-4 text-black text-xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-lg font-bold mb-4">Contact Agent</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="p-2 border rounded" />
              <input type="email" placeholder="Your Email" className="p-2 border rounded" />
              <textarea placeholder="Message" className="p-2 border rounded"></textarea>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
