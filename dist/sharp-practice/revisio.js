import sharp from "sharp";
import fs from "fs-extra";
import path from "path";

const inputDir = "images/images-projecte-uf1/sense-modificar";
const outputDir = "images/images-projecte-uf1/modificades";

async function compressImage(filePath, outputFilePath) {
  try {
    await sharp(filePath).jpeg({ quality: 80 }).toFile(outputFilePath);
    console.log(`Compressed: ${filePath}`);
  } catch (err) {
    console.error(`Error compressing ${filePath}:`, err);
  }
}

async function processImages() {
  try {
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    await fs.ensureDir(outputDir);

    for (const file of imageFiles) {
      const filePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, file);
      await compressImage(filePath, outputFilePath);
    }

    console.log("All images processed.");
  } catch (err) {
    console.error("Error processing images:", err);
  }
}

processImages();
