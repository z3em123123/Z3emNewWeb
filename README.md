# Z3em - Modern Developer Portfolio

A stunning, professional full-stack developer portfolio built with React, Vite, and Tailwind CSS. Features a sleek dark theme with cyan/blue gradients, smooth animations, and premium design aesthetics.

## Features

✨ **Premium Design**
- Modern dark theme with cyan and blue gradients
- Glass-morphism effects with blur and transparency
- Smooth animations and micro-interactions
- Responsive design for all devices
- Professional typography and spacing

🎨 **Components**
- Hero section with split layout (content + image)
- About section with stats and expertise highlights
- Featured projects showcase with detailed cards
- Tech stack grid with categorization
- Developer status integration (Discord via Lanyard)
- Contact section with multiple channels
- Professional footer with navigation

⚡ **Performance**
- Built with Vite for ultra-fast builds
- Optimized bundle size
- Smooth scroll behavior
- Lazy loading ready

🎯 **Interactive Elements**
- Gradient text animations
- Hover effects and transitions
- Floating animations
- Glow effects
- Mobile-responsive hamburger menu

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript/JSX** - Application logic

### Design System
- **Colors**: Cyan (#00d4ff), Blue (#0099ff), Dark slate backgrounds
- **Typography**: Inter font family
- **Spacing**: 8px-based system
- **Animation**: Custom keyframes with smooth transitions

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Z3em123123/Z3emNewWeb.git
cd Z3emNewWeb

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 to view it in your browser.

### Production Build

```bash
npm run build
```

The optimized build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with mobile menu
│   ├── Hero.jsx            # Hero section with split layout
│   ├── About.jsx           # About section with stats
│   ├── Projects.jsx        # Featured and other projects
│   ├── TechStack.jsx       # Technology cards with icons
│   ├── Developer.jsx       # Discord status integration
│   ├── Contact.jsx         # Contact section with CTA
│   └── Footer.jsx          # Footer with navigation
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles and animations
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change tagline: "Building the future with Z3em"
   - Update description
   - Modify statistics (projects, experience, satisfaction)

2. **About Section** (`src/components/About.jsx`)
   - Update bio and professional description
   - Modify expertise highlights

3. **Projects** (`src/components/Projects.jsx`)
   - Add/edit featured projects
   - Update project descriptions and tags
   - Add project links

4. **Tech Stack** (`src/components/TechStack.jsx`)
   - Add/remove technologies
   - Change categories

5. **Contact** (`src/components/Contact.jsx`)
   - Update email address
   - Add social media links
   - Modify contact form endpoints

### Color Customization

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  primary: '#0a0e27',      // Main background
  secondary: '#16213e',    // Secondary background
  accent: '#00d4ff',       // Cyan accent
  'cyan-glow': '#00d4ff',  // Glow effects
}
```

### Discord Status Integration

To display your Discord status:

1. Get your Discord User ID (right-click username → Copy User ID)
2. Open `src/components/Developer.jsx`
3. Replace `YOUR_DISCORD_ID` with your actual ID
4. The status will update every 30 seconds via Lanyard API

### Font Customization

Update the font import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## Animations

The portfolio includes several custom animations:

- **fadeIn** - Fade in effect (0.6s)
- **slideUp** - Slide up from bottom (0.6s)
- **float** - Floating effect (6s infinite)
- **glow** - Glowing box shadow (3s infinite)
- **bounce** - Built-in Tailwind bounce

Apply animations using Tailwind classes:

```jsx
<div className="animate-slideUp" style={{animationDelay: '0.1s'}}>
  Content
</div>
```

## Performance Metrics

Current build sizes:
- HTML: 0.59 kB (gzipped: 0.39 kB)
- CSS: 24.03 kB (gzipped: 4.71 kB)
- JavaScript: 172.78 kB (gzipped: 52.43 kB)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.js`:

```javascript
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

Then deploy:

```bash
npm run build
# Push dist folder to gh-pages branch
```

## Accessibility

The portfolio includes:
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios for readability
- Mobile-friendly touch targets

## License

This project is open source and available under the MIT License.

## Author

**Z3em** - Full Stack Developer & Software Engineer

- GitHub: [@Z3em123123](https://github.com/Z3em123123)
- Email: contact@z3em.dev
- Portfolio: [z3em.dev](https://z3em.dev)

## Contributing

Contributions are welcome! Feel free to submit pull requests for improvements.

---

Built with ❤️ using React, Vite, and Tailwind CSS
