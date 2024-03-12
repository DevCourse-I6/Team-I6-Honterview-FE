import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primaries: {
          primary: '#0041C2',
          hover: '#00349B',
          active: '#004EE9',
        },
        secondary: {
          primary: '#3C3C3C',
          hover: '#303030',
          active: '#484848',
        },
        text: {
          100: '#000E28',
          80: '#404A5E',
          60: '#808693',
          40: '#BFC3C9',
          20: '#FFFFFF',
        },
        background: {
          20: '#F0F2F5',
        },
      },
      fontSize: {
        extraSmall: '1.2rem',
        small: '1.4rem',
        medium: '1.6rem',
        large: '1.8rem',
        extraLarge: '2rem',
        doubleLarge: '3rem',
        tripleLarge: '3.6rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      mobile: '480px',
      tablet: '768px',
      laptop: '1024px',
    },
  },
  plugins: [],
};
export default config;
