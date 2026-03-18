/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-card': 'var(--color-bg-card)',
        navy: { DEFAULT: 'var(--color-accent-navy)' },
        indigo: {
          DEFAULT: 'var(--color-accent-indigo)',
          dark: 'var(--color-accent-indigo-dark)'
        },
        cyan: { DEFAULT: 'var(--color-accent-cyan)' },
        success: { DEFAULT: 'var(--color-success)' },
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
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
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 20px 40px rgba(79,70,229,0.12), 0 8px 16px rgba(0,0,0,0.08)'
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
