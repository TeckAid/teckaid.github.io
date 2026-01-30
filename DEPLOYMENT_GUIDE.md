# TeckAid AI Services Website - Deployment Guide

## Overview
This website has been successfully configured as an AI services business platform using the Hugoplate template. All requested features have been implemented and tested.

## ✅ Completed Features

### 1. AI Services Content
- Professional homepage highlighting AI transformation services
- About page focused on TeckAid's AI expertise
- SEO-optimized blog posts about AI and machine learning
- AI-focused feature sections and call-to-actions

### 2. Enhanced Contact Form
- Professional contact form with AI service selection
- Fields: Name, Email, Company, Service Type, Project Description
- Dual support: Netlify Forms + Formspree
- Ready for email forwarding to nasir@teckaid.com

### 3. AI Chatbot
- Custom-built JavaScript chatbot
- Comprehensive FAQ covering all AI services
- Keyword-based intelligent responses
- Beautiful gradient purple UI
- Fully responsive and mobile-friendly

### 4. SEO Optimization
- AI-specific keywords and metadata
- Optimized page titles and descriptions
- Social media sharing (OpenGraph, Twitter Cards)
- Proper meta tags for search engines

## 📧 Email Configuration Setup

### Option 1: Netlify Forms (Recommended for Netlify hosting)
1. Deploy site to Netlify
2. Go to Site Settings → Forms
3. Set up form notifications
4. Add email: nasir@teckaid.com
5. Save settings

The contact form already has `data-netlify="true"` attribute configured.

### Option 2: Formspree
1. Go to https://formspree.io/
2. Create free account
3. Create new form
4. Copy your form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Update `contact_form_action` in `config/_default/params.toml`:
   ```toml
   contact_form_action = "https://formspree.io/f/YOUR_FORM_ID"
   ```
6. In Formspree dashboard, configure email forwarding to nasir@teckaid.com

## 🚀 Deployment Instructions

### Prerequisites
- Hugo Extended v0.151.0 or higher
- Node.js v22+
- Git

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:1313
```

### Build for Production
```bash
# Build site
npm run build

# Output will be in /public directory
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
   - Environment variables: None required
4. Deploy!

### Deploy to Vercel
1. Push code to GitHub
2. Import repository to Vercel
3. Build settings will be auto-detected
4. Deploy!

### Deploy to Other Platforms
1. Run `npm run build`
2. Upload contents of `public/` folder to your hosting provider

## 🎨 Customization Guide

### Update Branding
1. Replace logo files in `/static/images/`:
   - `logo.png` - Light mode logo
   - `logo-darkmode.png` - Dark mode logo
   - `favicon.png` - Browser favicon

2. Update colors in `/data/theme.json` if needed

### Update Domain
Edit `/hugo.toml`:
```toml
baseURL = "https://yourdomain.com"
```

### Add Google Analytics
Edit `/config/_default/params.toml`:
```toml
google_tag_manager = "G-YOUR_GA_ID"
```

### Customize Chatbot
Edit `/static/js/chatbot.js` to:
- Add more FAQ responses
- Update contact email
- Modify greeting message

### Update Content
- Homepage: `/content/english/_index.md`
- About: `/content/english/about/_index.md`
- Blog posts: `/content/english/blog/`

## 📱 Features Overview

### Chatbot Capabilities
The AI chatbot answers questions about:
- AI services offered
- Pricing and consultation
- Process automation
- Machine learning
- NLP and computer vision
- Data analytics
- Industry applications
- Project timelines
- Contact information

### Contact Form Fields
- Full Name (required)
- Email Address (required)
- Company Name (optional)
- Service Selection (dropdown)
- Project Description (required)

### SEO Features
- AI-optimized meta descriptions
- Proper heading hierarchy
- Social media preview images
- Keyword-rich content
- Internal linking structure

## 🔧 Troubleshooting

### Build Errors
- Ensure Hugo Extended version is installed
- Run `npm install` to get all dependencies
- Clear cache: `rm -rf public resources`

### Chatbot Not Showing
- Check browser console for JavaScript errors
- Ensure `/static/js/chatbot.js` and `/static/css/chatbot.css` exist
- Verify `layouts/_partials/custom-script.html` is present

### Form Not Working
- Verify form action URL is correct
- Check Netlify/Formspree configuration
- Test with email field only first

## 📞 Support

For questions or issues:
- Email: nasir@teckaid.com
- Review this documentation
- Check Hugo documentation: https://gohugo.io/documentation/

## 🎉 You're Ready to Launch!

The website is fully configured and ready for deployment. Simply:
1. Choose your hosting platform
2. Configure email forwarding
3. Update domain in hugo.toml
4. Deploy!

Good luck with TeckAid! 🚀
