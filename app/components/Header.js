'use client';

import Image from 'next/image';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-background">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <Image
                src="/viking_shield.png"
                width={100}
                height={100}
                alt="Viking Shields & Weapons Logo"
                className="logo-image"
              />
            </Link>
          </div>
          
          {/* Title Section */}
          <div className="title-container">
            <h1 className="title">Custom Wood</h1>
            <h1 className="title">Shields & Weapons</h1>
          </div>

          {/* Navigation Menu */}
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
