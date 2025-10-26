import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
// import Footer from './components/Footer';

function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      {/* Add more homepage components here */}
      {/* <Footer /> */}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
