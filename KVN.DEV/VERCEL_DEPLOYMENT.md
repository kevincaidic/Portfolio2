# Vercel Deployment Guide - Fix 404 Error

## ✅ Files Created to Fix 404:

1. **vercel.json** - Routing configuration
2. **public/_redirects** - Fallback routing

---

## 🚀 Deployment Steps:

### Option 1: Redeploy (Recommended)

1. **Push ang changes sa GitHub:**
   ```bash
   git add .
   git commit -m "Fix: Add Vercel routing configuration"
   git push
   ```

2. **Vercel will auto-deploy** - wait 1-2 minutes

3. **Check ang site** - dapat working na!

---

### Option 2: Manual Deploy

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy ang dist folder:**
   - Adto sa Vercel Dashboard
   - Click "Redeploy"
   - Or upload ang `dist` folder

---

## 🔧 Vercel Settings to Check:

### Build Settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Environment Variables (if needed):
```
VITE_FORMSPREE_FORM_ID=your_form_id_here
```

---

## 🐛 Common Issues & Solutions:

### ❌ Still getting 404?

**Solution 1: Clear Vercel Cache**
```bash
vercel --prod --force
```

**Solution 2: Check Build Logs**
- Adto sa Vercel Dashboard
- Click "Deployments"
- Check ang latest deployment logs
- Tan-awa kung naa ba'y errors

**Solution 3: Verify Files**
Make sure naa ni nga files:
- ✅ `vercel.json` (root folder)
- ✅ `public/_redirects`
- ✅ `dist/index.html` (after build)

---

### ❌ Images not loading?

**Check ang image paths:**
- ✅ Correct: `/KEVIN.jpeg`
- ❌ Wrong: `public/KEVIN.jpeg`

All images sa `public/` folder should use `/` prefix lang.

---

### ❌ CSS not loading?

**Check ang build output:**
```bash
npm run build
```

Dapat naa ang:
- `dist/index.html`
- `dist/assets/*.css`
- `dist/assets/*.js`

---

## 📝 Deployment Checklist:

- [x] Created `vercel.json`
- [x] Created `public/_redirects`
- [x] Build successful locally
- [ ] Push to GitHub
- [ ] Wait for Vercel auto-deploy
- [ ] Test ang deployed site
- [ ] Check all pages/sections
- [ ] Test contact form

---

## 🌐 After Deployment:

1. **Test all sections:**
   - Hero section
   - About
   - Skills
   - Projects (check if images load)
   - Certificates (check if images load)
   - Contact form

2. **Test on mobile:**
   - Open sa phone
   - Check responsiveness

3. **Setup contact form:**
   - Follow `CONTACT_FORM_SETUP.md`
   - Add Formspree ID sa Vercel environment variables

---

## 💡 Pro Tips:

- Use `vercel --prod` para sa production deployment
- Use `vercel dev` para sa local testing with Vercel environment
- Check Vercel logs kung naa pa'y issues

---

## 🆘 Need Help?

Kung naa pa gihapon ang 404 error after deployment:
1. Check Vercel deployment logs
2. Verify `vercel.json` is in root folder
3. Try manual redeploy
4. Clear browser cache (Ctrl + Shift + R)
