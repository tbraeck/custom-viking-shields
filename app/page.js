'use client'


// File: App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import './components/App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<OrderForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
