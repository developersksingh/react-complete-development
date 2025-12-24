import productImages from "./../utils/productImages";

const ProductGallery = () => {
  return (
    <div className="container py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Product Gallery</h1>
        <p className="text-muted">All our products displayed dynamically</p>
      </div>

      {/* Gallery Grid */}
      <div className="row g-4">
        {productImages.map((product) => (
          <div className="col-md-4 col-sm-6" key={product.fileName}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.url}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">{product.fileName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
