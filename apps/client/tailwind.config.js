const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
      ...createGlobPatternsForDependencies(__dirname),
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               100: 'rgb(var(--primary-100) / <alpha-value>)',
               200: 'rgb(var(--primary-200) / <alpha-value>)',
               300: 'rgb(var(--primary-300) / <alpha-value>)',
               400: 'rgb(var(--primary-400) / <alpha-value>)',
               500: 'rgb(var(--primary-500) / <alpha-value>)',
               600: 'rgb(var(--primary-600) / <alpha-value>)',
               700: 'rgb(var(--primary-700) / <alpha-value>)',
               800: 'rgb(var(--primary-800) / <alpha-value>)',
               900: 'rgb(var(--primary-900) / <alpha-value>)',
               950: 'rgb(var(--primary-950) / <alpha-value>)',
            },
         },
      },
   },
   plugins: [],
};
