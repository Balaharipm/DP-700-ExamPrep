# DP-700 Interactive Flashcards

A modern, responsive web application for studying Microsoft Fabric Data Engineer Associate (DP-700) exam questions using interactive flashcards.

## Features

- **Interactive Card Flipping**: Click or tap to flip between questions and answers
- **Navigation Controls**: Previous/Next buttons with keyboard shortcuts
- **Progress Tracking**: Visual progress bar and completion percentage
- **Study Statistics**: Track cards studied and session time
- **Shuffle Mode**: Randomize card order for varied practice
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Keyboard Support**: Use arrow keys for navigation and spacebar to flip cards
- **Touch Gestures**: Swipe left/right on mobile devices to navigate

## Keyboard Shortcuts

- **Space**: Flip current card
- **Left Arrow**: Previous card
- **Right Arrow**: Next card
- **Ctrl/Cmd + R**: Reset progress
- **Ctrl/Cmd + S**: Shuffle cards

## Content

Contains 30 comprehensive flashcards covering:
- Microsoft Fabric fundamentals
- Data engineering concepts
- Lakehouse, Warehouse, and Eventhouse differences
- Security and access control
- Data pipelines and orchestration
- Version control and deployment
- Real-time analytics and streaming
- Best practices and exam tips

## Files

- `index.html` - Main application structure
- `styles.css` - Modern styling and animations
- `script.js` - Interactive functionality
- `flashcards.js` - Question and answer data
- `README.md` - This documentation

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" as source
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your flashcards will be available at `https://yourusername.github.io/repository-name`

## Local Development

To run locally:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Free to use for educational purposes. Good luck with your DP-700 exam!

