/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--display-font)','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue']
    },
    extend: {
      backgroundImage: {
        'custom': "linear-gradient(125deg, hsl(240deg 100% 20%) 0%, hsl(260deg 100% 21%) 11%, hsl(270deg 100% 23%) 22%, hsl(278deg 100% 24%) 33%, hsl(284deg 100% 26%) 44%, hsl(290deg 100% 27%) 56%, hsl(296deg 100% 28%) 67%, hsl(301deg 100% 29%) 78%, hsl(305deg 100% 33%) 89%, hsl(309deg 100% 36%) 100%)",
      }
    },
  },
  plugins: [],
}
