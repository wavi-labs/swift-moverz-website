module.exports = {
  purge: false,
  // purge: {
  //   content: ['../site/public/**/*.html', '../site/public/**/*.js'],
  //   css: ['../site/static/*.css'],
  //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  //   whitelistPatterns: [/prose$/]
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Staatliches', 'ui-sans-serif'],
      'body': ['Oswald', 'ui-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#173480'
        },
        secondary: {
          DEFAULT: '#faed33'
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
