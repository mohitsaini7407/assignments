import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-logo">CYBORG GAMING</span>
        <span className="footer-copy">&copy; {new Date().getFullYear()} Cyborg Gaming. All rights reserved.</span>
        <div className="footer-socials">
          {/* Social icons can be added here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer; 