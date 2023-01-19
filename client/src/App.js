import React from "react";
import { Helmet } from "react-helmet";

import "./assets/css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import PrivacyTerms from "./pages/PrivacyTerms";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

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
        <Route path="/calendar" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacyterms" element={<PrivacyTerms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
