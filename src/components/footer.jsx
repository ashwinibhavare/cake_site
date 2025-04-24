import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Ashu’s Bakery</h2>
          <p className="text-sm">
            Delicious cakes made with love and passion.  
            We bake fresh every day to sweeten your moments!
          </p>
        </div>

        {/* Center Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">About Us</a></li>
            <li><a href="#" className="hover:text-pink-500">Gallery</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 123 Cake Street, Sweet City</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ hello@ashubakery.com</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ashu’s Bakery. All rights reserved.
      </div>
    </footer>
  );
}
