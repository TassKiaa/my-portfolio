/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Added pages just in case
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Black
        background: "#030712", 
        
        // Neon Cyan / Electric Blue
        primary: "#06b6d4",    
        
        // Dark Slate / Anthracite (Perfect for Cards)
        surface: "#111827",    
        
        // Ice White (High readability text)
        accent: "#f8fafc",     
      },
      animation: {
        'slow-drift': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};