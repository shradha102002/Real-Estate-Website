'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const cityAreaMap = {
  Pune: ['Baner', 'Wakad', 'Koregaon Park'],
  Mumbai: ['Thane', 'Navi Mumbai', 'Andheri'],
  Delhi: ['Saket', 'Dwarka', 'Rohini'],
  Bangalore: ['Whitefield', 'Koramangala', 'Indiranagar'],
};

const allTypes = ['Apartment', 'Villa', 'Studio', 'Penthouse', 'Duplex'];

const priceRanges = [
  { label: 'Any Price', value: '' },
  { label: 'Under ₹50 Lakhs', value: '0-50' },
  { label: '₹50 Lakhs - ₹1 Crore', value: '50-100' },
  { label: '₹1 Crore - ₹2 Crore', value: '100-200' },
  { label: '₹2 Crore+', value: '200-10000' },
];

export default function SearchBar() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    city: '',
    area: '',
    type: '',
    price: '',
  });

  const areas = filters.city ? cityAreaMap[filters.city] || [] : [];

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (filters.city) query.append('city', filters.city);
    if (filters.area) query.append('area', filters.area);
    if (filters.type) query.append('type', filters.type);
    if (filters.price) query.append('price', filters.price);

    router.push(`/properties?${query.toString()}`);
  };

  return (
    <div className="p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center justify-between w-full">
        {/* Type */}
        <select
          className="bg-white/70 text-gray-800 border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/5 focus:outline-none"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Property Type</option>
          {allTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        {/* City */}
        <select
          className="bg-white/70 text-gray-800 border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/5 focus:outline-none"
          value={filters.city}
          onChange={(e) =>
            setFilters({ ...filters, city: e.target.value, area: '' })
          }
        >
          <option value="">Select City</option>
          {Object.keys(cityAreaMap).map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>

        {/* Area */}
        <select
          className="bg-white/70 text-gray-800 border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/5 focus:outline-none"
          value={filters.area}
          onChange={(e) => setFilters({ ...filters, area: e.target.value })}
          disabled={!filters.city}
        >
          <option value="">Select Area</option>
          {areas.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>

        {/* Price */}
        <select
          className="bg-white/70 text-gray-800 border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/5 focus:outline-none"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>

        {/* Search */}
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold px-6 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all w-full md:w-auto"
        >
          🔍 Search
        </button>
      </div>
    </div>
  );
}
