/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: '#A50050',
        'primary-dark': '#8F0145',
        'primary-light': '#C40060',
        'surface-dark': '#1A0010',
        'bg-light': '#FFF5F8',
        'text-dark': '#1A0010',
        'text-muted': '#7A4060',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #8F0145 0%, #A50050 50%, #C40060 100%)',
        'dark-overlay': 'linear-gradient(to bottom, rgba(143,1,69,0.85), rgba(26,0,16,0.95))',
        'card-hover': 'linear-gradient(to top, rgba(143,1,69,0.95) 0%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'blob-delayed': 'blob 15s ease-in-out 4s infinite',
        'blob-long': 'blob 18s ease-in-out 8s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
