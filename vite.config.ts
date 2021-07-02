import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import windicss from "vite-plugin-windicss";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), windicss(), svgr()],
  resolve: {
    alias: {
      "~svg": path.resolve(__dirname, "src", "svg"),
    },
  },
});
