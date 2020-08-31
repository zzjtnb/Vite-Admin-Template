
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const defaultTheme = require('tailwindcss/defaultTheme');//应用默认主题
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.vue', './src/**/*.js'],
  },
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Ma Shan Zheng', 'Liu Jian Mao Cao', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
