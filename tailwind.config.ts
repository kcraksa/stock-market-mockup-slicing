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
        brand: {
          5: "#EEF2FF",
          50: "#4F46E5",
          60: "#4F46E5",
        },
        purple: {
          70: "#7E22CE",
        },
        success: {
          5: "#F0FDF4",
          50: "#22C55E",
        },
        destructive: {
          30: "#FDA4AF",
        },
        cyan: {
          50: "#06B6D4",
        },
        orange: {
          30: "#FDBA74",
          50: "#F97316",
        },
        warning: {
          30: "#FCD34D",
        },
        gray: {
          40: "#94A3B8",
          50: "#64748B",
        },
        teal: {
          50: "#14B8A6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
