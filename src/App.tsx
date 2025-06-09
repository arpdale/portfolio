import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioLayout from '@/polymet/layouts/portfolio-layout';
import HomePage from '@/polymet/pages/home';
import AboutPage from '@/polymet/pages/about';
import WorkPage from '@/polymet/pages/work';
import ContactPage from '@/polymet/pages/contact';
import CaseStudyPage from '@/polymet/pages/case-study';

function App() {
  return (
    <Router>
      <PortfolioLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-study/:id?" element={<CaseStudyPage />} />
        </Routes>
      </PortfolioLayout>
    </Router>
  );
}

export default App;
