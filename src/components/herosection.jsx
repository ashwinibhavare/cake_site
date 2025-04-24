import React from 'react';
import heroVideo from '../assets/Herosection/hero.mp4';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-pink-500/40 backdrop-brightness-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          Ashu’s Cake Bakery
        </h1>
        <p className="text-lg md:text-2xl max-w-xl drop-shadow-sm">
          Fresh, delightful cakes made with love. Perfect for every celebration!
        </p>
        <button className="mt-6 bg-white text-pink-500 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-pink-100 transition">
          View Our Cakes
        </button>
      </div>
    </div>
  );
}
