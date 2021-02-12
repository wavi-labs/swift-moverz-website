module.exports = {
  purge: {
    content: ['../site/public/**/*.html', '../site/public/**/*.js'],
    css: ['../site/static/*.css'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelistPatterns: [/prose$/]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#48b5e0'
        },
        secondary: {
          DEFAULT: '#71eeb8'
        }
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('autoprefixer'),
    require('@tailwindcss/forms')
  ],
}
