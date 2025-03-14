// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { min: "183px" }, // Exact 183px breakpoint
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          xs: "0.5rem", // Special padding for ultra-small screens
          sm: "1rem",
          md: "1.5rem",
        },
      },
      fontSize: {
        xxs: "0.625rem", // Extra small text for 183px-200px
        xs: "0.75rem",
        sm: "0.875rem",
      },
    },
  },
  plugins: [],
};
