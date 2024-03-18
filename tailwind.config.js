/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: false, // o 'media' o 'class'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-lineal':
          "linear-gradient(284deg, var(--tw-gradient-stops))"
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(0%)',
            opacity: 'var(--opacitypg)'
          }
        }
      },
      animation: {
        'shimmer-pg': 'shimmer var(--timepg) ease-out 1'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    plugin(function ({ matchVariant }) {
      matchVariant(
        'nth',
        (value) => {
          return `&>*:nth-child(${value})`;
        },
        {
          values: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
          }
        }
      );
    }),
    plugin(function ({ addVariant }) {
      addVariant('web-scrollbar', '&::-webkit-scrollbar')
      addVariant('web-scrollbar-thumb', '&::-webkit-scrollbar-thumb')
    }),
    plugin(function ({ addComponents }) {
      addComponents({

        '.scroll-color': {
          background: '#0ea5e92d',
          width: '10px',
          '&:hover': {
            background: '#0ea5e989'
          },
        },
        '.scroll-thumb-color': {
          background: 'linear-gradient(284deg, #0ea5e90d 25%, #0ea5e92d 50%, #0ea5e90d 75%)',
          '&:hover': {
            background: 'linear-gradient(284deg, #0ea5e90d 25%, #075985 50%, #0ea5e90d 75%)'
          },
        },
        '.toggle_menu': {
          'box-shadow': '0 0px 4px var(--colorCicle)',
          transition: 'transform 1.25s',
          '&:hover': {
            transition: '1000ms',
            'box-shadow': '10px rgba(0, 0, 0, 0.863)',
            border: '2px solid var(--colorCicleHover)'
          },
        },
        '.menu_1': {
          '& li': {
            position: 'absolute',
            left: '0',
            'list-style': 'none',
            scale: '0',
            'transform-origin': '100px',
            transition: '0.5s',
            'transition-delay': 'calc(0.1s * var(--i))',
            transform: 'rotate(0deg) translateX(100px)',

            '& a': {
              position: 'relative',
              display: 'flex',
              'justify-content': 'center',
              'align-items': 'center',
              width: '50px',
              height: '50px',
              padding: '8px',
              'background-color': 'var(--clr)',
              'border-radius': '50%',
              transform: 'rotate(calc(360deg / calc(var(--list_social) * -1) * var(--i)))',
              'box-shadow': '0 3px 4px var(--colorCicleHover)',

              '&:hover': {
                transition: '1000ms',
                border: '2px solid var(--colorCicle)'
              }
            }
          },

          '&.active li': {
            scale: '1',
            transform: 'rotate(calc(360deg / var(--list_social) * var(--i)))'
          },
          '&.active .toggle_menu': {
            transform: 'rotate(315deg)',
            border: '2px solid var(--colorCicleHover)', //Mejor que no funcione por eso las 2 ##...
          }
        },
        '.shimpg': {
          position: 'relative',
          overflow: 'hidden',
          'background-color': 'transparent',

          '&::after': {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            transform: 'translateX(-100%)',
            'background-image': 'linear-gradient( 90deg, rgba(var(--clrpg), .3) 0, rgba(var(--clrpg), .5) 50%, rgba(var(--clrpg), 1) 100%)',
            'border-radius': '5px'            
          }
        },
      })
    }),
  ]
}