# ON OFF DANCE STUDIO (ODS) — Premium Studio Website

A luxury, high-performance, fully responsive website for **ON OFF DANCE STUDIO (ODS)** in Madipakkam, Chennai. Directed by **R. Gopinath** (Western) and **Guru Priya** (Classical). Built with React, Vite, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, and Lenis smooth scrolling.

---

## 🌟 Brand & Cinematic Theme
- **Color Palette**: Deep Obsidian Black (`#050507`, `#0A0A0D`), Metallic Silver (`#E2E8F0`), and Cinematic Burnt Orange & Radiant Copper (`#FF6B00`, `#FFA043`, `#C2410C`).
- **Typography**: Display font (**Outfit** Black & Bold), Luxury Accent (**Cinzel**), Numbers & Meta (**Space Grotesk**), Body (**Plus Jakarta Sans**).
- **Two Founding Masters Only**:
  - **R. Gopinath**: Lead Western & Urban Master Choreographer
  - **Guru Priya**: Lead Classical Bharatanatyam Acharya
- **Class Photography**: Dedicated, high-energy professional dance photography for classes and gallery; masters' personal photos are reserved exclusively for their dedicated spotlight section.
- **Logo Integration**: Seamlessly integrated emblem matching container curvature without awkward double circular borders.
- **Signboard**: Removed raw board image in favor of clean, luxury studio location glass cards.
- **Zero Free Trial Policy**: Replaced with direct batch admissions, master assessment, and slot reservations.

---

## 🚀 Quick Start (Localhost Preview)

The development server is currently live:

```bash
# Navigate to the project directory
cd "C:\Users\Dhinesh Kumar\.gemini\antigravity\scratch\on-off-dance-studio"

# Start local development server
npm run dev
```

Open your browser at **[http://localhost:5173/](http://localhost:5173/)** to preview the site with live hot module replacement.

---

## 🛠️ How to Customize Content

All studio information is centralized in a single configuration file:
📁 **`src/data/studioConfig.js`**

### 1. Contact Details & Hotlines
Edit the `contact` object in `src/data/studioConfig.js`:
```javascript
contact: {
  address: "2/52, Raghava Nagar 9th Street, Madipakkam, Chennai - 91",
  phones: ["8870356852", "9941878870"],
  primaryPhone: "8870356852",
  whatsapp: "8870356852",
  workingHours: "Monday – Sunday: 6:00 AM – 9:30 PM",
}
```

### 2. Dance Styles & Batches
Edit `danceStyles` or `batches` in `src/data/studioConfig.js`:
- Western Dance & Freestyle (Led by R. Gopinath)
- Classical Bharatanatyam (Led by Guru Priya)
- Zumba Fitness, Hip-Hop, Bollywood, Contemporary
- Junior (4-12 yrs), Adult (13-35 yrs), Senior (35+ yrs)

### 3. Timetable / Schedule
Edit `schedule.junior`, `schedule.adult`, and `schedule.senior` in `src/data/studioConfig.js`.

### 4. Membership Plans & Prices
Edit the `pricing` array in `src/data/studioConfig.js`.

### 5. Masters' Photos
Located in `src/assets/images/`:
- `trainer-western.png` — **R. Gopinath**
- `trainer-classical.jpg` — **Guru Priya**
- `logo.png` — Studio logo emblem

---

## 📦 Building for Production

```bash
npm run build
```

Compiles optimized HTML, minified CSS, split vendor/animation bundles, and compressed assets into the `dist/` directory.

---

## 📱 Responsive Testing
The design has been verified across viewports:
- **320px – 480px**: Compact mobile devices (fluid typography, 44px+ tap targets).
- **768px**: Tablets (balanced 2-column grids and touch drawer menu).
- **1024px – 1440px**: Laptops and standard desktop displays.
- **1920px+ & 4K**: Ultra-wide displays with max-width containment.

---

## 📍 Studio Location
**ON OFF DANCE STUDIO (ODS)**  
2/52, Raghava Nagar 9th Street, Madipakkam, Chennai, Tamil Nadu - 600091  
Hotlines: `8870356852` / `9941878870`  
WhatsApp: `8870356852`
