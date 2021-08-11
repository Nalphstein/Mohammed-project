"use strict";

var _require = require("inspector"),
    url = _require.url;

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: function backgroundImage(theme) {
        return {
          'cold-pattern': "url('/src/Images/cold-bg.jpg')",
          'warm-pattern': "url('/src/Images/warm-bg.jpg')",
          'fields': "url('/src/Images/fields.jpg')"
        };
      },
      transitionTimingFunction: {},
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        none: 'none',
        bounce: 'bounce 1s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 3s linear infinite'
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
};