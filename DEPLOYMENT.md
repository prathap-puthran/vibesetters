# Deployment Guide - Vibesetters Website

This guide provides step-by-step instructions for deploying the Vibesetters website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd vibesetters
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Choose team/account
   - Confirm deployment settings

### Option 2: Deploy via GitHub Integration

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy automatically**
   - Every push to main branch triggers deployment
   - Preview deployments for pull requests

## 🌐 Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy options**
   - **Drag & Drop**: Drag the `out` folder to Netlify
   - **Git Integration**: Connect GitHub repository
   - **CLI**: Use Netlify CLI

3. **Build settings (if using Git)**
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

## ☁️ Deploy to AWS Amplify

1. **Connect repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your Git provider

2. **Build settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

## 🖥️ Traditional Hosting

1. **Build for production**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload files**
   - Upload contents of `out` folder to your web server
   - Ensure `.htaccess` (Apache) or `nginx.conf` (Nginx) is configured

3. **Server configuration**
   - Enable gzip compression
   - Set cache headers for static assets
   - Configure URL rewriting for SPA routing

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@vibesetters.in
NEXT_PUBLIC_PHONE_NUMBER=+919480244135
```

## 📱 Performance Optimization

### Before Deployment

1. **Optimize images**
   - Use Next.js Image component
   - Compress images with tools like TinyPNG
   - Consider using WebP format

2. **Enable compression**
   - Gzip compression on server
   - Brotli compression (if supported)

3. **Set cache headers**
   ```nginx
   # Nginx example
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

### After Deployment

1. **Test performance**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Test on mobile devices

2. **Monitor analytics**
   - Set up Google Analytics
   - Monitor user behavior
   - Track conversion rates

## 🔒 Security Considerations

1. **HTTPS only**
   - Force HTTPS redirects
   - Use HSTS headers

2. **Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
   ```

3. **Security headers**
   ```nginx
   # Nginx security headers
   add_header X-Frame-Options "SAMEORIGIN" always;
   add_header X-Content-Type-Options "nosniff" always;
   add_header X-XSS-Protection "1; mode=block" always;
   ```

## 📊 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Forms are working
- [ ] Images and assets load
- [ ] Mobile responsiveness
- [ ] Performance is acceptable
- [ ] SEO meta tags are present
- [ ] Analytics is tracking
- [ ] SSL certificate is active
- [ ] Backup strategy is in place

## 🆘 Troubleshooting

### Common Issues

1. **Build fails**
   - Check Node.js version (requires 18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Images not loading**
   - Verify image paths
   - Check Next.js Image configuration
   - Ensure proper domain configuration

3. **Routing issues**
   - Configure server for SPA routing
   - Check Next.js export settings
   - Verify .htaccess/nginx configuration

### Getting Help

- Check Next.js documentation
- Review deployment platform docs
- Check browser console for errors
- Test in different browsers/devices

## 🎯 Next Steps

After successful deployment:

1. **Set up custom domain**
2. **Configure email services**
3. **Set up monitoring and analytics**
4. **Plan content updates**
5. **Consider CDN for global performance**

---

**Happy Deploying! 🚀**

For more help, check the main [README.md](README.md) file. 