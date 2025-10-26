import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-orange-500/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
          
          {/* Left Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Delicious food delivered to your door
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Order from your favorite restaurants and get it delivered fast
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              
              {/* React Router Link for Order Now */}
              <Link
                to="/restaurants"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors text-lg text-center"
              >
                Order Now
              </Link>
              
              {/* React Router Link for Browse Menu */}
              <Link
                to="/menu"
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-colors text-lg text-center"
              >
                Browse Menu
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/FFEEE6/F56E28?text=Foodii:+For+the+foodie+in+you&font-size=160&font-weight=bold&font-family=Montserrat"
              alt="Foodii app placeholder - fancy text"
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/FFEEE6/F56E28?text=Image+Error';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
