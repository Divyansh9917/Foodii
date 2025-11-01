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
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

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

// Protected route wrapper
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

function App() {
  return (
    <div className="bg-white font-sans min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Clerk Auth Routes */}
          <Route
            path="/sign-in"
            element={
              <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <SignIn
                  path="/sign-in"
                  routing="path"
                  signUpUrl="/sign-up"
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
            path="/sign-up"
            element={
              <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <SignUp
                  path="/sign-up"
                  routing="path"
                  signInUrl="/sign-in"
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

          {/* Protected Orders Page */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <div className="p-10 text-center text-2xl">
                  🛒 Your Orders (Protected)
                </div>
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
