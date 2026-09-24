# ✈️ Skyway - Luxury Travel Experience

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-FF6B6B?style=for-the-badge&logo=lucide)](https://lucide.dev/)

A modern, high-end landing page for a luxury airline and travel agency. This project focuses on delivering a premium user experience (UX) and stunning user interface (UI) with a signature cinematic scroll-reveal animation.

---

## ✨ Key Features

- **Cinematic Scroll Animation:** Features a highly optimized GSAP `ScrollTrigger` animation where an airplane window smoothly scales up to reveal a stunning mountain landscape.
- **Premium UI/UX:** Clean, modern, and glassmorphism-inspired design mimicking top-tier OTAs (Online Travel Agencies) to ensure a feeling of luxury and exclusivity.
- **Interactive Booking Form:** A fully responsive flight search interface with dynamic tabs, date picker placeholders, and sleek hover states.
- **Destinations Gallery:** A beautifully crafted grid showcasing trending destinations with smooth image scaling and translation effects on hover.
- **Blazing Fast Performance:** Powered by [Bun](https://bun.sh/) and Next.js Turbopack for ultra-fast startup and bundling times.
- **Fully Responsive:** Meticulously optimized for all screen sizes, from mobile phones to ultra-wide desktop monitors.

## 🛠️ Tech Stack

- **Runtime & Package Manager:** [Bun](https://bun.sh/) (Recommended) / Node.js
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) (GreenSock Animation Platform) & `@gsap/react`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Geist Sans & Geist Mono (via Next.js local fonts)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

We recommend using **[Bun](https://bun.sh/)** for the fastest developer experience. Alternatively, Node.js (v18+) with npm/yarn/pnpm is also fully supported.

```bash
# Install Bun (macOS & Linux)
curl -fsSL https://bun.sh/install | bash
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chinnathit/skyway.git
   cd skyway
   ```

2. **Install dependencies:**
   ```bash
   bun install
   # or
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   bun dev
   # or
   bun run dev
   # or
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
# Build the application
bun run build

# Start the production server
bun run start
```

---

## 📂 Project Structure

```text
skyway/
├── app/
│   ├── layout.tsx       # Root layout including global fonts and metadata
│   ├── page.tsx         # Main landing page (Hero, Booking Form, Destinations)
│   └── globals.css      # Global Tailwind styles
├── public/              # Static assets (fonts, icons, raw images)
├── bun.lock             # Bun lockfile
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.ts       # Next.js configuration
```

## 🎨 Customization

### Changing the Hero Image
To replace the hero landscape image revealed through the airplane window, locate the `gsap-landscape.jpg` reference in `app/page.tsx` and replace it with your own high-resolution URL or local asset.

### Adjusting the GSAP Animation
The core animation logic is wrapped inside the `useGSAP` hook in `app/page.tsx`. 
- **Scroll Length:** You can adjust the `end: "+=3000"` parameter in the ScrollTrigger configuration to make the scroll faster or slower.
- **Scale:** Modify the `scale: 45` value to determine how large the window should grow to cover the screen.

### Editing Destinations
The destinations grid is hardcoded for demonstration purposes in `app/page.tsx`. You can easily extract it into a separate component and map over an array of destination objects containing `{ title, country, price, image, isTrending }`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, modify, and use it for your own luxury travel projects!

---
*Crafted with ❤️ for modern web experiences.*
