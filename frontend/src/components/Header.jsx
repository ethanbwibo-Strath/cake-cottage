import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-plum/10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            {/* Logo placeholder - simple circle */}
            <div className="w-12 h-12 bg-plum rounded-full flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Cake Cottage Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-2xl font-bold text-plum">Cake.cottag3</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-plum transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-plum transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu" className="text-gray-700 hover:text-plum transition-colors relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-plum transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-plum transition-colors relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-plum transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#order" className="text-gray-700 hover:text-plum transition-colors relative group">
              Order
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-plum transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#policies" className="text-gray-700 hover:text-plum transition-colors relative group">
              Policies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-plum transition-all duration-300 group-hover:w-full"></span>
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