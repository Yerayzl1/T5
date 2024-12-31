import sharp from "sharp";
import { createCanvas, loadImage } from "canvas";

// Función para añadir una marca de agua
async function addWatermark(inputImagePath, outputImagePath, watermarkText) {
  const image = await loadImage(inputImagePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  // Dibujar la imagen original
  ctx.drawImage(image, 0, 0, image.width, image.height);

  // Configurar las propiedades de la marca de agua
  const fontSize = Math.floor(image.height / 20);
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Color negro con transparencia
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";

  // Calcular la posición de la marca de agua
  const x = image.width - 10;
  const y = image.height - 10;

  // Dibujar el texto de la marca de agua
  ctx.fillText(watermarkText, x, y);

  // Convertir el canvas a un buffer
  const buffer = canvas.toBuffer("image/png");

  // Guardar la imagen con la marca de agua usando sharp
  sharp(buffer)
    .toFile(outputImagePath)
    .then(() => console.log("Imatge amb marca d’aigua!"))
    .catch((err) => console.error(err));
}

// Ejemplo de uso
addWatermark(
  "./images/example.jpg",
  "./output/marcaAigua/example-watermarked.jpg",
  "Marca d’Aigua"
);
