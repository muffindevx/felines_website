import React from 'react';
import { X, MapPin, Heart, Weight, Ruler, Clock, Zap, Utensils, Globe, Shield, AlertTriangle, Lightbulb } from 'lucide-react';
import { Feline } from '../types/feline';

interface FelineModalProps {
  feline: Feline | null;
  isOpen: boolean;
  onClose: () => void;
}

const FelineModal: React.FC<FelineModalProps> = ({ feline, isOpen, onClose }) => {
  if (!feline || !isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'endangered':
        return 'text-red-600 bg-red-100 border-red-200';
      case 'vulnerable':
        return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'near threatened':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'least concern':
        return 'text-green-600 bg-green-100 border-green-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        style={{
          animation: isOpen ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out'
        }}
      ></div>

      {/* Modal */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden"
        style={{
          animation: isOpen ? 'slideInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'slideOutDown 0.3s ease-in'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/95 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
          {/* Mobile Image - Top */}
          <div className="lg:hidden relative flex-shrink-0">
            <div className="h-64 sm:h-72 lg:h-full bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-0 lg:p-6 flex items-center justify-center">
              {/* Watercolor background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-red-200/30 to-pink-200/30 blur-sm"></div>
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-red-300/30 to-pink-300/30 rounded-full blur-lg"></div>
              
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4 lg:p-4">
                <img 
                  src={feline.images[0]} 
                  alt={feline.name}
                  className="w-full h-full object-cover rounded-none shadow-2xl"
                  style={{
                    filter: 'sepia(15%) saturate(110%) hue-rotate(5deg) brightness(105%)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:w-full lg:h-full">
            {/* Left Side - Information */}
            <div className="lg:w-3/5 overflow-y-auto flex-1 min-h-0">
              <div className="p-4 lg:p-8 space-y-4 lg:space-y-8 pb-8 pt-6 lg:pt-4">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 pr-2">{feline.name}</h2>
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold flex-shrink-0">
                      {feline.category}
                    </span>
                  </div>
                  <p className="text-sm lg:text-lg italic text-gray-600 mb-3 lg:mb-4">{feline.scientificName}</p>
                  <div className="bg-blue-50 rounded-xl p-3 lg:p-4 mb-3 lg:mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Overview</h4>
                    <p className="text-gray-700 leading-relaxed text-xs lg:text-base">{feline.shortDescription}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 lg:p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Detailed Description</h4>
                    <p className="text-gray-700 leading-relaxed text-xs lg:text-base">{feline.description}</p>
                  </div>
                </div>

                {/* Characteristics */}
                <div className="bg-gray-50 rounded-2xl p-4 lg:p-6">
                  <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                    <Ruler className="w-5 h-5 mr-2 text-blue-500" />
                    Physical Characteristics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div className="flex items-center space-x-2">
                      <Weight className="w-4 h-4 text-purple-500" />
                      <div className="text-xs lg:text-sm">
                        <span className="font-semibold text-gray-700">Weight:</span>
                        <p className="text-gray-600">{feline.characteristics.weight}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Ruler className="w-4 h-4 text-blue-500" />
                      <div className="text-xs lg:text-sm">
                        <span className="font-semibold text-gray-700">Length:</span>
                        <p className="text-gray-600">{feline.characteristics.length}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <div className="text-xs lg:text-sm">
                        <span className="font-semibold text-gray-700">Lifespan:</span>
                        <p className="text-gray-600">{feline.characteristics.lifespan}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <div className="text-xs lg:text-sm">
                        <span className="font-semibold text-gray-700">Speed:</span>
                        <p className="text-gray-600">{feline.characteristics.speed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 sm:col-span-2">
                      <Utensils className="w-4 h-4 text-red-500" />
                      <div className="text-xs lg:text-sm">
                        <span className="font-semibold text-gray-700">Diet:</span>
                        <p className="text-gray-600">{feline.characteristics.diet}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Habitat */}
                <div className="bg-green-50 rounded-2xl p-4 lg:p-6">
                  <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-500" />
                    Habitat & Distribution
                  </h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="bg-white rounded-lg p-3 lg:p-4">
                      <div className="flex items-start space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-xs lg:text-sm font-semibold text-gray-700">Geographic Regions:</p>
                      </div>
                      <div className="flex flex-wrap gap-1 lg:gap-2">
                        {feline.habitat.regions.map((region, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs lg:text-xs font-medium">
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 lg:p-4">
                      <p className="text-xs lg:text-sm font-semibold text-gray-700">Environment:</p>
                      <p className="text-xs lg:text-sm text-gray-600">{feline.habitat.environment}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 lg:p-4">
                      <p className="text-xs lg:text-sm font-semibold text-gray-700">Territory Size:</p>
                      <p className="text-xs lg:text-sm text-gray-600">{feline.habitat.territory}</p>
                    </div>
                    {feline.habitat.coordinates && feline.habitat.coordinates.length > 0 && (
                      <div className="bg-white rounded-lg p-3 lg:p-4">
                        <p className="text-xs lg:text-sm font-semibold text-gray-700 mb-2">Key Locations:</p>
                        <div className="space-y-1">
                          {feline.habitat.coordinates.map((coord, index) => (
                            <div key={index} className="text-xs lg:text-xs text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                              {coord.name} ({coord.lat.toFixed(2)}°, {coord.lng.toFixed(2)}°)
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Conservation */}
                <div className="bg-red-50 rounded-2xl p-4 lg:p-6">
                  <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-500" />
                    Conservation Status
                  </h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="bg-white rounded-lg p-3 lg:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs lg:text-sm font-semibold text-gray-700">Conservation Status:</span>
                        <span className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold border ${getStatusColor(feline.conservation.status)}`}>
                          {feline.conservation.status}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 lg:p-4">
                      <p className="text-xs lg:text-sm font-semibold text-gray-700">Population:</p>
                      <p className="text-xs lg:text-sm text-gray-600">{feline.conservation.population}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 lg:p-4">
                      <p className="text-xs lg:text-sm font-semibold text-gray-700 flex items-center mb-2">
                        <AlertTriangle className="w-4 h-4 mr-1 text-orange-500" />
                        Main Threats:
                      </p>
                      <div className="space-y-1 lg:space-y-2">
                        {feline.conservation.threats.map((threat, index) => (
                          <div key={index} className="bg-red-50 rounded-lg p-2 lg:p-2">
                            <div className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              <span className="text-xs lg:text-sm text-gray-700">{threat}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fun Facts */}
                <div className="bg-yellow-50 rounded-2xl p-4 lg:p-6">
                  <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                    Fun Facts
                  </h3>
                  <div className="space-y-2 lg:space-y-3">
                    {feline.funFacts.map((fact, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 lg:p-4">
                        <div className="flex items-start space-x-3">
                          <span className="w-6 h-6 bg-yellow-400 text-yellow-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">{fact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional spacing at bottom for better scrolling */}
                <div className="h-4 lg:h-8"></div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-2/5 relative flex-shrink-0">
              <div className="h-full bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 flex items-center justify-center rounded-tl-3xl rounded-bl-3xl">
                {/* Watercolor background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-red-200/30 to-pink-200/30 blur-sm rounded-tl-3xl rounded-bl-3xl"></div>
                <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-red-300/30 to-pink-300/30 rounded-full blur-lg"></div>
                
                <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                  <img 
                    src={feline.images[0]} 
                    alt={feline.name}
                    className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl shadow-2xl"
                    style={{
                      filter: 'sepia(15%) saturate(110%) hue-rotate(5deg) brightness(105%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Information */}
          <div className="lg:hidden overflow-y-auto flex-1 min-h-0">
            <div className="p-4 lg:p-8 space-y-4 lg:space-y-8 pb-8 pt-6 lg:pt-4">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 pr-2">{feline.name}</h2>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold flex-shrink-0">
                    {feline.category}
                  </span>
                </div>
                <p className="text-sm lg:text-lg italic text-gray-600 mb-3 lg:mb-4">{feline.scientificName}</p>
                <div className="bg-blue-50 rounded-xl p-3 lg:p-4 mb-3 lg:mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Overview</h4>
                  <p className="text-gray-700 leading-relaxed text-xs lg:text-base">{feline.shortDescription}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 lg:p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Detailed Description</h4>
                  <p className="text-gray-700 leading-relaxed text-xs lg:text-base">{feline.description}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="bg-gray-50 rounded-2xl p-4 lg:p-6">
                <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                  <Ruler className="w-5 h-5 mr-2 text-blue-500" />
                  Physical Characteristics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  <div className="flex items-center space-x-2">
                    <Weight className="w-4 h-4 text-purple-500" />
                    <div className="text-xs lg:text-sm">
                      <span className="font-semibold text-gray-700">Weight:</span>
                      <p className="text-gray-600">{feline.characteristics.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ruler className="w-4 h-4 text-blue-500" />
                    <div className="text-xs lg:text-sm">
                      <span className="font-semibold text-gray-700">Length:</span>
                      <p className="text-gray-600">{feline.characteristics.length}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <div className="text-xs lg:text-sm">
                      <span className="font-semibold text-gray-700">Lifespan:</span>
                      <p className="text-gray-600">{feline.characteristics.lifespan}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <div className="text-xs lg:text-sm">
                      <span className="font-semibold text-gray-700">Speed:</span>
                      <p className="text-gray-600">{feline.characteristics.speed}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:col-span-2">
                    <Utensils className="w-4 h-4 text-red-500" />
                    <div className="text-xs lg:text-sm">
                      <span className="font-semibold text-gray-700">Diet:</span>
                      <p className="text-gray-600">{feline.characteristics.diet}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Habitat */}
              <div className="bg-green-50 rounded-2xl p-4 lg:p-6">
                <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-green-500" />
                  Habitat & Distribution
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="bg-white rounded-lg p-3 lg:p-4">
                    <div className="flex items-start space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-xs lg:text-sm font-semibold text-gray-700">Geographic Regions:</p>
                    </div>
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                      {feline.habitat.regions.map((region, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs lg:text-xs font-medium">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 lg:p-4">
                    <p className="text-xs lg:text-sm font-semibold text-gray-700">Environment:</p>
                    <p className="text-xs lg:text-sm text-gray-600">{feline.habitat.environment}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 lg:p-4">
                    <p className="text-xs lg:text-sm font-semibold text-gray-700">Territory Size:</p>
                    <p className="text-xs lg:text-sm text-gray-600">{feline.habitat.territory}</p>
                  </div>
                  {feline.habitat.coordinates && feline.habitat.coordinates.length > 0 && (
                    <div className="bg-white rounded-lg p-3 lg:p-4">
                      <p className="text-xs lg:text-sm font-semibold text-gray-700 mb-2">Key Locations:</p>
                      <div className="space-y-1">
                        {feline.habitat.coordinates.map((coord, index) => (
                          <div key={index} className="text-xs lg:text-xs text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            {coord.name} ({coord.lat.toFixed(2)}°, {coord.lng.toFixed(2)}°)
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Conservation */}
              <div className="bg-red-50 rounded-2xl p-4 lg:p-6">
                <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-500" />
                  Conservation Status
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="bg-white rounded-lg p-3 lg:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs lg:text-sm font-semibold text-gray-700">Conservation Status:</span>
                      <span className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold border ${getStatusColor(feline.conservation.status)}`}>
                        {feline.conservation.status}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 lg:p-4">
                    <p className="text-xs lg:text-sm font-semibold text-gray-700">Population:</p>
                    <p className="text-xs lg:text-sm text-gray-600">{feline.conservation.population}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 lg:p-4">
                    <p className="text-xs lg:text-sm font-semibold text-gray-700 flex items-center mb-2">
                      <AlertTriangle className="w-4 h-4 mr-1 text-orange-500" />
                      Main Threats:
                    </p>
                    <div className="space-y-1 lg:space-y-2">
                      {feline.conservation.threats.map((threat, index) => (
                        <div key={index} className="bg-red-50 rounded-lg p-2 lg:p-2">
                          <div className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            <span className="text-xs lg:text-sm text-gray-700">{threat}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="bg-yellow-50 rounded-2xl p-4 lg:p-6">
                <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                  Fun Facts
                </h3>
                <div className="space-y-2 lg:space-y-3">
                  {feline.funFacts.map((fact, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 lg:p-4">
                      <div className="flex items-start space-x-3">
                        <span className="w-6 h-6 bg-yellow-400 text-yellow-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">{fact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional spacing at bottom for better scrolling */}
              <div className="h-4 lg:h-8"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideOutDown {
          from { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
        }
        
        /* Custom scrollbar for the modal content */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </div>
  );
};

export default FelineModal;