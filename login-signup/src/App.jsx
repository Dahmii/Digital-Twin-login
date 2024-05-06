import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./login.jsx";
import Signup from "./signup.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
