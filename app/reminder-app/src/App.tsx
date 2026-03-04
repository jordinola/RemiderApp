import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import Reminder from "./pages/Reminder";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/event" element={<Event />} />
        <Route path="/reminder" element={<Reminder />} />
      </Route>
    </Routes>
  );
}

export default App;
