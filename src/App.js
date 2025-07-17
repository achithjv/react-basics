import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";
import Profile from "./Profile";
import Quotes from "./Quotes";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#ddd" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/tasks" style={{ marginRight: "10px" }}>Tasks</Link>
        <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
