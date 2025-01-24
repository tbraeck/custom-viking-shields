import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}>
      <div className="header-content">
        <h1>Custom Viking Shields and Weapons</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;