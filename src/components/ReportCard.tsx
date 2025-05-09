
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { type Report } from '@/data/reports';

interface ReportCardProps {
  report: Report;
}

const ReportCard: React.FC<ReportCardProps> = ({ report }) => {
  return (
    <article className={`article-card ${report.featured ? 'article-featured' : ''}`}>
      <Link to={`/reports/${report.slug}`}>
        <img 
          src={report.coverImage} 
          alt={report.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <span className="text-sm text-blog-primary font-medium">
            {report.category}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            {report.publishedAt}
          </div>
        </div>
        
        <Link to={`/reports/${report.slug}`}>
          <h2 className="text-xl font-semibold text-blog-dark mb-2 hover:text-blog-primary transition-colors">
            {report.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {report.excerpt}
        </p>
        
        <Link 
          to={`/reports/${report.slug}`}
          className="text-blog-primary font-medium hover:text-blog-secondary transition-colors"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default ReportCard;
