import React from 'react';
import { Flame, Pizza, Beef, Cake, Salad, Vegan } from 'lucide-react';

const categories = [
  { name: 'Popular', icon: <Flame className="h-5 w-5 mr-2" /> },
  { name: 'Pizza', icon: <Pizza className="h-5 w-5 mr-2" /> },
  { name: 'Burgers', icon: <Beef className="h-5 w-5 mr-2" /> },
  { name: 'Desserts', icon: <Cake className="h-5 w-5 mr-2" /> },
  { name: 'Healthy', icon: <Salad className="h-5 w-5 mr-2" /> },
  { name: 'Vegan', icon: <Vegan className="h-5 w-5 mr-2" /> },
];

const Categories = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-4 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                index === 0
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

