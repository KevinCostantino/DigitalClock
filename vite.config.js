import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/DigitalClock/", // 🔹 Substitua pelo nome do repositório
});
