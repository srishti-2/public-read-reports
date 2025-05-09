
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Layout from '@/components/Layout';
import { getReportBySlug } from '@/data/reports';
import { useToast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown';

const ReportDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const report = slug ? getReportBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!report) {
      toast({
        title: "Report Not Found",
        description: "The requested report could not be found.",
        variant: "destructive",
      });
      navigate('/');
    }
  }, [report, navigate, toast]);

  if (!report) {
    return null;
  }

  return (
    <Layout>
      <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img 
          src={report.coverImage} 
          alt={report.title} 
          className="w-full h-64 md:h-80 object-cover"
        />
        
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link to={`/category/${report.category.toLowerCase()}`} className="text-sm bg-blog-primary/10 text-blog-primary px-3 py-1 rounded-full">
              {report.category}
            </Link>
            
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              {report.publishedAt}
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blog-dark mb-6">
            {report.title}
          </h1>
          
          <div className="prose-custom">
            <ReactMarkdown>{report.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ReportDetail;
