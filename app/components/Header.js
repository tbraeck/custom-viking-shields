'use client'

import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-background">
        <div className="logo">
          <img src="/assets/logo.png" alt="Viking Shields & Weapons Logo" />
        </div>
        <div className="header-content">
          <h1 className="title">Viking Shields & Weapons</h1>
          <nav className="menu">
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;