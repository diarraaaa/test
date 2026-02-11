/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
          gold: '#d4af37',
          dark: '#000000',
        },
      },
      boxShadow: {
        'senoris': '0 0 30px rgba(0, 229, 255, 0.3)',
        'senoris-lg': '0 0 50px rgba(0, 229, 255, 0.4)',
        'gold': '0 0 30px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 50px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
}