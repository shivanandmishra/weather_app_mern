import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: '/weather_app_mern/',  // Set the base path for the application
  plugins: [react()],
  server: { port: 5173 }
});



