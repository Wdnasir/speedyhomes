import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BuyBoxPage from './pages/BuyBoxPage';
import JVFormPage from './pages/JVFormPage';
import PartnerProgramPage from './pages/PartnerProgramPage';
import DispoHubPage from './pages/DispoHubPage';
import UnderwritingPage from './pages/UnderwritingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/buy-box" element={<BuyBoxPage />} />
                <Route path="/jv-form" element={<JVFormPage />} />
                <Route path="/partner-program" element={<PartnerProgramPage />} />
                <Route path="/dispo-hub" element={<DispoHubPage />} />
                <Route path="/underwriting" element={<UnderwritingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/coming-soon" element={<ComingSoonPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;