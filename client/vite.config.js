// import dotenv from "dotenv";
// import url from "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap";

// // tailwind base;
// // tailwind components;
// // tailwind utilities;

// dotenv.config({ path: "../.env" });

// export default {
//   server: {
//     proxy: {
//       "/api": `http://localhost:${process.env.PORT}`,
//     },
//   },
//   cacheDir: "../node_modules/.vite",
// };

// module.exports = {
//   purge: [],
//   theme: {
//     extend: {
//       fontFamily: {
//         'Roboto': ['Roboto', 'Arial', 'sans-serif']
//       },
//       spacing: {
//         '14': '3.5rem'
//       }
//     },
//   },
//   variants: {},
//   plugins: [],
// };
import dotenv from "dotenv";
import { defineConfig } from 'vite';


dotenv.config({ path: "../.env" });

export default defineConfig({
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
  cacheDir: "../node_modules/.vite",
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'Arial', 'sans-serif']
      },
      spacing: {
        '14': '3.5rem'
      }
    },
  },
  variants: {},
  plugins: [],
});

