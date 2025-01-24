"use client"

import { useState } from 'react';
import './OrderForm.css';

function OrderForm() {
  const [formData, setFormData] = useState({
    shieldSize: '',
    shieldSymbol: '',
    weapon: '',
    color: '',
    childName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email or order invoice here
    alert('Order placed successfully!');
  };

  return (
    <div className="order-form">
      <h1>Customize Your Viking Shield</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Shield Size:
          <select name="shieldSize" value={formData.shieldSize} onChange={handleChange}>
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <label>
          Shield Symbol:
          <select name="shieldSymbol" value={formData.shieldSymbol} onChange={handleChange}>
            <option value="">Select Symbol</option>
            <option value="Dragon">Dragon</option>
            <option value="Wolf">Wolf</option>
            <option value="Raven">Raven</option>
          </select>
        </label>
        <label>
          Weapon:
          <select name="weapon" value={formData.weapon} onChange={handleChange}>
            <option value="">No Weapon</option>
            <option value="Sword">Sword</option>
            <option value="Axe">Axe</option>
            <option value="Dagger">Dagger</option>
          </select>
        </label>
        <label>
          Shield Color:
          <input
            type="text"
            name="color"
            placeholder="Enter color"
            value={formData.color}
            onChange={handleChange}
          />
        </label>
        <label>
          Child&apos;s Name:
          <input
            type="text"
            name="childName"
            placeholder="Enter name"
            value={formData.childName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Order Now</button>
      </form>
    </div>
  );
}

export default OrderForm;