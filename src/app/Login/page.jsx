'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/login.jpg')" }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Welcome Back</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm mt-5 text-center text-gray-700">
            Don’t have an account?{' '}
            <Link href="/register" className="text-blue-600 font-medium hover:underline">
              register
            </Link>
          </p>

          {/* Back to Home Link */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm transition"
            >
              ⬅️ Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
