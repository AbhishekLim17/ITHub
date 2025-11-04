import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F3C600',
          dark: '#D4A800',
          light: '#FFE066',
          50: '#FFFBEB',
          100: '#FFF3C6',
          200: '#FFE066',
          300: '#F3C600',
          400: '#D4A800',
          500: '#C09600',
        },
        secondary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
          light: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#0066FF',
          700: '#0052CC',
          800: '#0047B3',
          900: '#003D99',
        },
        accent: {
          DEFAULT: '#00B4D8',
          teal: '#0891B2',
          dark: '#1F2937',
          gray: '#F7F7FA',
          cyan: {
            50: '#ECFEFF',
            100: '#CFFAFE',
            200: '#A5F3FC',
            300: '#67E8F9',
            400: '#22D3EE',
            500: '#00B4D8',
            600: '#0891B2',
            700: '#0E7490',
          }
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
          dark: '#DC2626',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#DBEAFE',
          dark: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(2.5rem, 5vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 4vw, 2.125rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(17, 24, 39, 0.06)',
        'card-hover': '0 8px 24px rgba(17, 24, 39, 0.12)',
        'button': '0 1px 3px rgba(17, 24, 39, 0.1)',
        'button-hover': '0 4px 12px rgba(243, 198, 0, 0.3)',
        'dropdown': '0 10px 40px rgba(17, 24, 39, 0.15)',
        'focus': '0 0 0 3px rgba(0, 102, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #F3C600 0%, #FFE066 100%)',
        'gradient-gold-button': 'linear-gradient(90deg, #F3C600 0%, #FFC700 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0066FF 0%, #00B4D8 100%)',
        'gradient-tech': 'linear-gradient(135deg, #0066FF 0%, #0891B2 50%, #F3C600 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(243, 198, 0, 0.05) 0%, rgba(243, 198, 0, 0) 100%)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in',
        'slideUp': 'slideUp 0.5s ease-out',
        'slideDown': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
