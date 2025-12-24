import productImages from "../utils/productImages";

const ProductCard = ({ name, image }) => {
  // Find the image object by filename
  const product = productImages.find((p) => p.fileName === image);

  if (!product) return <p>Image not found</p>;

  const imgStyle = {
    width: "560px",
    height: "400px",
    borderRadius: "12px",
    border: "2px solid red",
    objectFit: "cover"
  };

  return (
    <div className="card my-3">
      <img
        src={product.url}
        alt={name}
        className="card-img-top img-fluid mx-auto"
        style={imgStyle}
      />
      <div className="card-body text-center">
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
