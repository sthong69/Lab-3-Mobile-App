import * as React from "react";
import "./index.css";
import Appbar from "./components/Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
