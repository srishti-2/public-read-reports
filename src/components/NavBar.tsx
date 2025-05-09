
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="blog-container py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-blog-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <Link to="/" className="text-2xl font-bold text-blog-dark">
              Research<span className="text-blog-primary">Hub</span>
            </Link>
          </div>
          
          <div className="w-full md:w-auto">
            <SearchBar />
          </div>
          
          <div className="hidden md:flex items-center space-x-6 ml-6">
            <Link to="/" className="text-blog-dark hover:text-blog-primary font-medium">
              Home
            </Link>
            <Link to="/news" className="text-blog-dark hover:text-blog-primary font-medium">
              News Feed
            </Link>
            <Link to="/categories" className="text-blog-dark hover:text-blog-primary font-medium">
              Categories
            </Link>
            <Link to="/about" className="text-blog-dark hover:text-blog-primary font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
