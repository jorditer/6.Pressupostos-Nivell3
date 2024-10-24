/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/*.tsx', // Include all .js, .jsx, .ts, and .tsx files in the src directory and subdirectories
    "./public/index.html", // Include the index.html file in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

