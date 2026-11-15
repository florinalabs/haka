# 🇵🇭 HAKA — Complete Digital Ecosystem Setup

## Mission
Build a scalable content creation infrastructure for HAKA with:
- ✅ GitHub repository for content tracking & version control
- ✅ Next.js website (SEO-optimized) deployed on Vercel
- ✅ n8n automation workflows (Podman-based) for social media posting

---

## 📁 Repository Structure Setup

### Quick Start Command

```bash
# Create the complete HAKA repository structure
cd /Users/jo-seph/Desktop/project-x/haka/repo_structure
mkdir -p content/{ai,tech,business,youth}
mkdir -p website/{nextjs-app,n8n-workflows,seo-assets}
mkdir -p automation/{n8n-configs,workflows,schedules}
echo "✅ Repository structure created!"
```

---

## 1. 📦 GitHub Repository Structure

### Purpose
Track all content versions, scripts, schedules, and collaborations.

### Recommended Structure

```
haka-repo/
├── .github/
│   ├── workflows/
│   │   ├── deploy-website.yml        # Auto-deploy to Vercel
│   │   ├── schedule-posts.yml         # n8n automation triggers
│   │   └── seo-audit.yml              # Automated SEO checks
│   ├── templates/
│   │   ├── content.md                # Content template
│   │   └── release-notes.md          # Release notes template
│   └── issues/
│       └── labels.yaml               # Issue labels (content, bug, feature)
│
├── docs/
│   ├── README.md                     # Project documentation
│   ├── brand-guide.md                # Brand voice & guidelines
│   ├── content-strategy.md           # Editorial calendar approach
│   └── seo-strategy.md               # SEO optimization guide
│
├── content/                          # ✅ Main content storage
│   ├── ai/                           # AI-related content scripts
│   ├── tech/                        # Technology content scripts
│   ├── business/                    # Business/SME content scripts
│   └── youth/                       # Youth & lifestyle content scripts
│       └── drafts/                  # WIP content pieces
│
├── website/                          # Next.js project files
│   ├── nextjs-app/                  # Main application code
│   │   ├── app/                     # Next.js App Router pages
│   │   ├── components/              # React components
│   │   ├── lib/                     # Utilities & API functions
│   │   ├── public/                  # Static assets (logo, images)
│   │   └── styles/                  # Tailwind customizations
│   ├── tailwind.config.js           # Tailwind configuration
│   └── package.json                 # Dependencies
│
├── automation/                       # n8n automation configs
│   ├── workflows/                   # Workflow JSON files
│   │   ├── post-to-tiktok.yaml     # TikTok posting workflow
│   │   ├── cross-post-content.yaml # Multi-platform sync
│   │   └── engagement-bot.yaml      # Comment monitoring
│   ├── schedules/                   # Scheduling configs
│   │   └── weekly-schedule.json    # Weekly posting schedule
│   └── n8n-configs/                 # n8n settings & credentials
│       └── .env.example            # Environment variables template
│
├── scripts/                          # Utility scripts
│   ├── content-generate.py          # Content generation helper
│   ├── seo-optimize.js              # SEO meta data generator
│   └── schedule-posts.sh            # Batch scheduling script
│
└── tools/                            # Integration tools
    ├── n8n-webhook-handler/         # Webhook processing scripts
    └── vercel-deploy-helper/        # Vercel deployment scripts
```

---

## 2. 🌐 Next.js Website (Vercel Deployment)

### Purpose
SEO-optimized content hub for YouTube, TikTok, Instagram channels.

### Key Features
- ✅ SEO-optimized meta tags + Open Graph tags
- ✅ Video embed support with timestamps
- ✅ Content categorization (AI/Tech/Business/Youth)
- ✅ Newsletter signup integration
- ✅ Fast load times (Vercel edge caching)
- ✅ Mobile-first responsive design

### Suggested Site Structure

```
www.haka.ph /
├── /                             # Home page with featured content
│   ├── Latest Videos            # Most recent uploads
│   ├── Trending Topics          # Popular content pieces
│   └── Newsletter               # Email subscription section
│
├── /categories/
│   ├── ai/                      # AI tools & tutorials
│   ├── technology/              # Tech trends & reviews
│   ├── business/                # Business tips for SMEs
│   └── youth/                   # Youth empowerment content
│
├── /about/                      # HAKA mission & team
├── /contact/                    # Contact form + social links
└── /resources/                  # Downloadable resources, checklists

SEO Components:
├── Dynamic sitemap.xml          # Auto-generate for all content
├── robots.txt                   # Search engine access rules
├── Open Graph images            # Social sharing previews
└── Schema.org structured data   # VideoObject, Article, etc.
```

### Vercel Deployment Setup

1. **Initialize Next.js:**
   ```bash
   npm create next-app@latest website/nextjs-app --yes
   cd website/nextjs-app
   ```

2. **Install SEO dependencies:**
   ```bash
   npm install next-seo sitemap lucide-react
   ```

3. **Configure Vercel:**
   - Connect GitHub repo
   - Root directory: `website/nextjs-app`
   - Build command: `npm run build`
   - Output directory: `.next`

4. **Environment Variables (vercel.json):**
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {"key": "X-Frame-Options", "value": "SAMEORIGIN"},
           {"key": "X-Content-Type-Options", "value": "nosniff"}
         ]
       }
     ],
     "env": {
       "NEXT_PUBLIC_GITHUB_URL": "https://github.com/haka-repo",
       "NEXT_PUBLIC_YOUTUBE_CHANNEL": "UCxD-xfWenPMwlbgFrrFmJkA",
       "NEXT_PUBLIC_FACEBOOK_ID": "61596243012781"
     }
   }
   ```

---

## 3. 🤖 n8n Automation Workflows (Podman)

### Purpose
Automate social media posting, cross-platform syncing, engagement tracking.

### Workflow Ideas

#### A. YouTube → TikTok Auto-Posting
```
Trigger: New YouTube video uploaded
↓
Extract thumbnail + transcript
↓
Generate short-form hook (AI)
↓
Crop to 9:16 for vertical video
↓
Post to TikTok within 1 hour
↓
Tag @hakaphai in caption
```

#### B. Cross-Platform Content Sync
```
Trigger: Content published on any platform
↓
Extract metadata (title, description, timestamp)
↓
Generate platform-specific captions:
  • YouTube → Long-form with links
  • TikTok → Short hook + trending audio
  • Instagram → Carousel story highlights
  • LinkedIn → Professional insights
↓
Post to all platforms simultaneously
```

#### C. Weekly Content Scheduler
```
Trigger: Every Friday at 2 PM PH time
↓
Pull content queue from database/CSV
↓
Schedule posts for:
  • Monday AM → Tech tools
  • Wednesday PM → Business tips
  • Friday evening → Community Q&A
↓
Send notification to team via Slack/Discord
```

#### D. Engagement Bot (Optional)
```
Trigger: Every 30 minutes
↓
Check recent comments on posts
↓
Reply with friendly Taglish responses
↓
Pin top questions for community visibility
↓
Flag negative feedback for review
```

### n8n Installation with Podman

```bash
# Pull n8n image
podman pull n8nio/n8n

# Run with persistent data
podman run -d \
  --name haka-n8n \
  -p 5678:5678 \
  -v $(pwd)/automation/n8n-data:/home/node/.n8n-data:z \
  -e N8N_HOST=your-domain.com \
  -e N8N_PROTOCOL=https \
  n8nio/n8n

# Access: https://your-server:5678
```

### Sample Workflow JSON (TikTok Auto-Posting)

Save as `automation/workflows/post-to-tiktok.yaml`:

```yaml
workflow_id: post-to-tiktok
trigger:
  type: webhook
  endpoint: /webhooks/tiktok-post
steps:
  - node_type: ai-generator
    operation: generate-short-form-caption
    input: youtube_video_url
    output: tiktok_caption
    
  - node_type: media-processor
    operation: crop_to_9x16
    input: video_thumbnail_url
    output: tiktok_cover_image
    
  - node_type: scheduler
    operation: post_to_tiktok_api
    config:
      username: hakaphai
      caption_template: "🇵🇭 {{tiktok_caption}}\n\n#HAKA #TechPH"
      schedule: immediate
```

---

## 🎯 Content Tracking System

### Issue Templates for GitHub

#### Template 1: New Video Script
```markdown
**Type:** Content Creation  
**Priority:** Medium  
**Category:** AI/Technology/Business/Youth  

### Details
- Topic: {{TOPIC}}
- Target Audience: {{AUDIENCE}}
- Platform Focus: {{PRIMARY PLATFORM}}

### Deliverables Needed
- [ ] Video script (Taglish)
- [ ] Thumbnail design brief
- [ ] Social media captions
- [ ] SEO meta description

### Related GitHub Items
- Issue #{{NUMBER}} for related content idea
```

#### Template 2: SEO Optimization Request
```markdown
**Type:** Technical Task  
**Priority:** High  
**Category:** SEO  

### Details
- Page URL: {{PAGE_URL}}
- Target Keywords: {{KEYWORDS}}
- Search Intent: {{INFORMATIONAL/COMMERICAL/NAVIGATIONAL}}

### Required Changes
- [ ] Meta title (under 60 chars)
- [ ] Meta description (150-160 chars)
- [ ] H1 heading optimized
- [ ] Alt text for images
- [ ] Internal linking opportunities

### Expected Impact
Target: {{SEARCH INTENT}} traffic increase of __% in 3 months.
```

#### Template 3: Cross-Platform Publishing
```markdown
**Type:** Automation Task  
**Priority:** Medium  
**Category: n8n Workflow  

### Details
- Source Platform: YouTube/TikTok/Instagram/etc.
- Target Platforms: All social channels
- Content ID: {{CONTENT_ID}}

### Required Setup
- [ ] Webhook endpoint created
- [ ] API credentials configured
- [ ] Test run completed
- [ ] Error handling tested
```

---

## 📊 Workflow Integration Map

```
┌─────────────────┐
│   Content Idea  │
└──────┬──────────┘
       ↓
┌─────────────────┐
│ haka_agent.py   │ → Generates script + hooks
└──────┬──────────┘
       ↓
┌─────────────────┐
│ GitHub Issue    │ → Task tracking
└──────┬──────────┘
       ↓
┌─────────────────┐
│ Content Creator │ → Creates final content
└──────┬──────────┘
       ↓
┌─────────────────┐
│ n8n Workflow     │ → Cross-posts to all platforms
└──────┬──────────┘
       ↓
┌─────────────────┐
│ Vercel Website   │ → SEO-optimized hub
└──────┬──────────┘
       ↓
┌─────────────────┐
│ Analytics        │ → Track performance
└─────────────────┘
```

---

## 🔐 Security & Best Practices

### GitHub Repository Settings
- ✅ Enable Branch Protection (main branch)
- ✅ Require PR reviews before merge
- ✅ Add CODEOWNERS file
- ✅ Set up Dependabot for dependency updates

### n8n Security
- ✅ Never commit API keys to repo
- ✅ Use `.env` files with `.gitignore`
- ✅ Enable 2FA on all accounts
- ✅ Rate limit webhook endpoints

### Vercel Security
- ✅ Set Content-Security-Policy headers
- ✅ Enable HTTPS everywhere
- ✅ Configure CSP for subresource integrity

---

## 📅 Migration Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Create GitHub repo with structure
- [ ] Set up n8n with basic workflows
- [ ] Initialize Next.js website project
- [ ] Deploy initial site to Vercel

### Phase 2: Content Integration (Week 2-3)
- [ ] Migrate existing content to new system
- [ ] Set up issue templates
- [ ] Configure SEO metadata for all pages
- [ ] Test cross-platform posting workflows

### Phase 3: Automation (Week 4+)
- [ ] Full n8n workflow automation
- [ ] Weekly scheduling enabled
- [ ] Analytics integration
- [ ] Performance optimization

---

## 🚀 Next Steps

1. **Create GitHub Repository** with this structure
2. **Initialize Next.js Project** on Vercel
3. **Install Podman & Set Up n8n** on your server/VPS
4. **Configure Webhooks** for social platforms
5. **Test End-to-End Flow** from content idea → publish

Would you like me to:
1. Generate the complete GitHub repository initialization scripts?
2. Create the Next.js website starter code with SEO setup?
3. Build detailed n8n workflow JSON files for each automation?

Let me know which would be most helpful! 🎯
