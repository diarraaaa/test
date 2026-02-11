/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Palette principale Senoris - AJOUTEZ CE BLOC
        'senoris-cyan': '#00E5FF',
        'senoris-gold': '#D4AF37',
        'senoris-gold-sand': '#C5A059',
        'senoris-navy': '#1A237E',
        'senoris-night': '#0D1B2A',
        'senoris-silver': '#E0E0E0',
        'senoris-onyx': '#000000',
      },
      // ... reste de votre configuration existante ...
    },
  },
  plugins: [],
}