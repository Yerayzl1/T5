import sharp from "sharp";

// YZ: Convertir el format de la imatge a PNG
sharp("./images/example.jpg")
  .resize(800, 600)
  .toFormat("png")
  .toFile("./output/index/example-resized.png")
  .then(() => console.log("Imatge convertida a PNG!"))
  .catch((err) => console.error(err));

// YZ: Aplicar un filtre de greyscale:
sharp("./images/example.jpg")
  .resize(800, 600)
  .greyscale()
  .toFile("./output/index/example-greyscale.jpg")
  .then(() => console.log("Imatge en escala de grisos!"))
  .catch((err) => console.error(err));

// YZ: Ajustar la qualitat de la imatge:
sharp("./images/example.jpg")
  .resize(800, 600)
  .jpeg({ quality: 80 })
  .toFile("./output/index/example-quality.jpg")
  .then(() => console.log("Imatge amb qualitat ajustada!"))
  .catch((err) => console.error(err));

// YZ: Rotar la imatge:
sharp("./images/example.jpg")
  .resize(800, 600)
  .rotate(90)
  .toFile("./output/index/example-rotated.jpg")
  .then(() => console.log("Imatge rotada!"))
  .catch((err) => console.error(err));

// YZ: Ajustar la saturació de la imatge:
sharp("./images/example.jpg")
  .resize(800, 600)
  .modulate({ saturation: 1.5 })
  .toFile("./output/index/example-saturation.jpg")
  .then(() => console.log("Imatge amb saturació ajustada!"))
  .catch((err) => console.error(err));
