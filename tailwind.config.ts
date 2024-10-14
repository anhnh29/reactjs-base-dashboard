import { LightColors } from './public/theme';

interface IColor {
  [key: string]: unknown;
}

const generateColors = () => {
  const res: IColor = {};
  Object.keys(LightColors).map((color: string) => {
    res[color] = `var(--${color})`;
  });
  return res;
};
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'color-primary': '#123257',
        ...generateColors(),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
