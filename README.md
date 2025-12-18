# Universal Landing Page Template

A mobile-first, clean, and fast landing page template built with React (Vite) and Tailwind CSS. Designed for easy rebranding through a centralized configuration system.

## Features

- 🎨 **Mobile-First Design** - Responsive layout that looks great on all devices
- 🎭 **Theme Switcher** - Light and dark mode support
- 🚀 **Hero Section** - Eye-catching hero with customizable content
- 📦 **Services Grid** - Showcase your services in a beautiful grid layout
- ⭐ **Review Widget** - Display customer reviews with star ratings
- 📞 **Contact Section** - Multiple contact options with smooth scrolling
- 🔧 **Easy Rebranding** - Change logo, colors, and copy in seconds

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Rebranding Guide

To rebrand this template for your client:

1. **Update Branding Config** (`src/config/branding.ts`):
   - Change `companyName`
   - Update `logo` path
   - Modify `colors` (primary, secondary, accent)
   - Update all text content (hero, services, contact info)

2. **Replace Logo**:
   - Place your logo file in the `public/` directory
   - Update the `logo` path in `branding.ts`

3. **Customize Colors**:
   - Colors are defined in `src/config/branding.ts`
   - They automatically propagate through the Tailwind theme
   - Dark mode colors are handled automatically

4. **Update Content**:
   - All text content is in `src/config/branding.ts`
   - Services, reviews, and contact information can be easily modified

## Project Structure

```
landing-page/
├── src/
│   ├── components/     # React components
│   ├── config/         # Branding configuration
│   ├── context/        # Theme context
│   └── ...
├── public/             # Static assets
└── ...
```

## Technologies

- React 18+
- TypeScript
- Vite
- Tailwind CSS
- React Context API

## License

MIT

