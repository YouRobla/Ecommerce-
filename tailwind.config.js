/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'], // Bebas Neue

        // Satoshi Variantes
        'satoshi-light': ['Satoshi-Light', 'sans-serif'], // Satoshi Ligera
        'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'], // Satoshi Ligera Italic
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'], // Satoshi Regular
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'], // Satoshi Italic
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'], // Satoshi Media
        'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'], // Satoshi Media Italic
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'], // Satoshi Negrita
        'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'], // Satoshi Negrita Italic
        'satoshi-black': ['Satoshi-Black', 'sans-serif'], // Satoshi Negra
        'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'], // Satoshi Negra Italic
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'], // Satoshi Variable
        'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif'], // Satoshi Variable Italic
        'integral-cf-bold': ['Integral CF Bold', 'sans-serif'],
 
        'integral-cf-demi-bold': ['Integral CF Demi Bold', 'sans-serif'],
        'integral-cf-demi-bold-oblique': ['Integral CF Demi Bold Oblique', 'sans-serif'],
        'integral-cf-extra-bold': ['Integral CF Extra Bold', 'sans-serif'],
        'integral-cf-heavy': ['Integral CF Heavy', 'sans-serif'],
        'integral-cf-heavy-oblique': ['Integral CF Heavy Oblique', 'sans-serif'],
        'integral-cf-medium': ['Integral CF Medium', 'sans-serif'],
        'integral-cf-medium-oblique': ['Integral CF Medium Oblique', 'sans-serif'],
        'integral-cf-regular': ['Integral CF Regular', 'sans-serif'],
        'integral-cf-regular-oblique': ['Integral CF Regular Oblique', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
