import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
     resolves: {
         alias: {
          "@": path.resolve(__dirname,'./src')
         }

     }

});