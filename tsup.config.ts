import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "theme/index": "src/theme/index.ts",
    "tailwind-preset": "src/tailwind-preset.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  target: "es2022",
  external: ["react", "react-dom", "react-router-dom", "tailwindcss"],
  // Expose src/styles.css directly so consumers can `import "@melazzo/vehicles/styles.css"`
  loader: {
    ".css": "copy",
  },
});
