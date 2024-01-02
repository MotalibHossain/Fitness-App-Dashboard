import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Schedule from "./pages/Schedule";
import Activities from "./pages/Activities";
import Settings from "./pages/Settings";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
