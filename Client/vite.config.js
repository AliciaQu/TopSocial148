import { defineConfig } from "vite";
import path from "path-browserify";

export default defineConfig({
     resolves: {
         alias: {
          "@": path.resolve(__dirname,'./src')
         }

     }

});