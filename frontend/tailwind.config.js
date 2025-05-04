module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backdropBlur: {
        'glass': '20px',
      },
      colors: {
        'spotify': '#1DB954',
        'spotify-dark': '#191414',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'spotify-glow': '0 0 20px rgba(29, 185, 84, 0.3)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}