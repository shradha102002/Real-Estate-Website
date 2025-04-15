'use client';
import { motion } from 'framer-motion';
import { FaBuilding, FaHome, FaCity, FaHotel, FaWarehouse } from 'react-icons/fa';
import SearchBar from './SearchBar';

const iconItems = [
  { label: 'Condo', icon: <FaBuilding size={20} /> },
  { label: 'Family House', icon: <FaHome size={20} /> },
  { label: 'Modern Villa', icon: <FaCity size={20} /> },
  { label: 'Town House', icon: <FaHotel size={20} /> },
  { label: 'Apartment', icon: <FaWarehouse size={20} /> },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden font-poppins">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center max-w-4xl mx-auto"
      >
        <p className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm md:text-base font-semibold mb-4 shadow-lg">
          PROPERTY FOR SALE & FOR RENT AROUND THE WORLD
        </p>

        {/* Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-4 mb-8 flex flex-wrap justify-center gap-4 text-sm sm:text-base"
        >
          {iconItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full shadow-md transition-all duration-300"
            >
              {item.icon}
              {item.label}
            </motion.div>
          ))}
        </motion.div>

        {/* SearchBar */}
        <div className="flex justify-center w-full z-20">
          <SearchBar />
        </div>
      </motion.div>
    </section>
  );
}
