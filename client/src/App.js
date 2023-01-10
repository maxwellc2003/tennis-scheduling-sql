import React from "react";
import { Helmet } from "react-helmet";

import "./assets/css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Tennis-Scheduling</title>
        <meta name="description" content="Tennis Scheduling Application" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
