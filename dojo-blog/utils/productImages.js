const images = import.meta.glob(
  "../assets/products/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const productImages = [];

for (const path in images) {
  const fileName = path.split("/").pop();
  const imageUrl = images[path].default;

  productImages.push({
    name: fileName.split(".")[0],
    fileName,
    url: imageUrl
  });
}

export default productImages;
