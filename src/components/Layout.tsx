
import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="min-h-screen flex flex-col bg-blog-light-bg">
      <NavBar />
      
      <main className="flex-grow">
        <div className="blog-container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {showSidebar ? (
              <>
                <div className="order-2 lg:order-1 lg:flex-1">
                  {children}
                </div>
                <div className="order-1 lg:order-2">
                  <Sidebar />
                </div>
              </>
            ) : (
              <div className="w-full">{children}</div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
