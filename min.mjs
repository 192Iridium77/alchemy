import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

/**
 * This will convert all images from jpg/png to webp for performance
 * due to netlify's outdated ubuntu which runs at node 12, imagemin and imagemin-webp
 * can't be installed to the project.
 *
 * To work around this, install them temporarily:
 *
 * npm i imagemin imagemin-webp --save-dev
 *
 * run the script
 *
 * node min.mjs
 *
 * and then uninstall
 *
 * npm un imagemin imagemin-webp
 */
await imagemin(["./public/images/*.{jpg,png}"], {
  destination: "./public/images",
  plugins: [imageminWebp({ quality: 60 })],
});

console.log("Images optimized");
