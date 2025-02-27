import { Routes, Route } from "react-router-dom";
import Dashboard from "@/dashboard/page";
import Applications from "@/applications/page";
import Calendar from "@/calendar/page";
import Settings from "@/settings/page";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
  );
}

export default App;
