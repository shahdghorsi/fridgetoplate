# GitHub Pages Deployment Guide for FridgeToPlate

This guide provides detailed instructions for deploying the FridgeToPlate web application to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Basic familiarity with command line operations

## Step-by-Step Deployment Instructions

### 1. Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository `fridgetoplate` (this name is important as it matches the configuration)
4. Choose "Public" visibility
5. Click "Create repository"

### 2. Download and Extract the Deployment Package

1. Download the deployment package zip file provided
2. Extract the contents to a local folder on your computer

### 3. Initialize Git Repository and Push to GitHub

Open a terminal or command prompt and run the following commands:

```bash
# Navigate to the extracted folder
cd path/to/extracted/folder

# Initialize a Git repository
git init

# Add all files to the repository
git add .

# Commit the files
git commit -m "Initial commit of FridgeToPlate web application"

# Add your GitHub repository as the remote origin
git remote add origin https://github.com/yourusername/fridgetoplate.git

# Push to GitHub
git push -u origin main
```

Note: Replace `yourusername` with your actual GitHub username.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab at the top of the repository)
3. In the left sidebar, scroll down and click on "Pages"
4. Under "Build and deployment" section:
   - For "Source", select "Deploy from a branch"
   - For "Branch", select "main" and "/ (root)"
   - Click "Save"

### 5. Verify Deployment

1. GitHub will show a message saying "Your site is being published at https://yourusername.github.io/fridgetoplate/"
2. It may take a few minutes for the deployment to complete
3. Once deployed, visit the URL to verify your application is working correctly

### 6. Troubleshooting

If you encounter any issues:

- Ensure your repository is named exactly `fridgetoplate`
- Check that GitHub Pages is enabled correctly in the repository settings
- Verify that all files from the deployment package were copied correctly
- Make sure you're using the correct GitHub Pages URL format: `https://yourusername.github.io/fridgetoplate/`

## Updating Your Application

To update your application in the future:

1. Make changes to the files in your local repository
2. Commit and push the changes to GitHub:
   ```bash
   git add .
   git commit -m "Update application with new features"
   git push
   ```
3. GitHub Pages will automatically rebuild and deploy your updated application

## Alternative Deployment Method

If you prefer to use npm for deployment:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This method will automatically build and deploy your application to the gh-pages branch of your repository.
