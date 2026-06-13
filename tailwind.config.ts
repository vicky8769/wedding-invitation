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
        primary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fad2b0',
          300: '#f6af85',
          400: '#f28a5b',
          500: '#ef6a33',
          600: '#e0522a',
          700: '#bc3e23',
          800: '#9a3220',
          900: '#7e2a1d',
        },
        gold: {
          50: '#fffbf0',
          100: '#fef6e0',
          200: '#fde9c0',
          300: '#fbd690',
          400: '#f9bd5f',
          500: '#f7a02f',
          600: '#e6851f',
          700: '#c26616',
          800: '#9e5212',
          900: '#834410',
        },
        blush: {
          50: '#fef7f7',
          100: '#fdeeee',
          200: '#fbd9e0',
          300: '#f7bdc5',
          400: '#f29aa3',
          500: '#ed7a85',
          600: '#d65a6b',
          700: '#b04355',
          800: '#8f3749',
          900: '#762f40',
        },
        cream: {
          50: '#fefdf8',
          100: '#fefcf0',
          200: '#fdf7e0',
          300: '#fcf0c8',
          400: '#fae7a8',
          500: '#f8da87',
          600: '#d5bd6f',
          700: '#ae9a58',
          800: '#8e7d46',
          900: '#75673a',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
