import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/page";
import Applications from "./applications/page";
import CalendarPage from "./calendar/page";
import Settings from "./settings/page";
import { AppNav } from "./components/app-nav";

function App() {
  return (
    <Router> {}
      <AppNav />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
