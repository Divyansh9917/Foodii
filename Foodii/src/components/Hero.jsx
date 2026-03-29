import React from 'react';
import { Link } from 'react-router-dom';
import heroLogo from '../logo/herologo.svg'; 


const Hero = () => {

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="bg-orange-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20 gap-16">
          
          
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Delicious food delivered to your door
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Order from your favorite restaurants and get it delivered fast
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                to="/restaurants"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors text-lg text-center"
              >
                Order Now
              </Link>

              <button
                onClick={scrollToFeatured}
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-colors text-lg text-center"
              >
                Browse Menu
              </button>
            </div>
          </div>

          
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={heroLogo}
              alt="Foodii Logo"
              className="w-[90%] md:w-[500px] lg:w-[550px] xl:w-[600px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
