
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="blog-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blog-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-blog-dark">
                Research<span className="text-blog-primary">Hub</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              A platform for accessing the latest research reports and insights across various fields.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blog-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blog-primary">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-blog-primary">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blog-primary">About</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blog-dark mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/technology" className="text-gray-600 hover:text-blog-primary">Technology</Link>
              </li>
              <li>
                <Link to="/category/environment" className="text-gray-600 hover:text-blog-primary">Environment</Link>
              </li>
              <li>
                <Link to="/category/business" className="text-gray-600 hover:text-blog-primary">Business</Link>
              </li>
              <li>
                <Link to="/category/economics" className="text-gray-600 hover:text-blog-primary">Economics</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ResearchHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
