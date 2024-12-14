import React from 'react';
import { Play, Info } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      <div className="relative pt-48 px-4 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
          Stranger Things
        </h1>
        <p className="text-white text-lg mt-4 max-w-xl">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>
        <div className="flex space-x-4 mt-8">
          <button className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
            <Play className="w-6 h-6 mr-2" />
            Play
          </button>
          <button className="flex items-center bg-gray-500/70 text-white px-6 py-2 rounded hover:bg-gray-500/50 transition">
            <Info className="w-6 h-6 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}