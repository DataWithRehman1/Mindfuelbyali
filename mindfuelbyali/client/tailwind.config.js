/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A1A',
          secondary: '#0F0F2E',
          card: '#1A1A3E'
        },
        brand: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          light: '#A78BFA'
        },
        accent: { DEFAULT: '#818CF8' },
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-card': 'var(--color-bg-card)',
        navy: { DEFAULT: 'var(--color-navy)' },
        indigo: {
          DEFAULT: 'var(--color-indigo)',
          dark: 'var(--color-indigo-dark)',
          light: 'var(--color-indigo-light)'
        },
        cyan: { DEFAULT: 'var(--color-cyan)' },
        success: { DEFAULT: 'var(--color-success)' },
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'border-hover': 'var(--color-border-hover)',
        border: 'var(--color-border)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      borderRadius: {
        card: '16px',
        button: '10px'
      },
      boxShadow: {
        card: '0 1px 3px rgba(124,58,237,0.15)',
        'card-hover': '0 20px 40px rgba(124,58,237,0.25), 0 8px 16px rgba(0,0,0,0.4)',
        glow: '0 0 32px rgba(124,58,237,0.3)'
      },
      maxWidth: {
        site: '1280px'
      },
      animation: {
        pulseNode: 'pulseNode 3s ease-in-out infinite',
        spinSlow: 'spinSlow 60s linear infinite',
        float: 'float 3s ease-in-out infinite',
        scrollLeft: 'scrollLeft 35s linear infinite',
        scrollRight: 'scrollRight 35s linear infinite',
        blink: 'blink 0.9s step-end infinite',
        loader: 'loaderSpin 1s linear infinite'
      },
      keyframes: {
        pulseNode: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2)', opacity: '1' }
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        scrollLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        scrollRight: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        loaderSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      }
    }
  },
  plugins: []
};
