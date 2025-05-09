
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getAllCategories } from '@/data/reports';

const Sidebar = () => {
  const categories = getAllCategories();
  
  return (
    <aside className="w-full lg:w-64">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-blog-dark mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category} className="flex items-center">
              <ChevronRight className="w-4 h-4 mr-2 text-blog-primary" />
              <Link 
                to={`/category/${category.toLowerCase()}`} 
                className="text-gray-700 hover:text-blog-primary transition-colors"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-blog-dark mb-4">About</h2>
        <p className="text-gray-700 mb-4">
          ResearchHub provides the latest reports and insights across various fields including technology, environment, business, and more.
        </p>
        <Link 
          to="/about" 
          className="text-blog-primary hover:text-blog-secondary font-medium"
        >
          Learn more →
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
