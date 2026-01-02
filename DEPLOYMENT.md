# Deployment Guide

This guide will help you upload your Autoquill AI website to GitHub and deploy it.

## Prerequisites

Before you begin, make sure you have:
- Node.js 16+ installed
- Git installed on your system
- A GitHub account

## Installing Git (if not already installed)

### Windows
1. Download Git from: https://git-scm.com/download/win
2. Run the installer and follow the setup wizard
3. Restart your terminal after installation

### macOS
```bash
brew install git
```

### Linux
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # Fedora/RHEL
```

## Step 1: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
# Navigate to your project directory
cd "C:\Users\adria\Downloads\autoquill-ai"

# Initialize git repository
git init

# Add all files to staging
git add .

# Make your first commit
git commit -m "Initial commit: Autoquill AI website v1.0"
```

## Step 2: Connect to GitHub

```bash
# Add the GitHub remote repository
git remote add origin https://github.com/AdrianNeely123/autoquill-ai-website.git

# Verify the remote was added
git remote -v
```

## Step 3: Push to GitHub

```bash
# Push your code to GitHub
git push -u origin master
```

If you encounter a branch name issue, try:

```bash
git branch -M main
git push -u origin main
```

## Step 4: Authentication

If prompted for credentials:

### Using Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` permissions
3. Use the token as your password when pushing

### Using SSH (Alternative)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy the public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
```

Then change remote to SSH:
```bash
git remote set-url origin git@github.com:AdrianNeely123/autoquill-ai-website.git
```

## Step 5: Deploy to Production

### Option A: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Option B: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build your project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option C: GitHub Pages

1. Update `vite.config.ts` to include base path:
```typescript
export default defineConfig({
  base: '/autoquill-ai-website/',
  // ... rest of config
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to repository → Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages → /root
   - Save

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/AdrianNeely123/autoquill-ai-website.git
```

### Error: "repository not found"
Make sure the repository exists on GitHub and you have access to it.

### Error: "Authentication failed"
Use a Personal Access Token instead of your password.

## Continuous Deployment

Once pushed to GitHub, you can set up automatic deployments:

### With Vercel:
1. Go to vercel.com
2. Import your GitHub repository
3. Vercel will automatically deploy on every push to main

### With Netlify:
1. Go to netlify.com
2. New site from Git
3. Choose your repository
4. Deploy settings will be auto-detected

## Post-Deployment Checklist

- [ ] Test all forms and integrations
- [ ] Verify Calendly booking works
- [ ] Test Vapi voice agent button
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify analytics (if added)
- [ ] Set up custom domain (optional)

## Custom Domain Setup

### For Vercel:
1. Go to project settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### For Netlify:
1. Go to site settings → Domain management
2. Add custom domain
3. Configure DNS records

## Environment Variables

If you need to set environment variables in production:

### Vercel:
```bash
vercel env add GEMINI_API_KEY
```

### Netlify:
Site settings → Environment variables → Add variable

## Need Help?

- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

---

**Note:** Once you've successfully pushed to GitHub, the repository will be live at:
https://github.com/AdrianNeely123/autoquill-ai-website


