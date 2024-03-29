import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export default {
  server: {
    proxy: {
      "/api": `https://server-youtube-clone.onrender.com`,
    },
  },
  cacheDir: "../node_modules/.vite",
};
