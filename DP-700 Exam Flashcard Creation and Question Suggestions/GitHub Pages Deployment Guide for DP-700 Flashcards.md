# GitHub Pages Deployment Guide for DP-700 Flashcards

This guide will walk you through deploying your interactive DP-700 flashcards to GitHub Pages, making them accessible from anywhere on the web.

## Prerequisites

- A GitHub account (free at github.com)
- Basic familiarity with GitHub interface

## Step-by-Step Deployment Instructions

### Step 1: Create a New Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the green "New" button or the "+" icon in the top right corner
3. Select "New repository"
4. Choose a repository name (e.g., `dp700-flashcards` or `fabric-exam-prep`)
5. Make sure the repository is set to "Public" (required for free GitHub Pages)
6. Check the box "Add a README file" (optional, we'll replace it)
7. Click "Create repository"

### Step 2: Upload Your Files

You have two options for uploading files:

#### Option A: Using GitHub Web Interface (Recommended for beginners)

1. In your new repository, click "uploading an existing file"
2. Drag and drop all the flashcard files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `flashcards.js`
   - `README.md`
3. Add a commit message like "Add DP-700 interactive flashcards"
4. Click "Commit changes"

#### Option B: Using Git Command Line

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
# Copy all flashcard files to this directory
git add .
git commit -m "Add DP-700 interactive flashcards"
git push origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click on the "Settings" tab (located in the top menu)
2. Scroll down to the "Pages" section in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" as the branch
5. Select "/ (root)" as the folder
6. Click "Save"

### Step 4: Access Your Flashcards

1. GitHub will provide you with a URL like: `https://yourusername.github.io/repository-name`
2. It may take a few minutes for the site to become available
3. Once ready, you can access your flashcards from anywhere!

## Customization Options

### Adding More Questions

1. Edit the `flashcards.js` file
2. Add new objects to the `flashcards` array following this format:
```javascript
{
    id: 31,
    question: "Your question here?",
    answer: "Your answer here."
}
```
3. Commit and push the changes to update your live site

### Changing Colors and Styling

1. Edit the `styles.css` file
2. Modify the CSS variables at the top of the file
3. Common changes:
   - Background gradient: Look for `background: linear-gradient(...)`
   - Card colors: Modify `.flashcard-front` and `.flashcard-back` styles
   - Button colors: Update `.nav-btn` and `.action-btn` styles

### Updating Content

1. Make changes to any file in your repository
2. Commit the changes with a descriptive message
3. GitHub Pages will automatically rebuild and deploy your updates

## Troubleshooting

### Site Not Loading
- Wait 5-10 minutes after enabling GitHub Pages
- Check that your repository is public
- Ensure `index.html` is in the root directory

### JavaScript Not Working
- Check browser console for errors (F12 → Console tab)
- Ensure all files are uploaded correctly
- Verify file names match exactly (case-sensitive)

### Mobile Issues
- The app is designed to be responsive
- Test on different devices and browsers
- Report issues by creating a GitHub issue in your repository

## Advanced Features

### Custom Domain (Optional)

1. Purchase a domain name from any registrar
2. In your repository settings, under "Pages", add your custom domain
3. Configure DNS settings with your domain provider
4. GitHub will automatically provide HTTPS

### Analytics (Optional)

Add Google Analytics by inserting the tracking code in the `<head>` section of `index.html`.

## Sharing Your Flashcards

Once deployed, you can:
- Share the URL with classmates studying for DP-700
- Bookmark it for easy access during study sessions
- Use it on any device with a web browser
- Study offline (after initial load)

## Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Review the browser console for error messages
3. Ensure all files are properly uploaded
4. Verify your repository is public

Your interactive DP-700 flashcards are now ready to help you ace the Microsoft Fabric Data Engineer Associate exam!

