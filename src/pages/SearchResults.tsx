
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import ReportCard from '@/components/ReportCard';
import { reports } from '@/data/reports';

const SearchResults = () => {
  const location = useLocation();
  const query = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('q') || '';
  }, [location.search]);

  const searchResults = useMemo(() => {
    if (!query) return [];
    
    const lowerQuery = query.toLowerCase();
    return reports.filter(report => 
      report.title.toLowerCase().includes(lowerQuery) || 
      report.excerpt.toLowerCase().includes(lowerQuery) ||
      report.content.toLowerCase().includes(lowerQuery) ||
      report.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-blog-dark mb-2">
          Search Results
        </h1>
        <p className="text-gray-600 mb-8">
          Found {searchResults.length} results for: "{query}"
        </p>
        
        {searchResults.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {searchResults.map(report => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold text-blog-dark mb-2">No Results Found</h2>
            <p className="text-gray-600">
              We couldn't find any reports matching your search. Please try different keywords.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
