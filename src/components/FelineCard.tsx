import React from 'react';
import { MapPin, Heart, Clock, Zap } from 'lucide-react';
import { Feline } from '../types/feline';

interface FelineCardProps {
  feline: Feline;
  onClick: () => void;
}

const FelineCard: React.FC<FelineCardProps> = ({ feline, onClick }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'endangered':
        return 'text-red-600 bg-red-100';
      case 'vulnerable':
        return 'text-orange-600 bg-orange-100';
      case 'near threatened':
        return 'text-yellow-600 bg-yellow-100';
      case 'least concern':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 overflow-hidden h-[520px] flex flex-col"
      style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'
      }}
    >
      {/* 3D Card Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 p-0.5">
        <div className="h-full w-full rounded-2xl bg-white"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Image Container with Watercolor Effect */}
        <div className="relative mb-6 overflow-hidden flex-shrink-0 -mx-6 -mt-6 rounded-t-2xl">
          <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 h-48">
            <div className="relative">
              {/* Watercolor background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 via-red-200/50 to-pink-200/50 blur-sm"></div>
              <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-full blur-lg"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-red-300/40 to-pink-300/40 rounded-full blur-md"></div>
              
              {/* Feline silhouette representation */}
              <div className="relative z-10 flex items-center justify-center h-48">
                <img 
                  src={feline.images[0]} 
                  alt={feline.name}
                  className="w-full h-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-500"
                  style={{
                    filter: 'sepia(20%) saturate(120%) hue-rotate(10deg) brightness(110%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {feline.category}
          </span>
        </div>

        {/* Title and Scientific Name */}
        <div className="mb-4 flex-shrink-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors duration-300">
            {feline.name}
          </h3>
          <p className="text-sm italic text-gray-500 font-medium">
            {feline.scientificName}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {feline.shortDescription}
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-gray-600">
              <span className="font-semibold">Speed:</span> {feline.characteristics.speed}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-gray-600">
              <span className="font-semibold">Lifespan:</span> {feline.characteristics.lifespan}
            </span>
          </div>
        </div>

        {/* Habitat and Conservation */}
        <div className="space-y-3 flex-shrink-0 mt-auto pt-2">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Habitat:</span> {feline.habitat.regions.slice(0, 2).join(', ')}
                {feline.habitat.regions.length > 2 && ` +${feline.habitat.regions.length - 2} more`}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-xs text-gray-600 font-semibold">Conservation:</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(feline.conservation.status)}`}>
              {feline.conservation.status}
            </span>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>

      {/* 3D Effect Shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 to-red-200 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
    </div>
  );
};

export default FelineCard;