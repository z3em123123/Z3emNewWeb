# Z3em Portfolio

A modern, responsive full-stack developer portfolio built with React, Vite, and Tailwind CSS. Features a sleek dark theme with gradient accents and smooth animations.

## Features

- ✨ Modern, responsive design
- 🎨 Dark theme with gradient accents
- 📱 Mobile-friendly interface
- 🚀 Built with Vite for fast development
- 🎭 Smooth animations and transitions
- 🌐 Discord status integration (via Lanyard API)
- 📦 Tech stack showcase
- 📧 Contact section with multiple channels

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript/JSX** - Application logic

### Design
- **Dark slate color scheme** - Professional and modern
- **Glass-morphism effects** - Trendy UI elements
- **Responsive grid layouts** - Mobile to desktop support
- **Smooth animations** - Fade-in and slide-up effects

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Z3em123123/Z3emNewWeb.git
cd Z3emNewWeb
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.jsx        # About section with skills
│   ├── Contact.jsx      # Contact information and links
│   ├── Developer.jsx    # Discord status integration
│   ├── Footer.jsx       # Footer content
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section with CTA buttons
│   └── TechStack.jsx    # Technology cards grid
├── App.jsx              # Main app component
├── main.jsx             # Application entry point
├── index.css            # Global styles and animations
└── index.html           # HTML template
```

## Customization

### Change Portfolio Information

Edit these files to personalize the portfolio:
- **Header/Hero**: `src/components/Header.jsx` and `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Technologies**: `src/components/TechStack.jsx`
- **Contact Links**: `src/components/Contact.jsx`
- **Discord Status**: `src/components/Developer.jsx` (replace `YOUR_DISCORD_ID`)

### Styling

- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Fonts**: Change font imports in `index.html` and `src/index.css`
- **Custom CSS**: Add styles in `src/index.css`

## Discord Status Integration

To display your Discord status:

1. Get your Discord User ID (right-click your username in Discord)
2. Open `src/components/Developer.jsx`
3. Replace `YOUR_DISCORD_ID` with your actual ID
4. The status will update every 30 seconds via Lanyard API

## Performance

- ⚡ Fast page loads with Vite
- 🎯 Optimized images with lazy loading
- 📊 Small bundle size
- 🔄 Smooth animations using CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

**Z3em** - Full Stack Developer & Software Engineer

- GitHub: [@Z3em123123](https://github.com/Z3em123123)
- Website: [Your Domain](https://yourwebsite.com)

## Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests for any improvements.

---

Built with ❤️ by Z3em
