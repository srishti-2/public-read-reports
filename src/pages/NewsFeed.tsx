
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';
import { fetchAllNews, fetchGoogleNews, fetchTimesOfIndia, NewsItem } from '@/services/newsService';
import { Newspaper, RssIcon } from 'lucide-react';

const NewsFeed = () => {
  const [filter, setFilter] = useState<'all' | 'google' | 'toi'>('all');
  
  const { data: allNews, isLoading, isError } = useQuery({
    queryKey: ['news', filter],
    queryFn: async () => {
      switch (filter) {
        case 'google':
          return await fetchGoogleNews();
        case 'toi':
          return await fetchTimesOfIndia();
        default:
          return await fetchAllNews();
      }
    },
    refetchOnWindowFocus: false,
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  return (
    <Layout>
      <div>
        <div className="flex items-center mb-2">
          <Newspaper className="mr-2 text-blog-primary" size={24} />
          <h1 className="text-3xl md:text-4xl font-bold text-blog-dark">
            Live News Feed
          </h1>
        </div>
        
        <p className="text-gray-600 mb-6">
          Stay informed with the latest headlines from Google News and Times of India
        </p>
        
        {/* Filter options */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'all'
                ? 'bg-blog-primary text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <RssIcon className="w-4 h-4 inline-block mr-1" /> All Sources
          </button>
          
          <button
            onClick={() => setFilter('google')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'google'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Google News
          </button>
          
          <button
            onClick={() => setFilter('toi')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'toi'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Times of India
          </button>
        </div>
        
        {isLoading && (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blog-primary"></div>
          </div>
        )}
        
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            <p>There was an error fetching the latest news. Please try again later.</p>
          </div>
        )}
        
        {!isLoading && !isError && allNews && allNews.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-md">
            <p>No news articles available at the moment. Please try again later.</p>
          </div>
        )}
        
        {!isLoading && !isError && allNews && allNews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.map((news, index) => (
              <NewsCard key={`${news.source}-${index}`} news={news} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NewsFeed;
