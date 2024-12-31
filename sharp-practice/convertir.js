import sharp from "sharp";

// YZ: Convertir el format de la imatge a WEBP
sharp("./images/example.jpg")
  .toFormat("webp")
  .webp({ quality: 80 })
  .resize(800, 600)
  .toFile("./output/convertir/example-resized-quality-80.webp")
  .then(() => console.log("Imatge convertida a WEBP!"))
  .catch((err) => console.error(err));

// YZ: Convertir el format de la imatge a WEBP a qualitat màxima
sharp("./images/example.jpg")
  .toFormat("webp")
  .webp({ quality: 100 })
  .resize(800, 600)
  .toFile("./output/convertir/example-resized-max-quality.webp")
  .then(() => console.log("Imatge convertida a WEBP amb qualitat màxima!"))
  .catch((err) => console.error(err));
