---
# Michigan Data Consulting (MDC) Design System
# This file captures the visual identity and design tokens for the MDC website.

tokens:
  color:
    background:
      main: "#0b0b11"
      card: "#151630"
      overlay: "rgba(0, 0, 0, 0.6)"
    text:
      primary: "#ffffff"
      secondary: "rgba(255, 255, 255, 0.7)"
      muted: "rgba(255, 255, 255, 0.4)"
      accent: "#9080DB"
    brand:
      primary: "#9080DB"
      secondary: "#E6DAFF"
      gradient: "linear-gradient(to right, #9080DB, #E6DAFF)"
    border:
      light: "rgba(255, 255, 255, 0.1)"
      muted: "rgba(255, 255, 255, 0.05)"

  typography:
    font_family:
      display: "'Space Grotesk', sans-serif"
      sans: "'Sora', sans-serif"
      mono: "'Azeret Mono', monospace"
    size:
      xs: "0.75rem"      # 12px
      sm: "0.875rem"     # 14px
      base: "1rem"       # 16px
      lg: "1.125rem"     # 18px
      xl: "1.25rem"      # 20px
      "2xl": "1.5rem"    # 24px
      "3xl": "1.875rem"  # 30px
      "4xl": "2.25rem"   # 36px
      "6xl": "3.75rem"   # 60px
    weight:
      light: 300
      normal: 400
      medium: 500
      semibold: 600
      bold: 700
    letter_spacing:
      tight: "-0.02em"
      tighter: "-0.05em"

  spacing:
    container: "1152px"  # max-w-6xl
    section_padding: "6rem" # py-24
    gap_sm: "1rem"       # gap-4
    gap_md: "1.5rem"     # gap-6
    gap_lg: "3rem"       # gap-12

  radius:
    sm: "0.375rem"       # 6px
    md: "0.5rem"         # 8px
    lg: "0.75rem"        # 12px
    xl: "1rem"           # 16px
    "2xl": "1.5rem"      # 24px
    full: "9999px"

  shadow:
    brand: "0 10px 30px rgba(144, 128, 219, 0.2)"
    brand_hover: "0 10px 40px rgba(144, 128, 219, 0.4)"
    header: "0 10px 30px rgba(0, 0, 0, 0.25)"

  motion:
    duration:
      fast: "0.3s"
      normal: "0.5s"
      slow: "0.8s"
    easing:
      standard: "ease-out"
      marquee: "linear"

---

# Design Intent

## Aesthetic: Modern Tech & Data Excellence
The Michigan Data Consulting (MDC) design system is built to convey a sense of technical sophistication, professional reliability, and data-driven innovation. It leans heavily into a "Modern Dark" aesthetic, using deep navy and near-black backgrounds contrasted with vibrant, glowing purples and indigos.

## Visual Identity & Look & Feel

### 1. Depth and Atmosphere
The interface avoids flat design in favor of "atmospheric depth." This is achieved through:
- **Radial Gradients:** Large, soft-blurred radial glows (e.g., `#E6DAFF` and `#9080DB`) positioned in the background to create a sense of three-dimensional space and "nebula" effects.
- **Glassmorphism:** Navigation and secondary buttons use `backdrop-blur-sm` with semi-transparent backgrounds (`bg-white/5`), creating a layered, lightweight feel.
- **Micro-shadows:** Cards and buttons use colored shadows that match the brand gradient, making elements appear to emit light rather than just sitting on top of the background.

### 2. Typography Strategy
- **Display (Space Grotesk):** Used for large headings. Its geometric nature and subtle "techy" details (like the angled terminals) reinforce the data science and engineering focus.
- **Sans (Sora):** Used for body text and navigation. Its slightly rounded and wide proportions ensure high legibility while maintaining a friendly, modern tone.
- **Mono (Azeret Mono):** Used for code snippets or technical metadata, providing a "built-by-engineers" touch.

### 3. Color & Contrast
The primary color palette is restricted to a narrow range of purples (`#9080DB` to `#E6DAFF`). This monochromatic accent strategy keeps the design focused and premium. High contrast is maintained between the `#0b0b11` background and the `#ffffff` primary text, while `white/70` and `white/40` are used to create a clear information hierarchy for secondary labels and descriptions.

### 4. Motion & Interactivity
- **Gentle Entrances:** Elements slide up and fade in (`y: 20`, `duration: 0.5s`) as they enter the viewport, giving the site a "revealing" and polished feel.
- **Fluid Backgrounds:** The "Flow Field" hero background provides a subtle, living texture that mimics data flow or neural networks, reinforcing the club's core identity without distracting from the content.
- **Marquee Effects:** A continuous, linear marquee for client logos creates a sense of momentum and scale.

## Implementation Guidelines
- **Gradients:** Always use the `primary` to `secondary` brand gradient for primary calls to action.
- **Borders:** Use subtle, semi-transparent white borders (`white/10`) to define cards and sections against the dark background.
- **Consistency:** Maintain the `py-24` section spacing to ensure the content has enough "breathing room," emphasizing the premium nature of the organization.