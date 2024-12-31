import pkg from "fs-extra";
import sharp from "sharp";
import path from "path";

const inputDir = "./images";
const outputDir = "./output/autoprocessar";

// Ensure output directory exists
pkg.ensureDirSync(outputDir);

function processImage(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const outputFilePath = path.join(outputDir, fileName);

  // Generate thumbnail
  sharp(filePath)
    .resize(200, 200)
    .toFile(`${outputFilePath}_thumbnail.jpg`)
    .then(() => console.log(`Thumbnail generated for ${filePath}`))
    .catch((err) => console.error(err));

  // Convert to WebP
  sharp(filePath)
    .toFormat("webp")
    .toFile(`${outputFilePath}.webp`)
    .then(() => console.log(`Converted to WebP: ${filePath}`))
    .catch((err) => console.error(err));

  // Convert to AVIF
  sharp(filePath)
    .toFormat("avif")
    .toFile(`${outputFilePath}.avif`)
    .then(() => console.log(`Converted to AVIF: ${filePath}`))
    .catch((err) => console.error(err));

  // Compress original image
  sharp(filePath)
    .jpeg({ quality: 80 })
    .toFile(`${outputFilePath}_compressed.jpg`)
    .then(() => console.log(`Compressed: ${filePath}`))
    .catch((err) => console.error(err));
}

function processImages() {
  pkg
    .readdir(inputDir)
    .then((files) => {
      const imageFiles = files.filter((file) =>
        /\.(jpg|jpeg|png)$/i.test(file)
      );
      imageFiles.forEach((file) => {
        const filePath = path.join(inputDir, file);
        processImage(filePath);
      });
    })
    .then(() => console.log("All images processed."))
    .catch((err) => console.error("Error reading directory:", err));
}

processImages();
