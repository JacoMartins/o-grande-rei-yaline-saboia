import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "bloody-red-800": '#2E0100',
        "bloody-red-600": '#491112',
        "strong-wood-700": '#572C02',
        "bloody-red-500": '#831919',
        "sunset-orange-500": '#F12F28',
        "orange-fruit-400": '#FF8117',
        "sunset-yellow-400": '#EDB440',
        "avocado-green-500": '#608D64',
        "vibrant-green-500": '#0C8F5B',
        "lemon-yellow-100": '#D8CFA8',
      },
      backgroundColor: {
        "bloody-red-800": '#280907',
        "bloody-red-600": '#491112',
        "bloody-red-500": '#831919',
        "bloody-red-400": '#C44E42',
        "sunset-orange-400": '#DE8436',
        "sunset-orange-300": '#E8A358',
        "sunset-yellow-400": '#EDB440',
        "avocado-green-500": '#608D64',
        "vibrant-green-500": '#0C8F5B',
        "lemon-yellow-100": '#D8CFA8',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

    },
    plugins: [require("tailwindcss-animate")],
  }
} satisfies Config

export default config