import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
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
    title: 'Modern Villa in Baner',
    location: 'Baner, Pune',
    price: '₹1.2 Cr',
    type: 'Villa',
    image: '/img2.jpg',
  },
  {
    id: 3,
    title: 'Flat in Thane',
    location: 'Thane, Mumbai',
    price: '₹90 Lakhs',
    type: 'Apartment',
    image: '/img3.jpg',
  },
  {
    id: 4,
    title: 'Studio in Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹55 Lakhs',
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


export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const city = searchParams.get('city');
    const area = searchParams.get('area');
    const type = searchParams.get('type');

    const result = properties.filter((p) => {
      const [areaName, cityName] = p.location.split(',').map((s) => s.trim());
      const matchCity = city ? cityName === city : true;
      const matchArea = area ? areaName === area : true;
      const matchType = type ? p.type === type : true;
      return matchCity && matchArea && matchType;
    });

    setFilteredProperties(result);
  }, [searchParams]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Properties</h1>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProperties.map((property) => (
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

      {filteredProperties.length === 0 && (
        <div className="text-center text-gray-500 mt-6">No matching properties found.</div>
      )}

      {selectedProperty && (
        <PropertyModel
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
