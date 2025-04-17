# FridgeToPlate Web Application

FridgeToPlate is a web application that helps users discover recipes based on ingredients they already have. Simply take a photo of your ingredients, and the app will suggest recipes you can make right now.

## Permanent Deployment

This application is permanently deployed and accessible at:
**https://yourusername.github.io/fridgetoplate/**

(Replace "yourusername" with your actual GitHub username after completing the GitHub Pages setup)

## Features

- **Ingredient Recognition**: Upload photos of ingredients or capture them with your device camera
- **Recipe Suggestions**: Get recipe recommendations based on your available ingredients
- **Fusion Recipe Generation**: Create unique fusion recipes by combining different cuisines
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **API Integration**: 
  - Image Recognition (Google Cloud Vision API)
  - Recipe Database (Spoonacular API)
- **Deployment**: GitHub Pages (Static Export)

## Documentation

For detailed documentation, please see:

- [GitHub Pages Deployment Guide](./GITHUB_PAGES_DEPLOYMENT.md)
- [Deployment Verification Guide](./DEPLOYMENT_VERIFICATION.md)

## Local Development

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/fridgetoplate.git
cd fridgetoplate
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Recipe data provided by [Spoonacular API](https://spoonacular.com/food-api)
- Image recognition powered by [Google Cloud Vision API](https://cloud.google.com/vision)
