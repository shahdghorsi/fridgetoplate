# GitHub Pages Deployment

This file contains instructions for deploying the FridgeToPlate web application to GitHub Pages.

## Repository Setup

1. Create a new GitHub repository named `fridgetoplate`
2. Push the local repository to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/fridgetoplate.git
   git branch -M main
   git push -u origin main
   ```

## GitHub Pages Configuration

1. Go to your GitHub repository settings
2. Navigate to the "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select the "main" branch and "/ (root)" folder
5. Click "Save"
6. Wait a few minutes for the deployment to complete

## Custom Domain (Optional)

1. In the GitHub Pages settings, enter your custom domain in the "Custom domain" field
2. Add a CNAME record in your DNS settings pointing to `yourusername.github.io`
3. Click "Save"
4. Check "Enforce HTTPS" for secure connections

## Accessing Your Deployed Application

Your application will be available at:
- https://yourusername.github.io/fridgetoplate/
- Or at your custom domain if configured

## Updating Your Deployed Application

1. Make changes to your local repository
2. Build the application: `npm run build`
3. Copy the contents of the `out` directory to your GitHub Pages repository
4. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Update application"
   git push
   ```

## Troubleshooting

- If your site shows a 404 error, ensure the repository is public
- If assets aren't loading, check that paths are relative and not absolute
- For routing issues, ensure you're using hash-based routing or configure a 404.html redirect
