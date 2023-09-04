import { defineConfig } from "vite";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
     resolve: {
         alias: {
          "@": path.resolve(__dirname,'./src')
         }
     }
});

