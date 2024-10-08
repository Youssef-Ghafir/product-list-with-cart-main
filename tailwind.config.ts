import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1140px",
          "2xl": "1296px",
        },
      },
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose: {
          "50": "hsl(20, 50%, 98%)",
          "100": "hsl(13, 31%, 94%)",
          "300": "hsl(14, 25%, 72%)",
          "400": "hsl(7, 20%, 60%)",
          "500": "hsl(12, 20%, 44%)",
          "900": "hsl(14, 65%, 9%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
