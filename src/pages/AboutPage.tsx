
import React from 'react';
import Layout from '@/components/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
          
          <h2>Meet the Creator</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6 p-6 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center">
              <Avatar className="h-32 w-32 border-2 border-blog-primary">
                <AvatarImage src="/lovable-uploads/be074a8f-c1eb-49c2-8165-b43d58fcc31a.png" alt="SRISHTI GOYAL" />
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
              <h3 className="mt-3 text-xl font-semibold text-blog-dark">SRISHTI GOYAL</h3>
              <p className="text-gray-600 text-sm">Creator & Lead Researcher</p>
            </div>
            <div className="flex-1">
              <p className="text-gray-700">
                Srishti Goyal is the visionary behind ResearchHub, bringing her passion for research and knowledge sharing to this platform. With a keen eye for detail and a commitment to accuracy, she leads our efforts to make complex research accessible to everyone.
              </p>
              <p className="text-gray-700 mt-3">
                Her mission is to bridge the gap between academic research and practical knowledge, making information more accessible to a wider audience.
              </p>
            </div>
          </div>
          
          <h2 className="mt-8">Contact Information</h2>
          <p>
            For any inquiries about our reports or the platform, please contact us at <a href="mailto:contact@researchhub.example">contact@researchhub.example</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
