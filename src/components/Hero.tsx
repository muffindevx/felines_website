import React from 'react';
import { Cat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with watercolor effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-300 to-red-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-300 to-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Watercolor feline silhouettes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-32 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-xl transform rotate-12"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-lg transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-400 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Cat className="w-24 h-24 text-orange-600 drop-shadow-lg" />
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Wild Felines
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          Discover the magnificent world of wild cats - from the mighty lions of Africa to the elusive snow leopards of the Himalayas. 
          Explore 41 incredible feline species, their habitats, behaviors, and conservation stories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-orange-600 font-semibold text-lg">41 Species</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-red-600 font-semibold text-lg">6 Continents</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-pink-600 font-semibold text-lg">Every Habitat</span>
          </div>
        </div>

        <div className="mt-12">
          <button 
            onClick={() => document.getElementById('species-collection')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Species
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;