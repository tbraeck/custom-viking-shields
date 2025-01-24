import { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    size: 'small',
    color: 'red',
    symbol: 'dragon',
    weapon: 'sword',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sending email with order details here
    alert('Order placed successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Customize Your Shield</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Child&apos;s Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Size</label>
        <select
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="small">Small (12 Inch)</option>
          <option value="medium">Medium (18 Inch)</option>
          <option value="large">Large (24 Inch)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Color</label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="w-20 h-10 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Symbol</label>
        <select
          name="symbol"
          value={formData.symbol}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="dragon">Dragon</option>
          <option value="raven">Raven</option>
          <option value="wolf">Wolf</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Weapon</label>
        <select
          name="weapon"
          value={formData.weapon}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="none">No Weapon</option>
          <option value="sword">Sword</option>
          <option value="axe">Axe</option>
          <option value="dagger">Dagger</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Order Now
      </button>
    </form>
  );
};

export default ProductForm;
