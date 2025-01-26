'use client'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import './components/App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import OrderForm from './components/OrderForm';
import Symbols from './components/Symbols';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
  <div className='symbols'>
    <Symbols />
  </div>
  <div>
    <Routes>
      <Route path="/" element={<OrderForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

