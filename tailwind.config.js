/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tailprimary: "#27C690",
        tailsecondary: "#9CB2AA",
        tailtertiary: "#c6d9f1",
        bgprimary: "#FAFCFF",
        bgsecondary: "#E3FAFB",
        tailtertiary2:"B2D8CB",
        tailtertiary3:"#8fb5e3"
      },
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
        lato: ["Lato", "SFMono-ui-monospace"],
      }
    },
  },
  plugins: [],
}