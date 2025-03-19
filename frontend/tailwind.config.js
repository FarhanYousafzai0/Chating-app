/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Ensures Tailwind scans your React files
      "./public/index.html"         // Ensures Tailwind includes static HTML if needed
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0F9E99',
          secondary: '#EFE9E0',
          accent: '#FFB400',  // Vibrant contrast color
          dark: '#1A202C',
        },
        spacing: {
          '15': '3.75rem',   // Custom spacing for better gap control
          '90': '22.5rem'    // For unique height or width sections
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          heading: ['Montserrat', 'sans-serif']
        },
        boxShadow: {
          glow: '0 0 15px rgba(15, 158, 153, 0.5)',  // Glowing effect
          deep: '0 4px 15px rgba(0, 0, 0, 0.2)'       // Soft shadow for cards
        },
        animation: {
          bounceSlow: 'bounce 3s infinite',
          fadeIn: 'fadeIn 0.8s ease-in forwards'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 }
          }
        }
      }
    },
    plugins: [
        [require("daisyui")]
    ],
  }
  