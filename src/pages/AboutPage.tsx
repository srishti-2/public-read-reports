
import React from 'react';
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blog-dark mb-6">
          About ResearchHub
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 prose-custom">
          <h2>Our Mission</h2>
          <p>
            ResearchHub aims to provide accessible, high-quality research reports across various fields to inform, educate, and inspire our readers. We believe that access to knowledge is fundamental to progress and innovation.
          </p>
          
          <h2>What We Offer</h2>
          <p>
            Our platform features comprehensive reports on topics ranging from cutting-edge technology and environmental science to business trends and economic analysis. Each report is crafted to provide valuable insights in an accessible format.
          </p>
          
          <h2>Our Content</h2>
          <p>
            The reports on ResearchHub are carefully curated to ensure accuracy, relevance, and readability. We strive to present complex information in a clear, engaging manner that serves both specialists and general readers alike.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            For any inquiries about our reports or the platform, please contact us at <a href="mailto:contact@researchhub.example">contact@researchhub.example</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
