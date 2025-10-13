import React from 'react';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="#" className="flex-shrink-0">
               <h1 className="text-2xl font-bold text-orange-500">Foodii</h1>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Restaurants</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Offers</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Orders</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="text-gray-500 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search for restaurants, cuisines..."
                className="bg-transparent ml-2 focus:outline-none text-sm text-gray-700 w-64"
              />
            </div>
            <a href="#" className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <Heart className="h-6 w-6" />
            </a>
            <a href="#" className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white"></span>
            </a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;