import React from 'react';
import Hero from './components/Hero';
import SpeciesCollection from './components/SpeciesCollection';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background with feline scratch pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
        {/* Realistic feline scratch pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          {/* Scratch group 1 - Top left */}
          <div className="absolute top-20 left-10 w-24 h-0.5 bg-gray-900 transform rotate-12 shadow-sm"></div>
          <div className="absolute top-22 left-11 w-26 h-0.5 bg-gray-800 transform rotate-12 shadow-sm"></div>
          <div className="absolute top-24 left-12 w-22 h-0.5 bg-gray-900 transform rotate-12 shadow-sm"></div>
          <div className="absolute top-26 left-13 w-20 h-0.5 bg-gray-800 transform rotate-12 shadow-sm"></div>
          
          {/* Scratch group 2 - Top right */}
          <div className="absolute top-40 right-20 w-28 h-0.5 bg-gray-900 transform -rotate-45 shadow-sm"></div>
          <div className="absolute top-42 right-19 w-30 h-0.5 bg-gray-800 transform -rotate-45 shadow-sm"></div>
          <div className="absolute top-44 right-18 w-26 h-0.5 bg-gray-900 transform -rotate-45 shadow-sm"></div>
          <div className="absolute top-46 right-17 w-24 h-0.5 bg-gray-800 transform -rotate-45 shadow-sm"></div>
          
          {/* Scratch group 3 - Bottom left */}
          <div className="absolute bottom-40 left-1/4 w-32 h-0.5 bg-gray-900 transform rotate-45 shadow-sm"></div>
          <div className="absolute bottom-38 left-1/4 w-34 h-0.5 bg-gray-800 transform rotate-45 shadow-sm"></div>
          <div className="absolute bottom-36 left-1/4 w-30 h-0.5 bg-gray-900 transform rotate-45 shadow-sm"></div>
          <div className="absolute bottom-34 left-1/4 w-28 h-0.5 bg-gray-800 transform rotate-45 shadow-sm"></div>
          
          {/* Scratch group 4 - Bottom right */}
          <div className="absolute bottom-60 right-1/3 w-36 h-0.5 bg-gray-900 transform -rotate-12 shadow-sm"></div>
          <div className="absolute bottom-58 right-1/3 w-38 h-0.5 bg-gray-800 transform -rotate-12 shadow-sm"></div>
          <div className="absolute bottom-56 right-1/3 w-34 h-0.5 bg-gray-900 transform -rotate-12 shadow-sm"></div>
          <div className="absolute bottom-54 right-1/3 w-32 h-0.5 bg-gray-800 transform -rotate-12 shadow-sm"></div>
          
          {/* Additional scattered scratches for realism */}
          <div className="absolute top-1/3 left-1/2 w-20 h-0.5 bg-gray-900 transform rotate-75 shadow-sm"></div>
          <div className="absolute top-1/3 left-1/2 w-22 h-0.5 bg-gray-800 transform rotate-75 shadow-sm translate-x-1 translate-y-1"></div>
          <div className="absolute top-1/3 left-1/2 w-18 h-0.5 bg-gray-900 transform rotate-75 shadow-sm translate-x-2 translate-y-2"></div>
          
          <div className="absolute top-2/3 right-1/4 w-16 h-0.5 bg-gray-900 transform -rotate-30 shadow-sm"></div>
          <div className="absolute top-2/3 right-1/4 w-18 h-0.5 bg-gray-800 transform -rotate-30 shadow-sm translate-x-1 translate-y-1"></div>
          <div className="absolute top-2/3 right-1/4 w-14 h-0.5 bg-gray-900 transform -rotate-30 shadow-sm translate-x-2 translate-y-2"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <SpeciesCollection />
      </div>
    </div>
  );
}

export default App;
