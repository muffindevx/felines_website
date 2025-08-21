import React, { useState, useMemo } from 'react';
import { felines, getAllRegions, getAllCategories } from '../data/felines';
import FelineCard from './FelineCard';
import FelineModal from './FelineModal';
import FilterBar from './FilterBar';
import { Feline } from '../types/feline';

const SpeciesCollection: React.FC = () => {
  const [selectedFeline, setSelectedFeline] = useState<Feline | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const regions = getAllRegions();
  const categories = getAllCategories();

  const filteredFelines = useMemo(() => {
    return felines.filter(feline => {
      const matchesSearch = feline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           feline.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = !selectedRegion || 
                           feline.habitat.regions.some(region => 
                             region.toLowerCase().includes(selectedRegion.toLowerCase())
                           );
      
      const matchesCategory = !selectedCategory || 
                             feline.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesRegion && matchesCategory;
    });
  }, [searchTerm, selectedRegion, selectedCategory]);

  const handleFelineClick = (feline: Feline) => {
    setSelectedFeline(feline);
    setIsModalOpen(true);
    // Update URL without page reload
    window.history.pushState({}, '', `/cat/${feline.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeline(null);
    // Return to main page URL
    window.history.pushState({}, '', '/');
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedRegion('');
    setSelectedCategory('');
  };

  return (
    <section id="species-collection" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Species Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of 41 wild feline species from around the world. 
            Each card showcases the unique beauty and characteristics of these magnificent predators.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          selectedRegion={selectedRegion}
          selectedCategory={selectedCategory}
          regions={regions}
          categories={categories}
          onSearchChange={setSearchTerm}
          onRegionChange={setSelectedRegion}
          onCategoryChange={setSelectedCategory}
          onClearFilters={handleClearFilters}
        />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing <span className="font-semibold text-orange-600">{filteredFelines.length}</span> of{' '}
            <span className="font-semibold">{felines.length}</span> species
          </p>
        </div>

        {/* Species Grid */}
        {filteredFelines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFelines.map((feline) => (
              <FelineCard
                key={feline.id}
                feline={feline}
                onClick={() => handleFelineClick(feline)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🐱</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No felines found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or clearing the filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <FelineModal
        feline={selectedFeline}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default SpeciesCollection;