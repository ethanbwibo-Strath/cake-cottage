import React, { useState } from 'react';
import { menuItems, addOns } from '../mock';
import { Cake, Plus } from 'lucide-react';

export const Menu = () => {
  const [hoveredAddon, setHoveredAddon] = useState(null);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            Menu & Pricing
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose your perfect cake size and flavor combination
          </p>
        </div>

        {/* Main Menu - Two Tiers */}
        <div className="max-w-5xl mx-auto mb-16 space-y-8">
          {menuItems.map((tier, tierIndex) => (
            <div key={tierIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-plum/20">
              <div className="bg-plum text-white px-6 py-4">
                <h3 className="text-2xl font-bold">{tier.tier} Tier</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tier.flavors.map((flavor, flavorIndex) => (
                    <div
                      key={flavorIndex}
                      className="bg-pink-50 rounded-lg p-4 border border-plum/10 hover:border-plum/40 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <h4 className="font-semibold text-plum mb-2">{flavor.name}</h4>
                      <p className="text-2xl font-bold text-gray-800">{flavor.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons with hover image replacement */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-2xl font-bold text-plum">
              <Plus className="w-6 h-6" />
              Premium Add-ons
            </div>
            <p className="text-gray-600 mt-2">Hover to see examples</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-md border-2 border-plum/10 hover:border-plum/40 transition-all duration-300 cursor-pointer overflow-hidden h-48"
                onMouseEnter={() => setHoveredAddon(index)}
                onMouseLeave={() => setHoveredAddon(null)}
              >
                {/* Default content */}
                <div className={`transition-opacity duration-300 ${hoveredAddon === index ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="font-semibold text-plum text-lg mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-2">{addon.price}</p>
                  <p className="text-sm text-gray-600">{addon.description}</p>
                </div>
                
                {/* Hover image overlay */}
                {hoveredAddon === index && (
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img 
                      src={addon.image} 
                      alt={addon.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum/80 to-transparent flex items-end">
                      <p className="text-plum font-semibold p-4">{addon.name}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};