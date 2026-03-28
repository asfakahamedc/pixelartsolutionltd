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
          DEFAULT: '#DA7756', // Coral
          dark: '#A8503A', // Coral Dark
          light: '#F2E0D8', // Coral Light
        },
        neutral: {
          900: '#1A1A1A', // Near Black (Primary text)
          800: '#2E2E2E', // Charcoal (Headings)
          500: '#6B6352', // Warm Gray (Secondary text)
          300: '#C8C0B4', // Light Gray (Borders)
        },
        surface: {
          DEFAULT: '#F5F0E8', // Cream (Page bg, MUST be on <body>)
          mid: '#EDE8DF', // Cream Mid (Cards/surfaces or Dividers)
          white: '#FFFFFF', // White (Content areas only)
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Arial', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },
      borderRadius: {
        "card": "24px",
      },
      boxShadow: {
        // Rule: Never use drop shadows. Rely entirely on Cream-on-Cream Mid contrast.
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
        inner: 'none',
      }
    },
  },
  plugins: [],
};
export default config;
