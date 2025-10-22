import React, { useState } from "react";
import { featuredRestaurants } from "../data/data.js";
import { Star, Plus, Minus, ShoppingCart } from "lucide-react";

const FeaturedRestaurants = () => {
  const [cart, setCart] = useState({});

  const handleQuantityChange = (id, type) => {
    setCart((prev) => {
      const currentQty = prev[id]?.quantity || 0;
      const newQty = type === "increase" ? currentQty + 1 : Math.max(0, currentQty - 1);
      return {
        ...prev,
        [id]: { ...prev[id], quantity: newQty },
      };
    });
  };

  const handlePortionChange = (id, portion) => {
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], portion },
    }));
  };

  const handleAddToCart = (restaurant) => {
    setCart((prev) => ({
      ...prev,
      [restaurant.id]: {
        ...prev[restaurant.id],
        name: restaurant.name,
        portion: prev[restaurant.id]?.portion || "Full",
        quantity: prev[restaurant.id]?.quantity || 1,
        price:
          prev[restaurant.id]?.portion === "Half"
            ? restaurant.priceHalf
            : restaurant.priceFull,
      },
    }));
    alert(`${restaurant.name} added to cart!`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredRestaurants.map((restaurant) => {
            const current = cart[restaurant.id] || {};
            const portion = current.portion || "Full";
            const quantity = current.quantity || 0;
            const price = portion === "Half" ? restaurant.priceHalf : restaurant.priceFull;

            return (
              <div
                key={restaurant.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x200/F5F5F5/333333?text=Image+Missing";
                  }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{restaurant.name}</h3>
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                    <span>
                      {restaurant.rating} ({restaurant.reviews}+ reviews)
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{restaurant.cuisine}</p>

                  {/* Portion Selector */}
                  <div className="flex gap-2 mb-3">
                    {["Full", "Half"].map((p) => (
                      <button
                        key={p}
                        onClick={() => handlePortionChange(restaurant.id, p)}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${
                          portion === p
                            ? "bg-green-600 text-white border-green-600"
                            : "border-gray-300 text-gray-700"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-lg font-semibold text-gray-800 mb-3">
                    ₹{price}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(restaurant.id, "decrease")}
                        className="p-1 border rounded-full"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-base font-medium">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(restaurant.id, "increase")}
                        className="p-1 border rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleAddToCart(restaurant)}
                      className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
