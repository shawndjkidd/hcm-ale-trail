# 🚀 Deployment Guide - HCM Ale Trail

## Quick Deploy to Vercel

Follow these steps to deploy your app to Vercel:

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `hcm-ale-trail`
3. Description: "Ho Chi Minh Ale Trail - Collect stamps and earn a free hat!"
4. Choose **Public** or **Private**
5. **DON'T** initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Files to GitHub

1. After creating the repo, click on "**uploading an existing file**" (blue link)
2. Drag and drop ALL these files:
   - `index.html`
   - `hcm-ale-trail.jsx`
   - `package.json`
   - `vercel.json`
   - `.gitignore`
   - `README.md`
   - `DEPLOY.md`
   - `assets/` folder (with all logo files!)
3. Commit message: "Initial commit - HCM Ale Trail app"
4. Click "**Commit changes**"

### Step 3: Deploy on Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "**Add New Project**"
4. Click "**Import Git Repository**"
5. Find your `hcm-ale-trail` repository
6. Click "**Import**"
7. **Project Settings:**
   - Framework Preset: **Other**
   - Build Command: Leave empty (static site)
   - Output Directory: Leave empty
   - Install Command: Leave empty
8. Click "**Deploy**"

### Step 4: Wait for Deployment

Vercel will deploy your app in about 30-60 seconds. You'll get a URL like:
```
https://hcm-ale-trail.vercel.app
```

### Step 5: Test Your App

1. Visit your new URL
2. Test the language switcher
3. Click on a brewery
4. Try entering a code (e.g., `BIACRAFT2024` for BiaCraft)
5. Check that stamps are collected!

## Important Notes

### Secret Codes

Current brewery codes in the app:
```
BiaCraft: BIACRAFT2024
Heart of Darkness: DARKNESS2024
Deme: DEME2024
Steersman: STEERSMAN2024
East West: EASTWEST2024
Pasteur St: PASTEUR2024
Rooster: ROOSTER2024
7 Bridges: BRIDGES2024
Belgo: BELGO2024
```

**⚠️ IMPORTANT:** Change these codes in production for security!

### Custom Domain (Optional)

To add a custom domain:
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your domain (e.g., `hochiminhaletrail.com`)
4. Follow DNS instructions

### Replace Placeholder Logos

The current deployment uses placeholder SVG logos. To use real brewery logos:

1. Get high-quality logo images from each brewery
2. Optimize them (compress, resize to ~400x400px)
3. Replace the files in the `assets/` folder
4. Push changes to GitHub
5. Vercel will auto-deploy!

### Environment Variables

This app doesn't need environment variables, but if you want to add analytics or other features:

1. Go to Vercel Project Settings
2. Click "Environment Variables"
3. Add your variables
4. Redeploy

## Troubleshooting

### Images Not Loading
- Check that `assets/` folder was uploaded correctly
- Verify paths in JSX file use `./assets/`

### React Not Loading
- Check browser console for errors
- Verify CDN links in `index.html` are working

### Stamps Not Saving
- This app uses browser state (no database)
- Stamps reset when page is refreshed
- To add persistence, implement localStorage

## Future Improvements

- [ ] Add localStorage to save progress
- [ ] Generate QR codes for each brewery
- [ ] Add a prize redemption system
- [ ] Create admin panel for code management
- [ ] Add social sharing with images
- [ ] Implement analytics tracking

## Support

For issues or questions:
- Check Vercel deployment logs
- Review browser console errors
- Contact: [your email]

---

**Happy deploying!** 🍺
