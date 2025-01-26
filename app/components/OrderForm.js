"use client"

import { useState } from 'react';
import './OrderForm.css';

function OrderForm() {
  const [formData, setFormData] = useState({
    shieldSize: '',
    shieldSymbol: '',
    weapon: '',
    color: '',
    accent_color: '',
    accent_shape: '',
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
            <option value="Small">Small (12 inch)</option>
            <option value="Medium">Medium (18 inch)</option>
            <option value="Large">Large (24 inch)</option>
          </select>
        </label>
        <label>
          Shield Symbol:
          <select name="shieldSymbol" value={formData.shieldSymbol} onChange={handleChange}>
            <option value="">Select Symbol</option>
            <option value="Dragon">Dragon</option>
            <option value="Wolf">Wolf</option>
            <option value="Raven">Raven</option>
            <option value="Bear">Bear</option>
            <option value="Boar">Boar</option>
            <option value="8-legged-horse">Odin&apos;s Horse</option>
            <option value="Long Ship">Long Ship</option>
            <option value="Bear">Viking Axe</option>
          </select>
        </label>
        <label>
          Weapon:
          <select name="weapon" value={formData.weapon} onChange={handleChange}>
            <option value="">No Weapon</option>
            <option value="Sword">Sword</option>
            <option value="Battle_Axe">Battle Axe (Double-Blade)</option>
            <option value="Gotthard_Axe">Gotthard Axe (Single Blade)</option>
            <option value="Dagger">Dagger</option>
          </select>
        </label>
        <label>
          Shield Color:
          <select name="color" value={formData.color} onChange={handleChange}>
            <option value=""></option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
          </select>
        </label>
        <label>
          Accent Color:
          <select name="accent_color" value={formData.accent_color} onChange={handleChange}>
            <option value=""></option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
          </select>
        </label>
        <label>
          Accent Shape:
          <select name="accent_shape" value={formData.accent_shape} onChange={handleChange}>
            <option value=""></option>
            <option value="cross">Cross</option>
            <option value="Spiral">Spiral</option>
            <option value="Rings">Rings</option>
            <option value="Diagonal Pie">Diagonal Pie Piece</option>
            <option value="Six Pie Pieces">Six Pie Pieces</option>
            <option value="Custom Viking Rune">Custom Viking Rune</option>
          </select>
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