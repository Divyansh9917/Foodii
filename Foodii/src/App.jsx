import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedRestaurants from './components/FeaturedRestaurants';
// We will add more components here as we build them
// import PopularNearYou from './components/PopularNearYou';
// import SpecialOffers from './components/SpecialOffers';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedRestaurants />
        {/* The other components will go here */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

