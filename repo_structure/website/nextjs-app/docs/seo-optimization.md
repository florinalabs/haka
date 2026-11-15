# 🎯 HAKA Website SEO Optimization Guide

## Purpose
This document outlines all SEO strategies implemented for the HAKA Next.js website to drive organic traffic from YouTube, TikTok, and other platforms.

---

## 1. Technical SEO (Already Implemented) ✅

### A. Meta Tags & Open Graph
```javascript
// In next.config.js and app/page.tsx
metadata = {
  title: "HAKA — Isipin. Tuklasin. Umangat.",
  description: "Ideas That Move People & Business 🇵🇭",
  openGraph: {
    type: "website",
    locale: "en_PH",
  },
}
```

### B. Sitemap Generation
```javascript
// Install dependency
npm install sitemap

// Configure in next.config.js
export default async function sitemaps() {
  const sitemap = await generateSitemap();
  return new Response(sitemap, {
    headers: { 'Content-Type': 'text/xml' },
  });
}
```

### C. Robots.txt
```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Sitemap: https://your-domain.com/sitemap.xml
```

---

## 2. Content SEO Strategy 📝

### A. Dynamic Meta Tags per Category
```javascript
// Example for AI category page
export const metadata = {
  title: 'Artificial Intelligence Tools & Tutorials - HAKA',
  description: 'Learn about free AI tools, automation, and practical applications for students and professionals in the Philippines.',
  keywords: 'AI tools Philippines, artificial intelligence tutorials, tech tips PH, AI automation',
};
```

### B. Video Schema Markup
```javascript
// For each video page
export const metadata = {
  structuredData: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "7 Free AI Tools for Students",
    "description": "Comprehensive guide to the best free AI tools for academic and professional use in Philippines.",
    "thumbnailUrl": "https://example.com/thumbnail.jpg",
    "duration": "PT8M42S",
    "uploadDate": "2026-01-15",
    "publisher": {
      "@type": "Organization",
      "name": "HAKA"
    }
  })
};
```

### C. Keyword Research Targets
| Category | Primary Keywords | Secondary Keywords |
|----------|-----------------|-------------------|
| AI | AI tools Philippines, artificial intelligence PH | AI for students, free AI tools |
| Technology | Gadgets under 15k, tech trends 2026 PH | Budget laptop Philippines, best tech deals |
| Business | SME digital transformation PH | Small business automation, startup tips |
| Youth | Future careers 2030 Philippines | Digital skills for students |

---

## 3. On-Page SEO Checklist ✅

### For Each Page:
- [ ] Unique meta title (under 60 chars)
- [ ] Compelling meta description (150-160 chars)
- [ ] H1 heading with primary keyword
- [ ] Alt text for all images
- [ ] Internal linking to related content
- [ ] Proper breadcrumb navigation
- [ ] Mobile-first responsive design
- [ ] Fast load times (< 3 seconds)

### For Video Pages:
- [ ] Video transcript embedded (text content)
- [ ] Timestamp links in description
- [ ] Related video suggestions
- [ ] Social sharing buttons with OG tags
- [ ] Comment section enabled for engagement

---

## 4. Performance Optimization ⚡

### A. Image Optimization
```javascript
// Using Next.js Image component (automatic)
import Image from 'next/image';

<Image 
  src="/thumbnails/ai-tools.jpg"
  alt="AI tools thumbnail showing interface preview"
  width={1200}
  height={675}
  quality={75}
  loading="lazy"
/>
```

### B. Font Loading
```javascript
// In globals.css
.font-primary {
  font-display: swap;
}
```

### C. Code Splitting
- ✅ Dynamic imports for heavy components
- ✅ Lazy loading of video players
- ✅ Route-based code splitting enabled in Next.js

---

## 5. Content Strategy for Traffic Growth 📈

### A. Video-to-Web Funnel
1. **YouTube Upload** → Thumbnail with call-to-action to website
2. **Website Page Loads** → Detailed breakdown + transcript
3. **Engagement** → Comments, newsletter signup, social shares
4. **Retention** → Related content links keep visitors on site

### B. Blog Content Plan
```markdown
- Week 1: "7 Free AI Tools Every Filipino Student Needs (2026)"
- Week 2: "How to Digitalize Your Business with ₱10k Budget"
- Week 3: "Top Gadgets Under ₱15k That Are Actually Worth It"
- Week 4: "Future Careers in Philippines by 2030: What You Need to Know"
```

### C. Evergreen Content Categories
- AI Tool Reviews (monthly updates)
- Budget Tech Guides (price changes)
- Career Advice (evergreen)
- Business Case Studies (industry-specific)

---

## 6. Analytics & Tracking 📊

### A. Google Analytics 4 Setup
```javascript
// Next.js App Router
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function Analytics() {
  useEffect(() => {
    // Initialize GA4 here
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args) => window.dataLayer.push(args);
  }, []);

  return <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />;
}
```

### B. Key Metrics to Track
- **Organic Traffic** (Search Console)
- **Bounce Rate** per category
- **Average Session Duration**
- **Conversion Rate** (newsletter signups)
- **Traffic Sources** (YouTube, TikTok, direct, search)

---

## 7. Social Media Integration 🔄

### A. Cross-Posting Strategy
```
YouTube Video Upload
    ↓
Website Embeds Auto-Publish
    ↓
TikTok/Instagram Share Links
    ↓
SEO Benefits (Backlinks, Traffic)
```

### B. URL Structure for Sharing
```
Primary: https://haka.ph/videos/ai-tools-tutorial
        ↓
Social Shortener: haka.ph/v/ai-tools
        ↓
Twitter/X Link: https://t.co/xyz123
```

---

## 8. Local SEO (Philippines Focus) 🇵🇭

### A. Google Business Profile
- ✅ Claim your business listing
- ✅ Add location (Manila-based)
- ✅ Post weekly updates with videos

### B. Local Keywords
Include Philippines-specific terms:
- "AI tools in Philippines"
- "Best tech deals PH 2026"
- "SME business tips Manila"
- "Digital skills Philippines"

### C. Filipino Content Signals
- Taglish language (natural flow)
- Filipino examples and use cases
- Local references and context
- Philippine currency (₱) in pricing

---

## 9. SEO Maintenance Schedule 🔄

### Weekly:
- [ ] Check new video rankings
- [ ] Update broken links
- [ ] Add transcript to uploaded videos

### Monthly:
- [ ] Audit meta tags for all pages
- [ ] Refresh old content with new data
- [ ] Submit sitemap to Search Console
- [ ] Analyze keyword performance

### Quarterly:
- [ ] Competitor analysis
- [ ] Backlink building outreach
- [ ] Content gap analysis
- [ ] Technology stack audit

---

## 10. Next Steps for Implementation 🔨

1. **Install SEO dependencies:**
   ```bash
   npm install next-seo sitemap remark remark-html
   ```

2. **Create dynamic sitemap endpoint:**
   ```javascript
   app/sitemap.tsx
   export default async function Sitemap() {
     // Generate XML sitemap with all URLs
   }
   ```

3. **Add schema.org markup to all video pages**

4. **Set up Google Search Console & Analytics**

5. **Create category-specific landing pages**

6. **Implement internal linking strategy**

---

## Quick Reference: SEO Meta Tag Generator

```javascript
// Use this function for new pages
export function generateMetaTags(category: string, title: string): Metadata {
  return {
    title: `${title} — HAKA`,
    description: `Learn about ${category} with practical tips and insights. Join our community of Filipino innovators.`,
    keywords: `${category}, technology, innovation, Philippines, PH`,
    openGraph: {
      title: `${title} — HAKA`,
      description: `Practical ${category} content for Filipinos.`,
      type: 'website',
      url: `https://haka.ph/videos/${encodeURIComponent(title)}`,
      locale: 'en_PH',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — HAKA`,
      description: `Practical ${category} content.`,
    }
  };
}
```

---

**For Questions:** Check `/docs/` folder for additional documentation or create an issue on GitHub.
