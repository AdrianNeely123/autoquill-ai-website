# Quick Start: Adding Your Founder Photo

## Step 1: Save Your Photo

1. Take the headshot photo you provided
2. Save it to: `public/adrian-founder.jpg`
3. That's it! The code is already looking for this file

## Step 2: View Your Changes

```bash
npm run dev
```

Then open your browser to see:
- New founder section with your photo
- Warmer, lighter color theme
- Clearer hero messaging
- Updated pricing language

## Photo Requirements

- **Filename:** `adrian-founder.jpg` (exactly)
- **Location:** `public/` folder
- **Recommended size:** 400x400px or larger
- **Format:** JPG or PNG (JPG preferred for web)
- **Background:** The black background in your photo works great!

## If You Want to Use a Different Photo Name

Edit line 27 in `components/FounderSection.tsx`:

```typescript
// Change this line:
src="/adrian-founder.jpg"

// To your filename:
src="/your-photo-name.jpg"
```

---

That's all you need to do! Everything else is already implemented. 🚀

