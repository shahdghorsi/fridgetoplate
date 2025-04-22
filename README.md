# FridgeToPlate Web Application

Turn your fridge ingredients into delicious recipes with just a few clicks!

## Overview

FridgeToPlate is a web application that helps you:
- Take pictures of ingredients in your fridge
- Automatically identify those ingredients
- Suggest recipes based on what you have
- Generate fusion cuisine recipes

This application is designed to reduce food waste and make cooking more accessible by helping you use the ingredients you already have.

## Features

- **Ingredient Recognition**: Upload photos of your ingredients
- **Recipe Suggestions**: Find recipes that match your available ingredients
- **Fusion Cuisine Generator**: Create unique recipes combining different culinary traditions
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Deployment Instructions

This repository is configured for GitHub Pages deployment. Follow these steps to deploy:

1. **Create a GitHub Repository**:
   - Create a new repository named `fridgetoplate` on GitHub

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/fridgetoplate.git
   cd fridgetoplate
   ```

3. **Copy the Files**:
   - Copy all files from this deployment package to your local repository

4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

6. **Access Your Application**:
   - Your application will be available at: `https://yourusername.github.io/fridgetoplate/`
   - It may take a few minutes for the deployment to complete

## Alternative Deployment Method

You can also use the built-in deployment script:

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Local Development

To run the application locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Technology Stack

- React
- TypeScript
- Material UI
- React Router
- React Webcam

## License

This project is licensed under the MIT License - see the LICENSE file for details.
