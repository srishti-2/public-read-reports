
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ReportCard from '@/components/ReportCard';
import { getReportsByCategory } from '@/data/reports';
import { useToast } from '@/hooks/use-toast';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const formattedCategory = category ? 
    category.charAt(0).toUpperCase() + category.slice(1) : '';
    
  const reports = category ? 
    getReportsByCategory(formattedCategory) : [];
    
  if (reports.length === 0 && formattedCategory) {
    toast({
      title: "Category Not Found",
      description: "No reports found for this category.",
      variant: "destructive",
    });
    navigate('/');
    return null;
  }

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-blog-dark mb-2">
          {formattedCategory} Reports
        </h1>
        <p className="text-gray-600 mb-8">
          Explore all reports in the {formattedCategory} category
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reports.map(report => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
