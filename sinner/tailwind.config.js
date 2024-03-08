module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js,php}","./lib/*.{html,js,php}","./assets/js/*.{html,js,php}"],
  theme: {
    },
  plugins: [],
  safelist: [
    'block',
    'sm:block',
    'md:block',
    'xl:block',
    '2xl:block',
    'hidden',
    'sm:hidden',
    'md:hidden',
    'xl:hidden',
    '2xl:hidden',
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm','md', 'lg', 'xl', '2xl'],
    },
  ],
}
