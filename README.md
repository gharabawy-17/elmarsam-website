# Al-Marsam - Art & Creativity Space

A modern Nuxt.js website for Al-Marsam, an art center offering courses in drawing, sculpture, pottery, music, and handmade crafts.

## Features

- **SSR (Server-Side Rendering)** for better SEO and performance
- **Tailwind CSS** for modern, responsive styling
- **Internationalization (i18n)** support for Arabic and English
- **Responsive design** optimized for all devices
- **SEO optimized** with proper meta tags and structured data

## Tech Stack

- **Nuxt 4** - Vue.js framework with SSR
- **Tailwind CSS** - Utility-first CSS framework
- **@nuxtjs/i18n** - Internationalization
- **Swiper** - For sliders and galleries

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended - Free)

1. **Connect your repository** to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

2. **Configure the project**:
   - Framework Preset: Nuxt.js
   - Build Command: `npm run build`
   - Output Directory: `.output/public` (for static) or leave default for SSR
   - Environment Variables: Add any needed env vars

3. **Deploy**:
   - Vercel will automatically detect Nuxt and configure it for SSR
   - Your site will be deployed with a `.vercel.app` domain
   - Custom domain can be added in project settings

### Netlify (Alternative Free Option)

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.output/public` (for static generation)
3. **Environment variables**: Add `NODE_VERSION=18` or higher
4. **Deploy**

### Manual Deployment

For other hosting providers, build the project and upload the `.output` directory.

## Project Structure

```
├── app/
│   ├── app.vue          # Main app component
│   ├── assets/css/      # Global styles
│   └── app.vue
├── components/          # Reusable components
│   ├── AppHeader.vue
│   └── AppFooter.vue
├── layouts/             # Page layouts
│   └── default.vue
├── pages/               # Page components
│   └── index.vue
├── public/              # Static assets
│   └── img/
├── i18n.config.ts       # Internationalization config
├── nuxt.config.ts       # Nuxt configuration
└── tailwind.config.js   # Tailwind configuration
```

## SEO & Performance

- Server-side rendering for fast initial page loads
- Optimized images and assets
- Proper meta tags and Open Graph data
- Arabic and English language support
- Mobile-responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2026 Al-Marsam. All rights reserved.
