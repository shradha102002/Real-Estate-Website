'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/img6.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />  {/* make it darker */}
      

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white text-center px-4"
      >
        <p className="text-sm mb-2">PROPERTY FOR SALE & FOR RENT AROUND THE WORLD</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Search and Find Your <span className="text-orange-400">Family House</span>
        </h1>

        {/* Icons */}
        <div className="mt-4 mb-8 flex flex-wrap justify-center gap-6 text-white text-sm">
          <div>🏢 Condo</div>
          <div>🏡 Family House</div>
          <div>🏘️ Modern Villa</div>
          <div>🏙️ Town House</div>
          <div>🏨 Apartment</div>
        </div>

        {/* SEARCH BAR CENTERED */}
        <div className="flex justify-center">
        
        </div>
      </motion.div>
    </section>
  );
}
