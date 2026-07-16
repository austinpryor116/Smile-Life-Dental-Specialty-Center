/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import PatientCenter from './pages/PatientCenter';
import ProviderCenter from './pages/ProviderCenter';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import Orthodontics from './pages/Orthodontics';
import Periodontics from './pages/Periodontics';
import GeneralDentistry from './pages/GeneralDentistry';
import PreOpInstructions from './pages/PreOpInstructions';
import PostOpInstructions from './pages/PostOpInstructions';
import BookConsultation from './pages/BookConsultation';
import ProcedureDetails from './pages/ProcedureDetails';
import { motion, AnimatePresence } from 'motion/react';

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-white px-6 py-3 text-sm font-bold font-body transition-transform"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow outline-hidden pb-1" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/departments" element={<PageWrapper><Departments /></PageWrapper>} />
              <Route path="/orthodontics" element={<PageWrapper><Orthodontics /></PageWrapper>} />
              <Route path="/periodontics" element={<PageWrapper><Periodontics /></PageWrapper>} />
              <Route path="/periodontics/:procedureSlug" element={<PageWrapper><ProcedureDetails /></PageWrapper>} />
              <Route path="/general-dentistry" element={<PageWrapper><GeneralDentistry /></PageWrapper>} />
              <Route path="/patient-center" element={<PageWrapper><PatientCenter /></PageWrapper>} />
              <Route path="/pre-op" element={<PageWrapper><PreOpInstructions /></PageWrapper>} />
              <Route path="/post-op" element={<PageWrapper><PostOpInstructions /></PageWrapper>} />
              <Route path="/provider-center" element={<PageWrapper><ProviderCenter /></PageWrapper>} />
              <Route path="/legal" element={<PageWrapper><Legal /></PageWrapper>} />
              <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
              <Route path="/accessibility" element={<PageWrapper><Accessibility /></PageWrapper>} />
              <Route path="/book" element={<PageWrapper><BookConsultation /></PageWrapper>} />
              {/* Fallback for other routes */}
              <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
