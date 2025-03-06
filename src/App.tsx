import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "./components/signup";
import Login from "./components/login";
import Verify from "./components/verify";
import Dashboard from "./dashboard/page";
import Applications from "./applications/page";
import CalendarPage from "./calendar/page";
import Settings from "./settings/page";
import { AppNav } from "./components/app-nav";


// Function to check authentication state (Replace with real auth logic)
const isAuthenticated = () => !!localStorage.getItem("token");

export default function App() {
  const [auth, setAuth] = useState<boolean>(isAuthenticated());
  const location = useLocation();

  useEffect(() => {
    const handleAuthChange = () => setAuth(isAuthenticated());
    window.addEventListener("storage", handleAuthChange);
    return () => window.removeEventListener("storage", handleAuthChange);
  }, []);

  const hideNavPages = ["/login", "/signup", "/verify"];
  const showNav = !hideNavPages.includes(location.pathname);

  return (
    <div className="h-screen flex flex-col">
      {showNav && <AppNav />}

      <div className="flex-1 overflow-y-auto relative pt-20">
        <Routes>
          <Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<Verify />} />
          
          {/* Protected Routes - Only accessible if authenticated */}
          <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/applications" element={auth ? <Applications /> : <Navigate to="/login" />} />
          <Route path="/calendar" element={auth ? <CalendarPage /> : <Navigate to="/login" />} />
          <Route path="/settings" element={auth ? <Settings /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

