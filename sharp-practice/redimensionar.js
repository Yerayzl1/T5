import sharp from "sharp";

// Miniatura (150x150)
sharp("./images/example.jpg")
  .resize(150, 150)
  .toFile("./output/redimensionar/example-thumbnail.jpg")
  .then(() => console.log("Miniatura creada!"))
  .catch((err) => console.error(err));

// Mida mitjana (800x600)
sharp("./images/example.jpg")
  .resize(800, 600)
  .toFile("./output/redimensionar/example-medium.jpg")
  .then(() => console.log("Mida mitjana creada!"))
  .catch((err) => console.error(err));

// Mida completa mantenint la proporció
sharp("./images/example.jpg")
  .resize({ width: 1920 })
  .toFile("./output/redimensionar/example-full.jpg")
  .then(() => console.log("Mida completa creada!"))
  .catch((err) => console.error(err));
