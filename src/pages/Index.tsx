
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import ReportCard from '@/components/ReportCard';
import NewsCard from '@/components/NewsCard';
import { reports } from '@/data/reports';
import { fetchAllNews } from '@/services/newsService';
import { Newspaper } from 'lucide-react';

const Index = () => {
  const [visibleReports, setVisibleReports] = useState(4);
  
  const featuredReports = reports.filter(report => report.featured);
  const regularReports = reports.filter(report => !report.featured);

  // Fetch news for the preview section
  const { data: latestNews } = useQuery({
    queryKey: ['news-preview'],
    queryFn: async () => {
      const allNews = await fetchAllNews();
      return allNews.slice(0, 3); // Just show the top 3 news items
    },
    refetchOnWindowFocus: false,
    refetchInterval: 300000, // Refetch every 5 minutes
  });
  
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
        
        {/* News Preview Section */}
        {latestNews && latestNews.length > 0 && (
          <section className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Newspaper className="mr-2 text-blog-primary" size={20} />
                <h2 className="text-xl font-semibold text-blog-dark">Latest News Headlines</h2>
              </div>
              <Link 
                to="/news" 
                className="text-sm text-blog-primary hover:text-blog-secondary font-medium"
              >
                View all news →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {latestNews.map((news, index) => (
                <NewsCard key={`${news.source}-${index}`} news={news} />
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
