# 🚀 Quick Start - Deploy in 5 Minutes

Follow these simple steps to get your portfolio live on GitHub Pages.

## Step 1: Create GitHub Repository (2 minutes)

1. Go to https://github.com/new
2. Repository name: **`portfolio`**
3. Make it **Public**
4. **DO NOT** check any boxes (no README, no .gitignore, nothing)
5. Click **"Create repository"**

## Step 2: Push Your Code (2 minutes)

GitHub will show you a page with commands. Copy and paste these commands one at a time in your terminal/command prompt:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Roscalion/portfolio.git
git push -u origin main
```

**Important:** Replace `Roscalion` with your actual GitHub username!

## Step 3: Enable GitHub Pages (1 minute)

1. In your GitHub repository, click **Settings** (top menu)
2. Click **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
4. Done! Your site will deploy automatically

## Step 4: Wait & View

1. Click the **Actions** tab (top menu)
2. Watch the deployment (takes 2-3 minutes)
3. When done, your site is live at:
   ```
   https://Roscalion.github.io/portfolio/
   ```
   (Replace `Roscalion` with your username)

---

## ✅ That's It!

Your portfolio is now live! 

### Next Steps (Optional):

**For Google AdSense:**
1. Go to https://www.google.com/adsense
2. Add your site URL: `https://Roscalion.github.io/portfolio/`
3. Wait for verification (24-48 hours)
4. Create ad units and replace the placeholder IDs in `/App.tsx`

**Need Help?**
- Check `DEPLOYMENT_GUIDE.md` for detailed instructions
- Check `README.md` for full documentation

---

## 🔧 Common Issues

**"Repository not found" error?**
- Make sure you replaced `Roscalion` with YOUR GitHub username

**Site shows 404?**
- Wait a few minutes for deployment to complete
- Check the Actions tab for any errors

**Build failed?**
- Make sure all files were committed: `git status`
- Check the Actions tab for error details
