import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
      avif: {
        quality: 50,
      },
      include: [
        'sharp-practice/images/images-projecte-uf1/sense-modificar/**/*.{jpg,jpeg,png,svg,gif}',
      ],
    }),
    imagePresets({
      responsive: widthPreset({
        widths: [320, 640, 960, 1200, 1800],
        formats: {
          avif: { quality: 50 },
          webp: { quality: 75 },
          jpg: { quality: 75 },
        },
        srcset: true,
      }),
    }),
  ],
});
