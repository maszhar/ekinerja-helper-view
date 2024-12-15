import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        zinc: {
          850: '#212124'
        }
      }
    }
  },

  plugins: []
} satisfies Config;
