import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        background: {
          gray: "rgb(217,219,215)",
          pink: "rgb(255,154,154)",
        },
      },
    },
  },
});
