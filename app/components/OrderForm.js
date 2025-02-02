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

  const renderShieldSymbol = () => {
    if (!formData.shieldSymbol) return null;
    const symbolFileName = formData.shieldSymbol.toLowerCase().replace(/ /g, '_');
    return (
      <image
        href={`/svgs/${symbolFileName}.svg`}
        x="50"
        y="50"
        height="100"
        width="100"
        fill={formData.symbolColor || 'white'}
      />
    );
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
              <option value="dragon">Dragon</option>
              <option value="wolf">Wolf</option>
              <option value="raven">Raven</option>
              <option value="bear">Bear</option>
              <option value="boar">Boar</option>
              <option value="skull">Skull</option>
              <option value="griffin">Griffin</option>
              <option value="horse">Odin&apos;s Horse</option>
              <option value="sailingShip">Long Ship</option>
              <option value="axe">Viking Axe</option>
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
        </form>
      </div>
      <div className="shield-preview">
        <h2>Shield Preview</h2>
        <svg
          width={shieldSizes[formData.shieldSize] || 150}
          height={shieldSizes[formData.shieldSize] || 150}
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="90" fill={formData.color || 'silver'} stroke="black" strokeWidth="5" />
          {renderShieldSymbol()}
        </svg>
      </div>
      <div className="tally">
        <h3>Total Cost: ${tally}</h3>
      </div>
    </div>
  );
}

export default OrderForm;
