
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getAllCategories, getReportsByCategory } from '@/data/reports';

const CategoriesPage = () => {
  const categories = getAllCategories();

  return (
    <Layout showSidebar={false}>
      <div>
        <h1 className="text-3xl font-bold text-blog-dark mb-2">
          Browse Categories
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our reports organized by subject matter
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => {
            const categoryReports = getReportsByCategory(category);
            
            return (
              <Link 
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-blog-dark mb-2">
                    {category}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {categoryReports.length} {categoryReports.length === 1 ? 'report' : 'reports'}
                  </p>
                  <span className="text-blog-primary font-medium">
                    View all →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
