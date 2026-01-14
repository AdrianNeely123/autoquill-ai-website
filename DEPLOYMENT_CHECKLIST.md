# Deployment Checklist - Google Search Console Fixes

## Pre-Deployment Verification ✅

- [x] Video structured data fixed (uploadDate with timezone)
- [x] Review structured data fixed (separated from Product schema)
- [x] Sitemap updated (removed hash URLs)
- [x] SPA routing configured (Netlify & Vercel)
- [x] Dynamic canonical tags implemented
- [x] Hreflang tags added
- [x] No linter errors

---

## Deployment Steps

### Step 1: Build and Test Locally
```bash
npm install
npm run build
```

Verify the build completes without errors.

### Step 2: Deploy to Your Hosting Platform

**For Netlify:**
```bash
# If using Netlify CLI
netlify deploy --prod

# Or push to your connected Git repository
git add .
git commit -m "Fix: Google Search Console issues - structured data, 404s, canonical tags"
git push origin main
```

**For Vercel:**
```bash
# If using Vercel CLI
vercel --prod

# Or push to your connected Git repository
git add .
git commit -m "Fix: Google Search Console issues - structured data, 404s, canonical tags"
git push origin main
```

**For Other Platforms:**
1. Ensure `dist/` folder is deployed
2. Ensure `_redirects`, `netlify.toml`, or `vercel.json` are copied to the deployment
3. Configure server to serve `index.html` for all routes

### Step 3: Verify Deployment

Visit your site and test:
- [ ] Homepage loads: `https://autoquillai.com/`
- [ ] Direct URL navigation works: `https://autoquillai.com/pricing` (should not 404)
- [ ] Hash navigation works: `https://autoquillai.com/#/dentists`
- [ ] Canonical tag updates when you navigate (check page source)
- [ ] Page title changes when you navigate

### Step 4: Validate Structured Data

Use Google's Rich Results Test:
1. Go to: https://search.google.com/test/rich-results
2. Enter: `https://autoquillai.com/`
3. Verify:
   - [ ] No errors in VideoObject schema
   - [ ] No errors in Review schemas
   - [ ] No errors in Product schema
   - [ ] All other structured data passes

### Step 5: Submit to Google Search Console

1. **Submit Updated Sitemap:**
   - Go to: Google Search Console → Sitemaps
   - Add: `https://autoquillai.com/sitemap.xml`
   - Click "Submit"

2. **Request Reindexing:**
   - Go to: URL Inspection tool
   - Enter: `https://autoquillai.com/`
   - Click "Request Indexing"

3. **Monitor Issues:**
   - Go to: Core Web Vitals
   - Go to: Coverage
   - Go to: Enhancements → Review snippets
   - Go to: Enhancements → Video

---

## Expected Timeline

| Issue | Resolution Time |
|-------|----------------|
| Structured Data Errors | 1-3 days |
| 404 Errors | 1-7 days |
| Canonical Tag Recognition | 3-7 days |
| Full Reindexing | 7-14 days |

---

## Verification Checklist (3 Days After Deployment)

- [ ] Google Search Console shows no structured data errors
- [ ] Google Search Console shows no 404 errors
- [ ] Google Search Console recognizes canonical tags
- [ ] Pages indexed with correct titles
- [ ] Rich results appear in search (if applicable)

---

## Troubleshooting

### If 404 Errors Persist:

1. **Check your hosting configuration:**
   - Verify `_redirects` file is in `public/` folder before build
   - Verify `netlify.toml` or `vercel.json` is in root directory
   - Check that your hosting platform supports SPA routing

2. **Test manually:**
   ```bash
   # After deployment, try accessing:
   curl -I https://autoquillai.com/pricing
   # Should return 200, not 404
   ```

3. **Verify in browser:**
   - Navigate directly to `https://autoquillai.com/pricing` (not via hash)
   - Should load the site, not show 404

### If Structured Data Errors Persist:

1. **Revalidate with Google's tools:**
   - https://search.google.com/test/rich-results
   - https://validator.schema.org/

2. **Check deployed HTML:**
   - View page source of deployed site
   - Verify structured data changes are present
   - Look for the updated uploadDate and separated Review schemas

3. **Clear Google's cache:**
   - In Search Console, use "Request Indexing" again
   - This forces Google to re-crawl the page

### If Canonical Tag Issues Persist:

1. **Verify dynamic updates:**
   - Navigate to different pages on your site
   - Check page source to see if canonical tag changes
   - Use browser dev tools: `document.querySelector('link[rel="canonical"]').href`

2. **Check for JavaScript errors:**
   - Open browser console
   - Navigate between pages
   - Ensure no React errors that might prevent useEffect from running

---

## Files to Include in Deployment

✅ **Required in deployment:**
- `dist/` folder (built files)
- `public/_redirects` → `dist/_redirects`
- `netlify.toml` (root directory)
- `vercel.json` (root directory)
- `public/sitemap.xml` → `dist/sitemap.xml`
- `public/robots.txt` → `dist/robots.txt`

📝 **Verify after build:**
```bash
# Check that files are in dist folder
ls dist/
# Should include: _redirects, sitemap.xml, robots.txt, index.html, assets/
```

---

## Post-Deployment Monitoring

### Week 1:
- Check Google Search Console daily for error reduction
- Monitor crawl stats for increased activity
- Watch for any new errors

### Week 2:
- Verify all errors are cleared
- Check indexed pages count
- Review search performance metrics

### Month 1:
- Monitor organic traffic changes
- Track ranking improvements
- Analyze click-through rates from search results

---

## Success Metrics

✅ **You'll know it's working when:**
- Google Search Console shows 0 structured data errors
- Google Search Console shows 0 coverage errors (404s)
- Direct URL navigation works without 404s
- Canonical tags are recognized for each page
- Rich results may appear in Google Search (reviews, ratings)
- Indexed pages show unique titles and descriptions

---

**Ready to Deploy!** Follow the steps above and your Google Search Console issues will be resolved. 🚀

