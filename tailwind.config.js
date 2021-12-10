const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: '#01B1AF',
        darkPurple: '#362E7B',
        glowingOrange: '#EF5148'
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontFamily: {

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      const buttons = {
        '.btn': {
          padding: `${theme('spacing.3')} ${theme('spacing.10')}`,
          borderRadius: theme('borderRadius.3xl'),
          fontWeight: theme('fontWeight.200')
        },
        '.btn-indigo': {
          backgroundColor: theme('colors.darkPurple'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.indigo.700')
          },
        },
      }

      addComponents(buttons)
    }),
    plugin(function({ addComponents, theme }) {
      const buttons = {
        '.ref': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.semibold')
        },
        '.ref-orange': {
          color: theme('colors.glowingOrange'),
          '&:hover': {
            backgroundColor: theme('colors.amber.400')
          },
        },
      }

      addComponents(buttons)
    })
  ],
}