import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import { useTheme } from './store/theme';
import { useAuthStore } from './store/auth';
import { Toaster } from './components/ui/toaster';
import { Footer } from './components/Footer';

function AppContent() {
  const location = useLocation();
  const { theme } = useTheme();
  const { initializeAuthListener } = useAuthStore();
  
  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, [initializeAuthListener]);
  
  // Hide navbar and footer on dashboard route
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isDashboard && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Router>
        <AppContent />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
