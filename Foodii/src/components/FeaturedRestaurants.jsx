import React from 'react';
import { featuredRestaurants } from '../data/data.js';
import { Star } from 'lucide-react';

const FeaturedRestaurants = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <img 
                src={restaurant.imageUrl} 
                alt={restaurant.name} 
                className="w-full h-40 object-cover" 
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x200/F5F5F5/333333?text=Image+Missing'; }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span>{restaurant.rating} ({restaurant.reviews}+ reviews)</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{restaurant.cuisine}</p>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-green-600">{restaurant.deliveryTime}</span>
                  <span className="text-gray-800">{restaurant.deliveryFee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;

