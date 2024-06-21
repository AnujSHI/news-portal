import React from 'react';

const Header = ({ categories, selectedCategory, onSelectCategory }) => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full">
      <h1 className="text-2xl">News Portal</h1>
      <nav className="flex space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-2 ${
              selectedCategory === category ? 'bg-blue-800' : 'bg-blue-600'
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
