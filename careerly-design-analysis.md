# Careerly Website — Full Design System Analysis
*(Reference doc for rebuilding a better, student-friendly version in Next.js)*

---

## 1. Overall Design Language

**Style: Neubrutalism / "Brutalist-pop"**

Core visual rules used almost everywhere on this site:
- Thick **black borders** (3–4px) on nearly every card, button, badge, and container
- **Hard offset shadows** — not soft blurry shadows, but solid black shadows offset to bottom-right (like `box-shadow: 6px 6px 0px #000`)
- **Sticker/tag labels** rotated slightly (2–5°) sitting on top of section corners (e.g. "THE REAL PROBLEM", "BORING", "ATS APPROVES", "24 HOURS")
- Big **bold uppercase headline type** contrasted with normal-case, lighter-weight body copy
- Flat, saturated color blocks (no gradients except a very subtle purple wash in the hero background)
- Rounded corners are small (8–16px) — never fully rounded/pill except buttons and some badges
- Every section = one flat background color; sections alternate: cream → black → cream → light gray → black → cream

This is a deliberately "loud but structured" look — meant to feel confident/edgy, not corporate. Since your goal is **students + "poppy not aggressive"**, you can keep the neubrutalism bones (it reads as fun, Gen-Z, modern) but soften the "aggressive marketing" tone in copy — the visual system itself is genuinely good for a student audience.

---

## 2. Color Palette

| Role | Color (approx hex) | Where used |
|---|---|---|
| Background (light) | `#F4F3ED` / `#F5F5F0` (warm off-white / eggshell) | Main page background |
| Background (dark) | `#0A0A0A` / `#111111` (near-black) | Alternating sections, footer, sticky top bar |
| Ink / Text / Borders | `#0A0A0A` (black) | All headings, borders, shadows |
| Primary Accent — Lime/Neon | `#D7FF3F` – `#DFFF4F` (yellow-green neon) | Primary CTA buttons, highlight badges, checkmarks, underline accents |
| Secondary Accent — Purple | `#7B2FF7` / `#6D28D9` (vivid purple) | Logo mark, "problem" headline highlight, tag badges |
| Card Color 1 — Blue | `#1E4FE0` / `#2145E6` (electric blue) | "Resume / Business Analyst" cards |
| Card Color 2 — Yellow/Amber | `#F4C430` / `#F5C518` (mustard-gold) | "LinkedIn / Operations" cards |
| Card Color 3 — Pink/Coral | `#F2436C` / `#EF4067` (hot pink-red) | "Applications / Consulting" cards |
| Muted gray text | `#4B4B4B` / `#5C5C5C` | Sub-headings, descriptions |
| White | `#FFFFFF` | Text on dark/colored backgrounds, card interiors |

**Pattern:** 3 "product" colors (blue / yellow / pink) are used consistently to color-code the 3 core services throughout the entire site — cards, badges, icons, everything. This is a strong, memorable system worth keeping.

**Accessibility note:** Neon lime text/buttons on black or cream has excellent contrast; pink/yellow text-on-color sometimes runs a bit low-contrast for white text — worth fixing in your rebuild (use darker pink/blue shades or black text on yellow).

---

## 3. Typography

- **Headings:** A heavy, tightly-tracked, **grotesque/condensed sans-serif** in ALL CAPS — very similar to **Archivo Black**, **Space Grotesk (Bold)**, or **General Sans Extrabold**. Big size jumps (hero headline ~72–90px desktop), tight line-height (~0.95–1.05).
- **Body text:** A clean, modern **grotesque sans** (looks like **Inter**, **Satoshi**, or **General Sans Regular**) — normal case, comfortable line-height (~1.5), gray-black color.
- **Buttons/Labels/Badges:** Same bold display font as headings, often smaller and sometimes with letter-spacing (uppercase tracking) for tag-style badges like "THE MENU", "BUILT FOR INDIAN STUDENTS".
- **Numbers/Prices (₹1,200 etc.):** Extra bold, large, same display font — treated almost like a heading element for emphasis.

**Free font suggestions to replicate this exact vibe for Next.js (Google Fonts, no license issues):**
- Headings → `Archivo Black` or `Space Grotesk` (700/800 weight)
- Body → `Inter` or `Plus Jakarta Sans`
- Optional friendlier alt for a "poppy, non-aggressive" student feel → `Clash Display` or `Sora` for headings (rounder, softer than Archivo Black while keeping the bold energy)

---

## 4. Layout & Spacing

- **Container width:** ~1200–1280px max, generous side padding (~64–80px desktop, ~20px mobile)
- **Section padding:** Large vertical breathing room — ~100–140px top/bottom per section
- **Grid:** 3-column card grids for services/pricing (blue/yellow/pink), 2-column for "how it works" steps, single column stacked on mobile
- **Sticky header:** Floating pill-shaped nav bar with black border + shadow, stays fixed at top with slight margin from viewport edge (not full-width flush)
- **Corner badges:** Small rotated rectangle tags anchored to the top-left or top-right corner of major sections, overlapping the section boundary slightly — a recurring signature element

---

## 5. Components Breakdown

### Buttons
- **Primary CTA:** Black background, neon-lime text, black border, hard offset shadow, slight scale/shadow-shift on hover
- **Secondary CTA:** White/cream background, black text, black border, same shadow style
- Arrow icon (→) suffix on almost every CTA button

### Cards (pricing/services)
- Solid color background (blue/yellow/pink), black border, hard shadow
- Small rotated "sticker" label overlapping top-right corner (e.g. "RECRUITER READY", "REAL HELP")
- Checkmark list items in white/black
- Bold price in large type, CTA button pinned to bottom

### Badges/Tags
- Small rectangle, colored background, black border, rotated 2–5°, uppercase bold small text — used as section eyebrows ("THE REAL PROBLEM", "TRUST BUILDER", "PRICING")

### Before/After & Comparison blocks
- Two-column layout with a strikethrough "boring/generic" version vs a highlighted "good" version, divider with a small circular drag/compare icon in the middle

### Sticky floating chat button (bottom-right)
- Circular, neon-lime background, black border, black chat-bubble icon, drop shadow
- **This is exactly the element you want to swap** — same circle/position/shadow, but swap the icon to a WhatsApp glyph and `href="https://wa.me/91XXXXXXXXXX"` (opens WhatsApp chat) instead of an in-app chat widget

### FAQ Accordion
- White cards, black border, chevron icon, expands on click, minimal style, stacked full-width

---

## 6. Animations & Interactions (what to rebuild)

Based on the scroll behavior and hover states visible across screenshots, this site uses:

1. **Scroll-reveal / fade-up on entry** — sections and cards fade + translate-up (~20–30px) as they enter viewport (classic `IntersectionObserver` + `opacity/transform` transition, ~400–600ms ease-out). In Next.js: **Framer Motion** `whileInView` is the easiest match.
2. **Hover lift on cards/buttons** — on hover, cards/buttons shift slightly up-left (e.g. `translate(-3px,-3px)`) while the hard shadow grows, simulating a "pressed away from the page" 3D pop. On click/active, it inverts (shifts toward shadow, shadow shrinks) — classic neubrutalist button-press effect.
3. **Rotated sticker badges** micro-wiggle or rotate slightly further on hover in some spots.
4. **Sticky nav shrink/blur** on scroll (nav bar likely gets a subtle backdrop or compresses slightly) — common pattern, worth adding even if subtle in these screenshots.
5. **Animated counters/checkmarks** in the "AI Can Write, Humans Still Check" dark section — checklist items likely animate in one-by-one (stagger reveal).
6. **Marquee/ticker text** at the very top ("Same resume. Different company. Same rejection.") — this is a horizontally scrolling marquee strip, infinite loop, black background.
7. **Interactive pricing builder** ("Build Your Job Search Stack") — checkbox cards that toggle selected state (border/checkmark fill) and total price updates live, "Continue" button disables/enables based on selection. This needs real client-side state (`useState` in Next.js), not just CSS.

**Recommended stack for animations in Next.js:**
- `framer-motion` for scroll-reveal, hover lift, stagger animations
- Plain CSS `transition` for button press/shadow effects (cheaper than JS)
- A simple custom marquee component (CSS `@keyframes translateX` looped) for the top ticker

---

## 7. Content/Copy Structure (page flow, for your own better version)

1. Sticky nav (logo, links, CTA)
2. Marquee strip (attention-grabbing one-liner)
3. Hero — big headline + subtext + 2 CTAs + visual mockup (phone + colored resume cards)
4. "Built for [X] students" trust badge
5. Problem section (generic vs targeted resume comparison)
6. Services/pricing 3-card grid (color-coded)
7. Persona example: "One person, three directions" (shows same student, 3 tailored resumes)
8. Interactive stack-builder (pick services, live total)
9. Process timeline ("You buy → we do the boring part", 10 steps)
10. Trust section (dark bg, "AI writes, humans check" checklist)
11. Relatable meme-style quote card (recruiter/student exchange)
12. Stats callout (dark bg, big number stat)
13. Testimonials (placeholder state currently — "coming soon")
14. Differentiators grid (4 icons: no fake experience, human QA, job-specific, clear deliverables)
15. Pricing recap + "Build Your Package" CTA
16. FAQ accordion
17. Final CTA (dark, dramatic, giant repeated background text)
18. Footer (dark, logo, links, social icons, WhatsApp icon)
19. Floating chat button, bottom-right (→ your WhatsApp swap goes here)

---

## 8. Suggested improvements for your student-focused, "poppy not aggressive" version

- Soften copy tone: replace confrontational lines ("Same resume. Different company. Same rejection.") with encouraging/energetic tone — keep the bold visual punch, drop the "roasting the user" energy.
- Slightly rounder font choice (Sora/Clash Display instead of Archivo Black) reads friendlier while keeping boldness.
- Keep the blue/yellow/pink 3-color system — it's genuinely great for scanability and memorability.
- Keep neubrutalist cards/shadows — they're distinctive and mobile-friendly.
- Replace the neon chat bubble with a WhatsApp-green circular button (or keep neon-lime background with the white WhatsApp glyph, to stay on-brand) — bottom-right, fixed position, `<a href="https://wa.me/<number>" target="_blank">`.

---

## 9. Suggested Next.js Tech Stack (frontend-first, as you asked)

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (fastest way to replicate the utility-driven flat-block style)
- **Animation:** Framer Motion
- **Fonts:** `next/font/google` — load `Space Grotesk` / `Sora` (headings) + `Inter` (body)
- **Icons:** Lucide-react (chat, arrow, checkmark icons)
- **Forms (later, backend phase):** React Hook Form + Zod validation, hooked to your backend/API once ready
- **Deployment preview:** Vercel

Once your frontend is ready, tell me and I'll help build out the actual form/backend flow.
