import React from 'react';

const Header = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) => {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  return (
    <header className="bg-brand-dark w-full pt-8 pb-8 px-6 font-poppins min-h-[140px] flex flex-col justify-between">
      
      {/* Top Row: Logo and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-6">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-wide">
          F<span className="text-brand-red">oo</span>dy Z<span className="text-brand-red">o</span>ne
        </h1>

        {/* Search Bar */}
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Food...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border border-brand-red rounded px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-red w-full md:w-72"
          />
        </div>
        
      </div>

      {/* Bottom Row: Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 rounded transition-all duration-200 text-sm font-medium border border-brand-red ${
              selectedCategory === category
                ? 'bg-brand-red text-white shadow-lg scale-105'
                : 'bg-transparent text-white hover:bg-brand-red/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
    </header>
  );
};

export default Header;