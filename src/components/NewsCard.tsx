
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { NewsItem, getRelativeTime } from '@/services/newsService';
import { ExternalLink, Clock } from 'lucide-react';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className="article-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            news.source === 'Google News' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
          }`}>
            {news.source}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            <span>{getRelativeTime(news.pubDate)}</span>
          </div>
        </div>
        <CardTitle className="text-lg">{news.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        {news.imageUrl && (
          <div className="mb-3 overflow-hidden rounded-md">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-36 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardDescription className="text-sm">
          {news.description.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blog-primary hover:text-blog-secondary flex items-center text-sm"
        >
          Read full article <ExternalLink className="ml-1 w-3 h-3" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
