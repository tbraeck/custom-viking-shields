// 'use client';

// import { useState } from 'react';
// import './OrderForm.css';

// function OrderForm() {
//   const [formData, setFormData] = useState({
//     shieldSize: '',
//     shieldSymbol: '',
//     symbolColor: '',
//     weapon: '',
//     color: '',
//     accent_color: '',
//     accent_shape: '',
//     childName: '',
//   });

//   const [tally, setTally] = useState(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     const prices = {
//       shieldSize: { Small: 10, Medium: 20, Large: 30 },
//       shieldSymbol: { Dragon: 15, Wolf: 12, Raven: 10, Bear: 18, Boar: 14, '8-legged-horse': 20, 'Long Ship': 25, 'Viking Axe': 22 },
//       weapon: { Sword: 25, Battle_Axe: 20, Gotthard_Axe: 18, Dagger: 10 },
//     };

//     if (prices[name]) {
//       setTally((prevTally) => {
//         const currentPrice = prices[name][value] || 0;
//         const previousPrice = prices[name][formData[name]] || 0;
//         return prevTally - previousPrice + currentPrice;
//       });
//     }
//   };

//   const shieldSizes = {
//     Small: 100,
//     Medium: 150,
//     Large: 200,
//   };

//   const renderShieldSymbol = () => {
//     if (!formData.shieldSymbol) return null;
//     const symbolFileName = formData.shieldSymbol.toLowerCase().replace(/ /g, '_');
//     return (
//       <image
//         href={`/svgs/${symbolFileName}.svg`}
//         x="50"
//         y="50"
//         height="100"
//         width="100"
//         fill={formData.symbolColor || 'white'}
//       />
//     );
//   };

//   return (
//     <div className="order-page">
//       <div className="form-container">
//         <h1>Customize Your Viking Shield</h1>
//         <form>
//           <label>
//             Child&apos;s Name:
//             <input type="text" name="childName" value={formData.childName} onChange={handleChange} />
//           </label>
//           <label>
//             Shield Size:
//             <select name="shieldSize" value={formData.shieldSize} onChange={handleChange}>
//               <option value="">Select Size</option>
//               <option value="Small">Small (12 inch)</option>
//               <option value="Medium">Medium (18 inch)</option>
//               <option value="Large">Large (24 inch)</option>
//             </select>
//           </label>
//           <label>
//             Shield Color:
//             <select name="color" value={formData.color} onChange={handleChange}>
//               <option value="">Select Color</option>
//               <option value="White">White</option>
//               <option value="Black">Black</option>
//               <option value="Red">Red</option>
//               <option value="Blue">Blue</option>
//             </select>
//           </label>
//           <label>
//             Shield Symbol:
//             <select name="shieldSymbol" value={formData.shieldSymbol} onChange={handleChange}>
//               <option value="">Select Symbol</option>
//               <option value="dragon">Dragon</option>
//               <option value="wolf">Wolf</option>
//               <option value="raven">Raven</option>
//               <option value="bear">Bear</option>
//               <option value="boar">Boar</option>
//               <option value="skull">Skull</option>
//               <option value="griffin">Griffin</option>
//               <option value="horse">Odin&apos;s Horse</option>
//               <option value="sailingShip">Long Ship</option>
//               <option value="axe">Viking Axe</option>
//             </select>
//           </label>
//           <label>
//             Symbol Color:
//             <select name="symbolColor" value={formData.symbolColor} onChange={handleChange}>
//               <option value="Gold">Gold</option>
//               <option value="Silver">Silver</option>
//               <option value="Bronze">Bronze</option>
//               <option value="White">White</option>
//               <option value="Black">Black</option>
//               <option value="Red">Red</option>
//               <option value="Blue">Blue</option>
//             </select>
//           </label>
//           <label>
//             Accent Color:
//             <select name="accent_color" value={formData.accent_color} onChange={handleChange}>
//               <option value="">Select Accent Color</option>
//               <option value="Gold">Gold</option>
//               <option value="Silver">Silver</option>
//               <option value="Bronze">Bronze</option>
//               <option value="Black">Black</option>
//               <option value="Red">Red</option>
//             </select>
//           </label>
//           <label>
//             Accent Shape:
//             <select name="accent_shape" value={formData.accent_shape} onChange={handleChange}>
//               <option value="">Select Accent Shape</option>
//               <option value="Circle">Circle</option>
//               <option value="Square">Square</option>
//               <option value="Triangle">Triangle</option>
//               <option value="Star">Star</option>
//               <option value="Spiral">Square</option>
//               <option value="six_pie_pieces">6 Pie Pieces</option>
//               <option value="four_pie_pieces">4 Pie Pieces</option>
//               <option value="Cross">Cross</option>
//               <option value="Sun">Sun</option>
         
//             </select>
//           </label>
//           <label>
//             Weapon Choice:
//             <select name="weapon" value={formData.weapon} onChange={handleChange}>
//               <option value="">Select Weapon</option>
//               <option value="Sword">Sword</option>
//               <option value="Battle_Axe">Battle Axe</option>
//               <option value="Gotthard_Axe">Gotthard Axe</option>
//               <option value="Dagger">Dagger</option>
//             </select>
//           </label>
//         </form>
//       </div>
//       <div className="shield-preview">
//         <h2>Shield Preview</h2>
//         <svg
//           width={shieldSizes[formData.shieldSize] || 150}
//           height={shieldSizes[formData.shieldSize] || 150}
//           viewBox="0 0 200 200"
//         >
//           <circle cx="100" cy="100" r="90" fill={formData.color || 'silver'} stroke="black" strokeWidth="5" />
//           {renderShieldSymbol()}
//         </svg>
//       </div>
//       <div className="tally">
//         <h3>Total Cost: ${tally}</h3>
//       </div>
//     </div>
//   );
// }

// export default OrderForm;

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

  const renderAccentShape = () => {
    if (!formData.accent_shape) return null;
    const accentFileName = formData.accent_shape.toLowerCase().replace(/ /g, '_');
    return (
      <image
        href={`/svgs/${accentFileName}.svg`}
        // x="0"
        // y="0"
        // height={shieldSizes[formData.shieldSize] || 150}
        // width={shieldSizes[formData.shieldSize] || 150}
        x="25"
        y="23"
        height="150"
        width="150"
        fill={formData.accent_color || 'black'}
      />
    );
  };

  return (
    <div className="order-page">
      <div className="form-container">
        <h1>Customize Your Viking Shield</h1>
        <form>
          <label>
            Child&apos;s Name:
            <input type="text" name="childName" value={formData.childName} onChange={handleChange} />
          </label>
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
          <label>
            Accent Color:
            <select name="accent_color" value={formData.accent_color} onChange={handleChange}>
              <option value="">Select Accent Color</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
            </select>
          </label>
          <label>
            Accent Shape:
            <select name="accent_shape" value={formData.accent_shape} onChange={handleChange}>
              <option value="">Select Accent Shape</option>
              <option value="Circle">Circle</option>
              <option value="Square">Square</option>
              <option value="triangle">Triangle</option>
              <option value="star">Star</option>
              <option value="spiral">Square</option>
              <option value="six_pie_pieces">6 Pie Pieces</option>
              <option value="four_pie_pieces">4 Pie Pieces</option>
              <option value="cross">Cross</option>
              <option value="sun">Sun</option>
            </select>
          </label>
          <label>
            Weapon Choice:
            <select name="weapon" value={formData.weapon} onChange={handleChange}>
              <option value="">Select Weapon</option>
              <option value="Sword">Sword</option>
              <option value="Battle_Axe">Battle Axe</option>
              <option value="Gotthard_Axe">Gotthard Axe</option>
              <option value="Dagger">Dagger</option>
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
  {renderAccentShape()}
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
