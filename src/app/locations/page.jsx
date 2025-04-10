'use client';
import { useState } from 'react';
import { LocateIcon, Loader } from 'lucide-react';

export default function LocationButton() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null); // ✅ FIXED

  const handleDetectLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      alert('Geolocation is not supported.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        setLoading(false);
      },
      () => {
        alert('Unable to fetch location.');
        setLoading(false);
      }
    );
  };

  return (
    <button
      onClick={handleDetectLocation}
      className="text-sm px-3 py-1 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition flex items-center gap-2"
    >
      {loading ? (
        <>
          <Loader className="animate-spin" size={16} /> Detecting...
        </>
      ) : (
        <>
          <LocateIcon size={16} /> Use My Location
        </>
      )}
    </button>
  );
}
