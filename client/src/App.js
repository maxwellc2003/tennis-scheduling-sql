import React from "react";
import { Helmet } from "react-helmet";

import "./assets/css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Signup from "./pages/Signup";
import PrivacyTerms from "./pages/PrivacyTerms";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Support from "./pages/Support";

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
        <Route path="/privacyterms" element={<PrivacyTerms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
