# Deployment Guide - certified IT Website

## 🚀 Quick Deploy to Vercel (Recommended)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: certified IT website"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

### 3. Environment Variables (Optional)

If you add external services (analytics, form endpoints), add them in Vercel:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-key
CONTACT_FORM_ENDPOINT=your-endpoint
```

## 🌐 Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain: `certified-it.de`
4. Update DNS records as instructed:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

## 📊 Performance Optimization Checklist

- [x] Images optimized (WebP/AVIF)
- [x] Lazy loading enabled
- [x] Minified CSS/JS
- [x] Gzip/Brotli compression
- [x] Critical CSS inlined
- [x] Font optimization (Google Fonts)
- [ ] Add real images (currently placeholders)
- [ ] Configure CDN for static assets
- [ ] Enable HTTP/2

## 🔍 SEO Post-Deployment

### 1. Google Search Console
- Verify ownership
- Submit sitemap: `https://certified-it.de/sitemap.xml`
- Monitor indexing status

### 2. Google Analytics
```tsx
// Add to app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

### 3. Update Meta Tags
- Replace placeholder OG image with real image
- Update Google verification code in `lib/seo.ts`
- Add real business coordinates in schema

## 📧 Contact Form Setup

### Option 1: Formspree
```tsx
// Update ContactSection.tsx
const handleSubmit = async (e) => {
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### Option 2: SendGrid API
```bash
npm install @sendgrid/mail
```

### Option 3: Netlify Forms
Add `data-netlify="true"` to form element

## 🔒 Security Enhancements

### 1. Add Security Headers

Create `next.config.js`:
```js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

### 2. Add reCAPTCHA v3
```bash
npm install react-google-recaptcha-v3
```

## 🧪 Testing Before Production

### Lighthouse Audit
```bash
npm run build
npm run start
# Then run Lighthouse in Chrome DevTools
```

### Accessibility Test
```bash
npm install -D @axe-core/cli
npx axe http://localhost:3000
```

### Cross-Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile: iOS Safari, Chrome Android

## 📱 Mobile Optimization

Verify on:
- iPhone SE (375px)
- iPhone 12/13 (390px)
- Pixel 5 (393px)
- iPad (768px)
- iPad Pro (1024px)

## 🔄 Continuous Deployment

Vercel automatically deploys:
- **Production**: `main` branch → certified-it.de
- **Preview**: Pull requests → unique URLs
- **Development**: `dev` branch → staging URL

## 📈 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables
4. Implement tracking code

### Microsoft Clarity (Optional)
Free heatmaps and session recordings

## 🎯 Post-Launch Checklist

- [ ] Test all links
- [ ] Verify contact form submission
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (aim for >90)
- [ ] Verify SEO meta tags (Twitter Card Validator, FB Debugger)
- [ ] Test phone numbers (click-to-call)
- [ ] Test email links
- [ ] Check loading speed (PageSpeed Insights)
- [ ] Verify SSL certificate
- [ ] Set up monitoring (UptimeRobot)
- [ ] Create sitemap
- [ ] Submit to search engines
- [ ] Add to Google My Business

## 🆘 Troubleshooting

### Build Errors
```bash
npm run build
# Check error messages
# Usually TypeScript or missing env vars
```

### Hydration Errors
- Check for mismatched server/client HTML
- Use `'use client'` directive where needed

### Performance Issues
- Optimize images (use next/image)
- Enable caching
- Use CDN

## 📞 Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issue in your repo

---

**Deployed successfully? 🎉**

Share your live URL: `https://certified-it.de`
