import sharp from "sharp";

// Reduir la qualitat de la imatge JPEG a 80%
sharp("./images/example.jpg")
  .jpeg({ quality: 80 })
  .toFile("./output/compressio/example-quality-80.jpg")
  .then(() => console.log("Imatge JPEG comprimida a qualitat 80%!"))
  .catch((err) => console.error(err));

// Reduir la qualitat de la imatge PNG a 80%
sharp("./images/example.png")
  .png({ quality: 80 })
  .toFile("./output/compressio/example-quality-80.png")
  .then(() => console.log("Imatge PNG comprimida a qualitat 80%!"))
  .catch((err) => console.error(err));

// Reduir la qualitat de la imatge JPEG a 50%
sharp("./images/example.jpg")
  .jpeg({ quality: 50 })
  .toFile("./output/compressio/example-quality-50.jpg")
  .then(() => console.log("Imatge JPEG comprimida a qualitat 50%!"))
  .catch((err) => console.error(err));

// Reduir la qualitat de la imatge PNG a 50%
sharp("./images/example.png")
  .png({ quality: 50 })
  .toFile("./output/compressio/example-quality-50.png")
  .then(() => console.log("Imatge PNG comprimida a qualitat 50%!"))
  .catch((err) => console.error(err));

// Reduir la qualitat de la imatge JPEG a 20%
sharp("./images/example.jpg")
  .jpeg({ quality: 20 })
  .toFile("./output/compressio/example-quality-20.jpg")
  .then(() => console.log("Imatge JPEG comprimida a qualitat 20%!"))
  .catch((err) => console.error(err));

// Reduir la qualitat de la imatge PNG a 20%
sharp("./images/example.png")
  .png({ quality: 20 })
  .toFile("./output/compressio/example-quality-20.png")
  .then(() => console.log("Imatge PNG comprimida a qualitat 20%!"))
  .catch((err) => console.error(err));
