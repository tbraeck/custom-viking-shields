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
      <div className="shield-preview">
  <h2>Shield Preview</h2>
  <svg
    width={shieldSizes[formData.shieldSize] || 150}
    height={shieldSizes[formData.shieldSize] || 150}
    viewBox="0 0 200 200"
  >
    {/* Shield Base */}
    <circle cx="100" cy="100" r="90" fill={formData.color || 'silver'} stroke="black" strokeWidth="5" />

    {/* Accent Shape */}
    {formData.accent_shape && (
      <>
        {formData.accent_shape === "cross" && (
          <>
            <rect x="95" y="40" width="10" height="120" fill={formData.accent_color || "black"} />
            <rect x="40" y="95" width="120" height="10" fill={formData.accent_color || "black"} />
          </>
        )}
        {formData.accent_shape === "Spiral" && (
          <path
            d="M100,100 C130,70 170,70 130,100 C100,130 70,170 100,130"
            fill="none"
            stroke={formData.accent_color || "black"}
            strokeWidth="10"
          />
        )}
        {formData.accent_shape === "Rings" && (
          <>
            <circle cx="100" cy="100" r="40" fill="none" stroke={formData.accent_color || "black"} strokeWidth="10" />
            <circle cx="100" cy="100" r="20" fill="none" stroke={formData.accent_color || "black"} strokeWidth="10" />
          </>
        )}
        {formData.accent_shape === "Diagonal Pie" && (
          <path
            d="M100,100 L200,100 A100,100 0 0,0 100,0 Z"
            fill={formData.accent_color || "black"}
          />
        )}
        {formData.accent_shape === "Six Pie Pieces" && (
          <>
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <path
                key={angle}
                d={`M100,100 L${100 + 90 * Math.cos((angle * Math.PI) / 180)},${100 + 90 * Math.sin((angle * Math.PI) / 180)} A90,90 0 0,1 100,100`}
                fill={formData.accent_color || "black"}
              />
            ))}
          </>
        )}
      </>
    )}

    {/* Shield Symbol */}
    {formData.shieldSymbol && (
      <text x="100" y="110" textAnchor="middle" fontSize="20" fill={formData.symbolColor || 'white'}>
        {formData.shieldSymbol}
      </text>
    )}
  </svg>
</div>


  

  <div className="weapon-preview">
    <h2>Weapon Preview</h2>
    {formData.weapon && (
      <svg width="150" height="150" viewBox="0 0 200 200">
        {formData.weapon === "Sword" && (
          <>
            <rect x="90" y="30" width="20" height="100" fill="gray" />
            <rect x="80" y="120" width="40" height="10" fill="gold" />
          </>
        )}
        {formData.weapon === "Battle_Axe" && (
          <>
            <rect x="95" y="30" width="10" height="100" fill="brown" />
            <circle cx="100" cy="30" r="25" fill="silver" />
          </>
        )}
        {formData.weapon === "Gotthard_Axe" && (
          <>
            <rect x="95" y="30" width="10" height="100" fill="brown" />
            <path d="M100,30 Q120,60 100,90" stroke="silver" strokeWidth="10" fill="none" />
          </>
        )}
        {formData.weapon === "Dagger" && (
          <>
            <rect x="95" y="50" width="10" height="50" fill="gray" />
            <rect x="85" y="95" width="30" height="10" fill="gold" />
          </>
        )}
      </svg>
    )}
  </div>

  {/* Tally */}
  <div className="tally">
    <h3>Total Cost: ${tally}</h3>
  </div>
</div>

  );
}

export default OrderForm;

