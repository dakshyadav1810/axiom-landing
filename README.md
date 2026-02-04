# Axiom Landing Page

A modern, dark-themed SaaS landing page for Axiom — a testing platform for teams that ship fast.

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **Lucide React** — Icon library
- **CSS Variables** — Theming & styling

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The site will open at [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Problem/
│   ├── Solution/
│   ├── HowItWorks/
│   ├── Features/
│   ├── TestReport/
│   ├── WhoItsFor/
│   ├── Pricing/
│   ├── FinalCTA/
│   └── Footer/
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

1. **Hero** — Main headline, CTAs, and dashboard preview
2. **Problem** — Pain points addressed by Axiom
3. **Solution** — High-level value proposition
4. **How It Works** — 3-step process
5. **Features** — Key capabilities
6. **Test Report** — Interactive report preview
7. **Who It's For** — Target audience positioning
8. **Pricing** — Plans and pricing
9. **Final CTA** — Closing call to action
10. **Footer** — Links and branding

## Customization

Edit CSS variables in `src/index.css` to customize colors, typography, and spacing:

```css
:root {
  --accent-purple: #7c3aed;
  --bg-primary: #0a0a0b;
  /* ... */
}
```

## License

MIT
