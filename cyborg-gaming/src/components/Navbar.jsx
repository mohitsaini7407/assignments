import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/browse', label: 'Browse' },
  { to: '/streams', label: 'Streams' },
  { to: '/profile', label: 'Profile' },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-circle">C</div>
        <span className="cyborg-text">CYBORG</span>
      </div>
      <ul className="navbar-links">
        {navLinks.map(link => (
          <li key={link.to} className={location.pathname === link.to ? 'active' : ''}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="navbar-avatar">
        <div className="avatar-placeholder" />
      </div>
    </nav>
  );
}

export default Navbar; 