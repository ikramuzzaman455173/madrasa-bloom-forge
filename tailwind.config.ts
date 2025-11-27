import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },

    extend: {
      /* =========================
         FONTS
      ========================== */
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        arabic: ["Amiri", "Noto Kufi Arabic", "serif"],
        bengali: ["Noto Serif Bengali", "serif"]
      },

      /* =========================
         COLOR SYSTEM (HSL VARS)
      ========================== */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))"
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          light: "hsl(var(--accent-light))",
          foreground: "hsl(var(--accent-foreground))"
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },

        /* SIDEBAR — (Dashboard Theme) */
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },

      /* =========================
         RADII
      ========================== */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },

      /* =========================
         UI ANIMATIONS
      ========================== */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        /* Fade In */
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },

        /* Fade Up */
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },

        /* Fade Down */
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },

        /* Fade Left */
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },

        /* Fade Right */
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },

        /* Smooth Scale Up */
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },

        /* Subtle Wiggle / Floating Effect */
        float: {
          "0%, 100%": { transform: "translateY(-3px)" },
          "50%": { transform: "translateY(3px)" }
        },

        /* Card Hover Glow */
        glow: {
          "0%": { boxShadow: "0 0 0 rgba(0,0,0,0)" },
          "100%": { boxShadow: "0 8px 30px hsla(var(--primary) / 0.25)" }
        },

        /* Shine (for buttons / cards) */
        shine: {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" }
        },

        /* Slide in from bottom (for modals, drawers) */
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" }
        },

        /* Slide in from top */
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },

        /* Pulse Soft */
        softPulse: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.6" }
        }
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fade: "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.7s ease-out",
        "fade-down": "fadeDown 0.7s ease-out",
        "fade-left": "fadeLeft 0.7s ease-out",
        "fade-right": "fadeRight 0.7s ease-out",

        zoom: "zoomIn 0.5s ease-out",

        float: "float 3s ease-in-out infinite",

        glow: "glow 0.4s ease-out forwards",

        shine: "shine 1.2s linear infinite",

        "slide-up": "slideUp 0.45s ease-out",
        "slide-down": "slideDown 0.45s ease-out",

        pulse: "softPulse 2s ease-in-out infinite"
      }
    }
  },

  plugins: [require("tailwindcss-animate")]
} satisfies Config;
