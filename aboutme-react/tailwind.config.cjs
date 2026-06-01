module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"] ,
  theme: {
    extend: {
      colors: {
        bg: '#060816',
        glass: 'rgba(255,255,255,0.03)',
        border: 'rgba(255,255,255,0.08)',
        accent: '#8b5cf6'
      },
      borderRadius: {
        xl: '20px',
        '2xl': '24px'
      },
      boxShadow: {
        neon: '0 6px 30px rgba(139,92,246,0.12), 0 0 40px rgba(139,92,246,0.12)'
      }
    }
  },
  plugins: []
};
