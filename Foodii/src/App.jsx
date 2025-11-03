import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

// Home Page
function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <Footer />
    </main>
  );
}

//  Protected Route Wrapper
function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

// ✅ App Component
function App() {
  return (
    <div className="bg-white font-sans min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/*  Clerk Authentication (Fixed Nested Routes) */}
          <Route
            path="/sign-in/*"
            element={
              <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <SignIn
                  routing="path"
                  path="/sign-in"
                  appearance={{
                    elements: {
                      formButtonPrimary:
                        "bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors",
                    },
                  }}
                />
              </div>
            }
          />

          <Route
            path="/sign-up/*"
            element={
              <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <SignUp
                  routing="path"
                  path="/sign-up"
                  appearance={{
                    elements: {
                      formButtonPrimary:
                        "bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors",
                    },
                  }}
                />
              </div>
            }
          />

          {/* Example Protected Route */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <div className="p-10 text-center text-2xl">
                  Your Orders Page 🛒 (Protected)
                </div>
              </ProtectedRoute>
            }
          />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
