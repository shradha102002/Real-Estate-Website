'use client';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const iconItems = [
  '🏢 Condo',
  '🏡 Family House',
  '🏘️ Modern Villa',
  '🏙️ Town House',
  '🏨 Apartment',
];

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/img6.jpg')",
      }}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center max-w-4xl w-full px-4"
      >
       <p className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm md:text-base font-semibold mb-4 shadow-lg">
  PROPERTY FOR SALE & FOR RENT AROUND THE WORLD
</p>


        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
          Search and Find Your <span className="text-blue-800">Family House</span>
        </h1>

        {/* Animated Icons */}
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
              whileHover={{ scale: 1.05 }}
              className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full shadow-md transition-all duration-300"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* Search Bar */}
        <div className="flex justify-center w-full">
          <SearchBar />
        </div>
      </motion.div>
    </section>
  );
}
