import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/page";
import Applications from "./applications/page";
import CalendarPage from "./calendar/page";
import Settings from "./settings/page";
import { AppNav } from "./components/app-nav";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Navbar (Separate from Scrollable Content) */}
      <AppNav />

      {/* Scrollable Content Wrapper */}
      <div className="flex-1 overflow-y-auto relative pt-20">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
