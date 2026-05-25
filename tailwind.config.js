/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#e0e8f2',
          200: '#c1d1e5',
          300: '#a2bad8',
          400: '#83a3cb',
          500: '#648cbe',
          600: '#1E3A8A', // Deep Navy
          700: '#1a2f73',
          800: '#16245c',
          900: '#121945',
        },
        accent: {
          50: '#fffbf0',
          100: '#fff7e6',
          200: '#ffeccc',
          300: '#ffe0b3',
          400: '#ffd699',
          500: '#ffcc80',
          600: '#F59E0B', // Bright Marigold/Gold
          700: '#e68a00',
          800: '#cc7700',
          900: '#b36400',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4B5563', // Slate Gray
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
