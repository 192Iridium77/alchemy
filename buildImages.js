import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["./public/images/*.{jpg,png}"], {
  destination: "./public/images",
  plugins: [imageminWebp({ quality: 60 })],
});

console.log("Images optimized");
