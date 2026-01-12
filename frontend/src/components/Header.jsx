import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-plum/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-plum">
            Cake.cottag3
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-plum transition-colors">
              About
            </a>
            <a href="#menu" className="text-gray-700 hover:text-plum transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-plum transition-colors">
              Gallery
            </a>
            <a href="#order" className="text-gray-700 hover:text-plum transition-colors">
              Order
            </a>
            <a href="#policies" className="text-gray-700 hover:text-plum transition-colors">
              Policies
            </a>
          </div>
          <a
            href="#order"
            className="bg-plum text-white px-6 py-2 rounded-full hover:bg-plum/90 transition-all duration-300 hover:shadow-lg"
          >
            Order Now
          </a>
        </div>
      </nav>
    </header>
  );
};