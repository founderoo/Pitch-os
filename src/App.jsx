








import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import AboutUs from "./pages/about"; // ✅ Correct lowercase file + correct component name
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Testimonials from "./pages/Testimonials";
import Integrations from "./pages/Integrations";

import { useTheme } from "./store/theme";
import { useAuthStore } from "./store/auth";
import { Toaster } from "./components/ui/toaster";
import { Footer } from "./components/Footer";

import { doc, getDoc, getFirestore } from "firebase/firestore";

// Middleware for onboarding check
function RequireOnboarding({ children }) {
  const { user, loading } = useAuthStore();
  const [checking, setChecking] = useState(true);
  const [onboardingStatus, setOnboardingStatus] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const checkOnboarding = async () => {
      if (!user || loading) {
        if (isMounted) setChecking(false);
        return;
      }

      try {
        const settingsRef = doc(db, "userSettings", user.uid);
        const settingsSnap = await getDoc(settingsRef);
        const isCompleted =
          settingsSnap.exists() &&
          settingsSnap.data().onboardingCompleted === true;

        if (isMounted) {
          setOnboardingStatus(isCompleted);
          setChecking(false);
        }
      } catch (error) {
        console.error("Error checking onboarding status:", error);
        if (isMounted) setChecking(false);
      }
    };

    timeoutId = setTimeout(checkOnboarding, 100);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [user, loading, db]);

  useEffect(() => {
    if (!checking && user && onboardingStatus !== null) {
      const currentPath = location.pathname;
      if (!onboardingStatus && currentPath !== "/onboarding") {
        navigate("/onboarding", { replace: true });
      } else if (onboardingStatus && currentPath === "/onboarding") {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [checking, onboardingStatus, location.pathname, navigate, user]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!checking && (!user || onboardingStatus || location.pathname === "/onboarding")) {
    return children;
  }

  return null;
}

// Main layout + routes
function AppContent() {
  const location = useLocation();
  const { initializeAuthListener } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, [initializeAuthListener]);

  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isDashboard && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route
            path="/dashboard"
            element={
              <RequireOnboarding>
                <Dashboard />
              </RequireOnboarding>
            }
          />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

// Theme wrapper
function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const isThemedRoute = ["/dashboard", "/onboarding"].includes(location.pathname);

  return (
    <div className={isThemedRoute ? theme : "light"}>
      <AppContent />
      <Toaster />
    </div>
  );
}

// Top level wrapper
function AppWrapper() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
