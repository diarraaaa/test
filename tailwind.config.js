/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        senoris: {
          cyan: '#00e5ff',
          blue: '#1a237e',
          navy: '#111827',
          night: '#030712',
          gold: '#d4af37',
          dark: '#000000',
        },
      },
      boxShadow: {
        'senoris': '0 0 10px rgba(0, 229, 255, 0.15)',
        'senoris-lg': '0 0 20px rgba(0, 229, 255, 0.2)',
        'gold': '0 0 10px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 0 20px rgba(212, 175, 55, 0.2)',
      },
    },
  },
  plugins: [],
}