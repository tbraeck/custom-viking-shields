'use client'

import { useState } from 'react';
import './OrderForm.css';

function OrderForm() {
  const [formData, setFormData] = useState({
    shieldSize: '',
    shieldSymbol: '',
    symbolColor: '',
    weapon: '',
    color: '',
    accent_color: '',
    accent_shape: '',
    childName: '',
  });

  const [tally, setTally] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update the tally based on selection
    const prices = {
      shieldSize: { Small: 10, Medium: 20, Large: 30 },
      shieldSymbol: { Dragon: 15, Wolf: 12, Raven: 10, Bear: 18, Boar: 14, '8-legged-horse': 20, 'Long Ship': 25, 'Viking Axe': 22 },
      weapon: { Sword: 25, Battle_Axe: 20, Gotthard_Axe: 18, Dagger: 10 },
    };

    if (prices[name]) {
      setTally((prevTally) => {
        const currentPrice = prices[name][value] || 0;
        const previousPrice = prices[name][formData[name]] || 0;
        return prevTally - previousPrice + currentPrice;
      });
    }
  };

  const shieldSizes = {
    Small: 100,
    Medium: 150,
    Large: 200,
  };

  return (
    <div className="order-page">
      <div className="form-container">
        <h1>Customize Your Viking Shield</h1>
        <form>
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
            Shield Color:
            <select name="color" value={formData.color} onChange={handleChange}>
              <option value="">Select Color</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
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
              <option value="Viking Axe">Viking Axe</option>
            </select>
          </label>
          <label>
             Symbol Color:
            <select name="symbolColor" value={formData.symbolColor} onChange={handleChange}>
            <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select>
          </label>
          <label>
            Accent Shape:
            <select name="accent_shape" value={formData.accent_shape} onChange={handleChange}>
              <option value="">Select Shape</option>
              <option value="cross">Cross</option>
              <option value="Spiral">Spiral</option>
              <option value="Rings">Rings</option>
              <option value="Diagonal Pie">Diagonal Pie Piece</option>
              <option value="Six Pie Pieces">Six Pie Pieces</option>
              <option value="Custom Viking Rune">Custom Viking Rune</option>
            </select>
          </label>
          <label>
            Accent Color:
            <select name="accent_color" value={formData.accent_color} onChange={handleChange}>
              <option value="">Select Accent Color</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select>
          </label>
          
          <label>
            Weapon:
            <select name="weapon" value={formData.weapon} onChange={handleChange}>
              <option value="">Select Weapon</option>
              <option value="Sword">Sword</option>
              <option value="Battle_Axe">Battle Axe (Double-Blade)</option>
              <option value="Gotthard_Axe">Gotthard Axe (Single Blade)</option>
              <option value="Dagger">Dagger</option>
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
        </form>
      </div>

      {/* Shield Preview and Tally */}
      <div className="preview-container">
        <h2>Shield Preview</h2>
        <svg
  width={shieldSizes[formData.shieldSize] || 150}
  height={shieldSizes[formData.shieldSize] || 150}
  viewBox="0 0 200 200"
>
  {/* Shield Base */}
  <circle
    cx="100"
    cy="100"
    r="90"
    fill={formData.color || 'silver'}
    stroke="black"
    strokeWidth="5"
  />
  <circle
    cx="98"
    cy="98"
    r="92"
    fill={formData.color || 'gray'}
    stroke="black"
    strokeWidth="5"
  />

  {/* Accent Shape */}
  {formData.accent_shape && (
    <>
      {formData.accent_shape === 'cross' && (
        <rect
          x="90"
          y="50"
          width="20"
          height="100"
          fill={formData.accent_color || 'gold'}
        />
      )}
      {formData.accent_shape === 'Spiral' && (
        <path
          d="M100,100 m-20,0 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0"
          stroke={formData.accent_color || 'gold'}
          strokeWidth="4"
          fill="none"
        />
      )}
      {formData.accent_shape === 'Rings' && (
        <>
          <circle
            cx="100"
            cy="100"
            r="30"
            stroke={formData.accent_color || 'gold'}
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            stroke={formData.accent_color || 'gold'}
            strokeWidth="4"
            fill="none"
          />
        </>
      )}
      {formData.accent_shape === 'Diagonal Pie' && (
        <path
          d="M100,100 L100,10 A90,90 0 0,1 190,100 Z"
          fill={formData.accent_color || 'gold'}
        />
      )}
      {formData.accent_shape === 'Six Pie Pieces' && (
        <>
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M100,100 L${100 + 90 * Math.cos((Math.PI / 3) * i)},${100 + 90 * Math.sin((Math.PI / 3) * i)} A90,90 0 0,1 ${100 + 90 * Math.cos((Math.PI / 3) * (i + 1))},${100 + 90 * Math.sin((Math.PI / 3) * (i + 1))} Z`}
              fill={i % 2 === 0 ? (formData.accent_color || 'gold') : 'none'}
            />
          ))}
        </>
      )}
      {formData.accent_shape === 'Custom Viking Rune' && (
        <text
          x="100"
          y="110"
          textAnchor="middle"
          fontSize="30"
          fill={formData.accent_color || 'gold'}
        >
          ᛉ
        </text>
      )}
    </>
  )}

  {/* Shield Symbol */}
  {formData.shieldSymbol && (
    <text
      x="100"
      y="110"
      textAnchor="middle"
      fontSize="20"
      fill={formData.accent_color || 'white'}
    >
      {formData.shieldSymbol}
    </text>
  )}
</svg>


        {/* Tally */}
        <div className="tally">
          <h3>Total Cost: ${tally}</h3>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;

