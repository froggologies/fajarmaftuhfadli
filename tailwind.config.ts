import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#8aadf4",
        text: "#cad3f5",
        subtext1: "#b8c0e0",
        base: "#24273a",
        mantle: "#1e2030",
        crust: "#181926",
      },
    },
  },
  plugins: [],
};
export default config;
