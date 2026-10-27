/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: { sans: ["Outfit", "system-ui", "-apple-system", "Segoe UI", "sans-serif"] },
      colors: {
        page: "var(--bg)", card: "var(--card)", ink: "var(--ink)", mute: "var(--mute)", line: "var(--line)",
        brand: "var(--brand)", "on-brand": "var(--on-brand)", gold: "var(--gold)", "on-gold": "var(--on-gold)",
        wa: "var(--wa)", field: "var(--field)",
      },
    },
  },
};
