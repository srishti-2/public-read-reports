
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ReportCard from '@/components/ReportCard';
import { reports } from '@/data/reports';

const Index = () => {
  const [visibleReports, setVisibleReports] = useState(4);
  
  const featuredReports = reports.filter(report => report.featured);
  const regularReports = reports.filter(report => !report.featured);
  
  const handleLoadMore = () => {
    setVisibleReports(prev => prev + 4);
  };

  return (
    <Layout>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-blog-dark mb-2">
          Latest Research Reports
        </h1>
        <p className="text-gray-600 mb-8">
          Stay informed with cutting-edge research and insights
        </p>
        
        {featuredReports.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-blog-dark mb-4">
              Featured Reports
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredReports.map(report => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </section>
        )}
        
        <section>
          <h2 className="text-xl font-semibold text-blog-dark mb-4">
            All Reports
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularReports.slice(0, visibleReports).map(report => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
          
          {visibleReports < regularReports.length && (
            <div className="mt-8 text-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-blog-primary text-white rounded-md hover:bg-blog-secondary transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Index;
