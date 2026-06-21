/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3A52',
        secondary: '#8B6F47',
        accent: {
          DEFAULT: '#D4A574',
          hover: '#C49563',
        },
        background: '#FAF8F5',
        surface: '#FFFFFF',
        text: {
          DEFAULT: '#2C2C2C',
          muted: '#6B6B6B',
        },
        border: '#E8E3DC',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(26, 58, 82, 0.08)',
        'card-hover': '0 8px 32px rgba(26, 58, 82, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
