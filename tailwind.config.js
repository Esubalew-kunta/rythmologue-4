/** @type {import('tailwindcss').Config} */
// ─────────────────────────────────────────────────────────────────────────────
// DIRECTION "Clair — Le Signal" (bright)
// A luminous, white medical world with a fresh emerald-green signal. Lots of
// white, soft mint washes, and the same living "ECG-of-light" signature — now
// in green on white. Token names kept; values are the LIGHT theme.
// ─────────────────────────────────────────────────────────────────────────────
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: { DEFAULT: '#F6FBF9', deep: '#EAF5F0' }, // page base (bright mint-white)
        abyss: { DEFAULT: '#FFFFFF', soft: '#F1F9F5', line: '#DCEBE4' }, // white cards + hairlines
        signal: { DEFAULT: '#3E9E82', deep: '#2C7A64', peak: '#C6E8DC' }, // calm medical green
        aurora: { DEFAULT: '#6FBEB0', soft: '#C6E9E2' },   // calm teal secondary (gradient washes)
        pearl: { DEFAULT: '#0F2A22', dim: '#40514A' },     // ink text (dark green-black)
        mist: { DEFAULT: '#5E6E67', soft: '#8A968F' },     // muted captions
        coral: { DEFAULT: '#FF7A66' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1.4' }],
        xs: ['0.8125rem', { lineHeight: '1.5' }],
        sm: ['0.9375rem', { lineHeight: '1.6' }],
        base: ['1.0625rem', { lineHeight: '1.65' }],
        lg: ['1.1875rem', { lineHeight: '1.6' }],
        xl: ['1.375rem', { lineHeight: '1.45' }],
        '2xl': ['1.75rem', { lineHeight: '1.2' }],
        '3xl': ['2.25rem', { lineHeight: '1.1' }],
        '4xl': ['2.875rem', { lineHeight: '1.04' }],
        '5xl': ['3.75rem', { lineHeight: '1.0' }],
        '6xl': ['4.75rem', { lineHeight: '0.98' }],
        '7xl': ['6rem', { lineHeight: '0.96' }],
      },
      letterSpacing: { label: '0.24em', tightish: '-0.02em' },
      maxWidth: { reading: '68ch', edge: '1280px' },
      borderRadius: { panel: '14px', xl2: '22px' },
      boxShadow: {
        // Deliberately light — calm, not heavy.
        glow: '0 10px 28px -18px rgba(62,158,130,0.28)',
        'glow-sm': '0 0 12px -6px rgba(62,158,130,0.35)',
        panel: '0 14px 36px -34px rgba(15,42,34,0.12)',
        lift: '0 20px 50px -44px rgba(15,42,34,0.16)',
        card: '0 1px 2px rgba(15,42,34,0.03), 0 10px 26px -26px rgba(15,42,34,0.10)',
      },
      transitionTimingFunction: { calm: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'aurora-drift': {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-3%,0) scale(1.08)' },
          '66%': { transform: 'translate3d(-3%,4%,0) scale(1.04)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.8', filter: 'drop-shadow(0 0 4px rgba(62,158,130,0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 9px rgba(62,158,130,0.75))' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'aurora-drift': 'aurora-drift 26s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
