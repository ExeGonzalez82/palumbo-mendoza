/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#f7c915',
        dark: '#111111',
        light: '#ffffff',
        muted: '#6b7280',
        surface: '#f5f5f4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      maxWidth: {
        site: '1280px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
