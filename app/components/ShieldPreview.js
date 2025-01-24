const ShieldPreview = ({ color, symbol, size }) => (
    <div className="relative w-64 h-64 border rounded-full" style={{ backgroundColor: color }}>
      <img
        src={`/images/${symbol}.png`}
        alt={`${symbol} symbol`}
        className="w-1/2 h-1/2 absolute inset-0 m-auto"
      />
    </div>
  );
  
  export default ShieldPreview;
  