/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f14',
        'bg-elev': '#0f141b',
        card: '#141b23',
        text: '#e6edf3',
        muted: '#a6b3c2',
        brand: '#7c5cff',
        brand2: '#00c2ff',

        // 👇 Add this gray palette to fix the error
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.45), 0 2px 10px rgba(0,0,0,0.35)',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}

