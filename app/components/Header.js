'use client'

import Image from 'next/image';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-background">
      <div className="logo">
          <Link to="/">
            <Image
              src="/assets/logo.png"
              width={100}
              height={100}
              alt="Viking Shields & Weapons Logo"
              className="logo-image"
            />
          </Link>
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