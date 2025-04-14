'use client';

import { useEffect, useRef, useState } from 'react';

export default function PropertyModal({ property, onClose }) {
  const modalRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setToast('❌ Please fill in all fields');
      return;
    }

    setToast('✅ Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh] animate-fadeIn sm:animate-slideUp transform scale-95 sm:scale-100 transition-all"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        {/* Property Image */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />

        {/* Property Info */}
        <h2 className="text-2xl font-bold text-blue-700">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-blue-500 font-bold text-lg mt-1">{property.price}</p>
        <p className="text-sm text-gray-500 mt-1">{property.type}</p>

        {/* Contact Form */}
        <h3 className="mt-6 font-semibold text-lg text-blue-700">📞 Contact Agent</h3>
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-5 rounded-xl shadow-inner mt-2">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg bg-white text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg bg-white text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg bg-white text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>

        {/* Toast Message */}
        {toast && (
          <div className="mt-4 text-center text-sm text-white bg-green-600 py-2 px-4 rounded-lg animate-fadeIn">
            {toast}
          </div>
        )}

        {/* Dummy India Map */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-blue-700 mb-2">📍 Property Location</h3>
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="India Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160996761!2d72.74109924822905!3d19.082197839324756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63dfd287d8b%3A0x439c1238d9c4cfd4!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1614330175767!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
