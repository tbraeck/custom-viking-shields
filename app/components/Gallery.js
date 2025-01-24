
function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <p>View some of our handcrafted shields and weapons.</p>
      <div className="gallery-grid">
        {/* Add images here */}
        <img src="/path-to-image1.jpg" alt="Shield 1" />
        <img src="/path-to-image2.jpg" alt="Shield 2" />
      </div>
    </div>
  );
}

export default Gallery;