/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        haiku: {
          void: '#0B0A09',
          card: '#161412',
          border: '#292524',
          hover: '#221F1D',
          coral: '#D97706',
          amber: '#F59E0B',
          warm: '#FBF5ED',
          muted: '#A8A29E',
          emerald: '#10B981',
          blue: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['Newsreader', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-coral': '0 0 25px -5px rgba(217, 119, 6, 0.35)',
      }
    },
  },
  plugins: [],
};
