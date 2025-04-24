import React, { useState, useEffect } from 'react';

export default function NavbarTransparent() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          scrolled ? 'bg-pink-500/70 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Ashu’s Bakery</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            <li><a href="#" className="hover:text-pink-400">Home</a></li>
            <li><a href="#" className="hover:text-pink-400">About Us</a></li>
            <li><a href="#" className="hover:text-pink-400">Gallery</a></li>
            <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar for mobile */}
      <div className={`fixed top-0 left-0 h-full w-100 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      } shadow-lg`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-pink-600 mb-6">Menu</h2>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
