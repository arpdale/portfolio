import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import PortfolioLayout from '@/polymet/layouts/portfolio-layout';
import HomePage from '@/polymet/pages/home';
import AboutPage from '@/polymet/pages/about';
import WorkPage from '@/polymet/pages/work';
import ContactPage from '@/polymet/pages/contact';
import CaseStudyPage from '@/polymet/pages/case-study';
import GeolocationDemo from '@/components/GeolocationDemo';
import { geolocationService } from '@/services/geolocationService';
import { useGeolocationTracking } from '@/lib/analytics';

function App() {
  // Initialize geolocation tracking when app starts
  useEffect(() => {
    geolocationService.initializeTracking();
  }, []);

  // Track when geolocation is successfully captured
  useGeolocationTracking();

  return (
    <>
      <Router>
        <PortfolioLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-study/:id?" element={<CaseStudyPage />} />
            <Route path="/geo" element={<GeolocationDemo />} />
          </Routes>
        </PortfolioLayout>
      </Router>
      <Analytics 
        debug={process.env.NODE_ENV === 'development'}
        beforeSend={(event) => {
          // Filter out any sensitive or unwanted URLs
          if (event.url.includes('/admin') || event.url.includes('/private')) {
            return null;
          }
          return event;
        }}
      />
    </>
  );
}

export default App;
