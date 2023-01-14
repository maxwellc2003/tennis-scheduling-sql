import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/footer.css";

// We can add more character to this

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/contact" className="footer-btn">Contact Us</Link>
      </div>
      <div>
        <Link to="/support" className="footer-btn">Support Us</Link>
      </div>
      <div>
        <Link to="/team" className="footer-btn">Team</Link>
      </div>
      <div>
        <Link to="/privacyterms" className="footer-btn">Privacy Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
