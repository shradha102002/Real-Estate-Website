// src/components/PropertyList.jsx
'use client';
import { useState } from 'react';
import PropertyModel from './PropertyModel';



const properties = [
  {
    id: 1,
    title: 'Elegant Apartment in Koregaon Park',
    location: 'Koregaon Park, Pune',
    price: '₹75 Lakhs',
    type: 'Apartment',
    image: '/img1.jpg',
  },
  {
    id: 2,
    title: 'Luxury Villa with Garden',
    location: 'Baner, Pune',
    price: '₹2.5 Cr',
    type: 'Villa',
    image: '/img2.jpg',
  },
  {
    id: 3,
    title: 'Affordable 2BHK Flat',
    location: 'Wakad, Pune',
    price: '₹45 Lakhs',
    type: 'Apartment',
    image: '/img3.jpg',
  },
  {
    id: 4,
    title: 'Modern Studio Apartment',
    location: 'Koregaon Park, Pune',
    price: '₹35 Lakhs',
    type: 'Studio',
    image: '/img4.jpg',
  },
  {
    id: 5,
    title: 'Spacious 3BHK Family Home',
    location: 'Baner, Pune',
    price: '₹1.2 Cr',
    type: 'Apartment',
    image: '/img5.jpg',
  },
  {
    id: 6,
    title: 'Compact 1BHK Starter Home',
    location: 'Wakad, Pune',
    price: '₹30 Lakhs',
    type: 'Apartment',
    image: '/img6.jpg',
  },
  {
    id: 7,
    title: 'Penthouse with City View',
    location: 'Baner, Pune',
    price: '₹3 Cr',
    type: 'Penthouse',
    image: '/img7.jpg',
  },
  {
    id: 8,
    title: 'Cozy Studio for Professionals',
    location: 'Koregaon Park, Pune',
    price: '₹40 Lakhs',
    type: 'Studio',
    image: '/img8.jpg',
  },
  {
    id: 9,
    title: 'Luxury Duplex Villa',
    location: 'Baner, Pune',
    price: '₹2.8 Cr',
    type: 'Villa',
    image: '/img9.jpg',
  },
  {
    id: 10,
    title: '3BHK Corner Apartment',
    location: 'Wakad, Pune',
    price: '₹80 Lakhs',
    type: 'Apartment',
    image: '/img10.jpg',
  },
  {
    id: 11,
    title: 'Garden Facing Flat',
    location: 'Koregaon Park, Pune',
    price: '₹90 Lakhs',
    type: 'Apartment',
    image: '/img11.jpg',
  },
  {
    id: 12,
    title: 'Fully Furnished Studio',
    location: 'Baner, Pune',
    price: '₹38 Lakhs',
    type: 'Studio',
    image: '/img12.jpg',
  },
  {
    id: 13,
    title: 'Premium 2BHK',
    location: 'Wakad, Pune',
    price: '₹55 Lakhs',
    type: 'Apartment',
    image: '/img13.jpg',
  },
  {
    id: 14,
    title: 'Modern Duplex with Terrace',
    location: 'Baner, Pune',
    price: '₹1.5 Cr',
    type: 'Duplex',
    image: '/img14.jpg',
  },
  {
    id: 15,
    title: 'Penthouse in Prime Area',
    location: 'Koregaon Park, Pune',
    price: '₹2.2 Cr',
    type: 'Penthouse',
    image: '/img15.jpg',
  },
  {
    id: 16,
    title: 'Economical 1BHK',
    location: 'Wakad, Pune',
    price: '₹28 Lakhs',
    type: 'Apartment',
    image: '/img16.jpg',
  },
  {
    id: 17,
    title: 'Stylish Villa with Pool',
    location: 'Baner, Pune',
    price: '₹3.5 Cr',
    type: 'Villa',
    image: '/img17.jpg',
  },
  {
    id: 18,
    title: 'Park View 2BHK Flat',
    location: 'Koregaon Park, Pune',
    price: '₹70 Lakhs',
    type: 'Apartment',
    image: '/img18.jpg',
  },
  {
    id: 19,
    title: 'Compact Studio with Balcony',
    location: 'Wakad, Pune',
    price: '₹34 Lakhs',
    type: 'Studio',
    image: '/img19.jpg',
  },
  {
    id: 20,
    title: 'Designer Home for Sale',
    location: 'Baner, Pune',
    price: '₹1.9 Cr',
    type: 'Villa',
    image: '/img20.jpg',
  },
  {
    id: 21,
    title: 'Smart Home Apartment',
    location: 'Koregaon Park, Pune',
    price: '₹85 Lakhs',
    type: 'Apartment',
    image: '/img21.jpg',
  },
  {
    id: 22,
    title: 'Luxury 4BHK with Parking',
    location: 'Baner, Pune',
    price: '₹2.75 Cr',
    type: 'Apartment',
    image: '/img22.jpg',
  },
  {
    id: 23,
    title: 'Simple 2BHK in Wakad',
    location: 'Wakad, Pune',
    price: '₹50 Lakhs',
    type: 'Apartment',
    image: '/img23.jpg',
  },
  {
    id: 24,
    title: 'Top Floor Penthouse',
    location: 'Koregaon Park, Pune',
    price: '₹1.9 Cr',
    type: 'Penthouse',
    image: '/img24.jpg',
  },
  {
    id: 25,
    title: 'Budget 1BHK in Baner',
    location: 'Baner, Pune',
    price: '₹32 Lakhs',
    type: 'Apartment',
    image: '/img25.jpg',
  },
];

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}



const allAreas = ['Baner', 'Wakad', 'Koregaon Park'];
const allTypes = ['Apartment', 'Villa', 'Studio', 'Penthouse', 'Duplex'];

export default function PropertyList() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({ area: '', type: '' });
  const [searchClicked, setSearchClicked] = useState(false);

  // Handle search click
  const handleSearch = () => {
    setSearchClicked(true);
  };

  // Filter properties
  const filteredProperties = properties.filter((p) => {
    const areaMatch = filters.area ? p.location.includes(filters.area) : true;
    const typeMatch = filters.type ? p.type === filters.type : true;
    return areaMatch && typeMatch;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🏠 Property Listings</h1>

      {/* Search Filters */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 mb-6">
        <select
          className="border p-2 rounded w-full md:w-1/3"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Select Property Type</option>
          {allTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded w-full md:w-1/3"
          value={filters.area}
          onChange={(e) => setFilters({ ...filters, area: e.target.value })}
        >
          <option value="">Select Area</option>
          {allAreas.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Filtered Property Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(searchClicked ? filteredProperties : properties).map((property) => (
          <div
            key={property.id}
            className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            onClick={() => setSelectedProperty(property)}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-500 font-bold">{property.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {searchClicked && filteredProperties.length === 0 && (
        <div className="text-center text-gray-500 mt-6">No matching properties found.</div>
      )}

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModel
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      
    </div>
  );
}