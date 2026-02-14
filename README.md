# Mahendra Builders - Modern Website

A modern, responsive website for Mahendra Builders built with Next.js 14, React, and Tailwind CSS.

## Features

- 🎨 Modern, clean UI with light theme
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router
- 🎭 Smooth animations and transitions
- 🖼️ Optimized image loading
- 📊 Dynamic project showcases
- 💬 Customer testimonials carousel
- 📞 Multiple contact methods
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter & Poppins)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository or extract the files

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
mahendra-builders/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Homepage
├── components/
│   ├── Navbar.js            # Navigation bar with dropdown menus
│   ├── Hero.js              # Hero section with image carousel
│   ├── About.js             # About section with company info
│   ├── Features.js          # Property features grid
│   ├── Stats.js             # Statistics section
│   ├── Projects.js          # Featured projects showcase
│   ├── Testimonials.js      # Customer testimonials carousel
│   ├── CTA.js               # Call-to-action section
│   └── Footer.js            # Footer with all links
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies

```

## Key Components

### Hero Section
- Auto-rotating image carousel
- Smooth transitions
- Statistics bar
- Call-to-action buttons

### Projects Showcase
- Grid layout of all projects
- Project details with location and contact
- Hover effects and animations
- Direct call-to-action buttons

### Features
- Modern card design
- Icon-based feature highlights
- Responsive grid layout

### Testimonials
- Customer reviews carousel
- Star ratings
- Navigation controls

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
      accent: { ... }
    }
  }
}
```

### Content
Update component files in the `components/` directory to modify text, images, and links.

### Images
Replace image URLs in components with your own hosted images or add them to the `public/` directory.

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting with App Router
- CSS optimization with Tailwind CSS
- Lazy loading for images
- Smooth animations with CSS transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Mahendra Builders & Developers. All Rights Reserved.

## Contact

For any queries or support:
- Phone: 0755-4278331
- Email: mahendrabuilders@rediffmail.com
- Address: Block - 1, Mahendra Business Square, E-8 Extn Bawaria Kalan, Bhopal
