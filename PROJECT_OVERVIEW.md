# 🇵🇭 HAKA — Complete Project Overview

## Mission Statement
**Isipin. Tuklasin. Umangat.**  
*Ideas That Move People & Business*

A Filipino digital media and innovation brand connecting youth, entrepreneurs, professionals, and technology enthusiasts with cutting-edge content on AI, Technology, Business, and Modern Lifestyle.

---

## What You Have Now 📦

This is a complete **AI-powered content creation system** for HAKA with:

### 1. Brand Identity System
- ✅ Complete brand guide (voice, tone, philosophy)
- ✅ Content distribution strategy (4 pillars: Tech 30%, AI 30%, Business 25%, Youth 15%)
- ✅ Growth roadmap (4 phases from awareness to business ventures)
- ✅ Taglish copywriting guidelines

### 2. AI Agent System (`agents/content_creator/`)
- ✅ **HAKAAgent** — Main content planning and generation engine
- ✅ Smart content suggestion based on editorial mix
- ✅ Taglish hook generator
- ✅ Multi-platform post creation (YouTube, TikTok, Instagram, LinkedIn, Facebook)

### 3. Content Library (`content/`)
- ✅ First 12 content ideas with detailed breakdowns
- ✅ Monthly calendar template
- ✅ Social media scheduler for publishing management

### 4. Configuration System (`configs/`)
- ✅ Brand configuration JSON (audiences, pillars, phases)
- ✅ AI prompts system (content planner templates)
- ✅ Platform-specific settings

### 5. Documentation (`docs/`)
- ✅ Social media guide (all platforms)
- ✅ Brand assets spec (logo, colors, typography specs)

---

## How to Use the System 🚀

### Quick Commands

```bash
# Navigate to project directory
cd haka

# Run HAKA agent for content suggestions
python3 agents/content_creator/haka_agent.py

# Or use the shell script
./run.sh suggest    # Get next content idea
./run.sh plan       # Generate monthly content plan
./run.sh status     # Show brand status
./run.sh help       # See all commands
```

### Content Creation Workflow

#### 1. Get Content Idea
```bash
python3 agents/content_creator/haka_agent.py
# OR
./run.sh suggest
```

Output:
```
Category: AI
Topic: 7 Free AI Tools for Students
Hook: 🤖 Ano ba talaga ang pwedeng gawin ng AI para sa work mo?
```

#### 2. Create Content Script (using agent)
Open the prompts file and use templates, or integrate with your own LLM API.

#### 3. Schedule Posts
Use `social_scheduler.py` to queue content across platforms.

#### 4. Publish & Monitor
Follow social media guide for platform-specific best practices.

---

## Editorial Mix (Content Distribution)

```
┌─────────────────────────────────────────┐
│              TECHNOLOGY                  │ 30%
│    Digital tools · Gadgets · Innovation   │
│    Platforms: YouTube, TikTok            │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│           ARTIFICIAL INTELLIGENCE        │ 30%
│    AI Tools · Use Cases · Ethics         │
│    Platforms: All (focus on YouTube)     │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│              BUSINESS                    │ 25%
│   Startup tips · Digital transformation   │
│    Platforms: LinkedIn, Facebook         │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│         YOUTH & DIGITAL LIFESTYLE        │ 15%
│    Skills · Culture · Trends             │
│    Platforms: TikTok, Instagram          │
└─────────────────────────────────────────┘
```

---

## Growth Roadmap

### Phase 1 — Build Awareness ✅ (Current)
- **Duration:** Now → Q2 2026
- **Focus:** Educational & entertaining content, curiosity-driven topics
- **Next Milestone:** Official HAKA logo, brand colors, typography

### Phase 2 — Build Authority 🎯 (Q3-Q4 2026)
- **Focus:** Trusted Filipino source, expert collaborations, case studies
- **Metrics:** Backlinks, partnerships, authority scores

### Phase 3 — Build Community 👥 (Q1+ 2027)
- **Focus:** Attract students & professionals, engagement-driven content
- **Metrics:** Community size, active members, user-generated content

### Phase 4 — Business Ventures 💼 (Q2+ 2027)
- **Focus:** Brand partnerships, educational products, sponsorships
- **Metrics:** Revenue streams, ROI, market share

---

## Content Pillars Explained

### TECHNOLOGY (30%)
**Topics:** Digital tools, gadgets, innovation, emerging trends  
**Audience:** Youth, Business, Tech enthusiasts  
**Goal:** Make complex tech accessible and exciting

**Example Topics:**
- "7 Gadgets under ₱15k for Students"
- "Technology trends to watch in 2026"
- "How tech changes everyday life in Philippines"

---

### ARTIFICIAL INTELLIGENCE (30%)
**Topics:** AI tools, use cases, automation, ethics  
**Audience:** All levels (beginners → practitioners)  
**Goal:** Demystify AI and show practical applications

**Example Topics:**
- "Free AI tools for school projects"
- "The truth about AI replacing jobs"
- "How AI agents improve productivity"

---

### BUSINESS (25%)
**Topics:** Startup tips, digital transformation, growth strategies  
**Audience:** Entrepreneurs, SMEs, business leaders  
**Goal:** Actionable business insights for Filipino context

**Example Topics:**
- "5 Business loan tips for Filipino entrepreneurs"
- "How SMEs can use technology with ₱10k budget"
- "Why businesses need automation now"

---

### YOUTH & DIGITAL LIFESTYLE (15%)
**Topics:** Skills, culture, trends, future careers  
**Audience:** Gen Z, students, young professionals  
**Goal:** Prepare youth for future opportunities

**Example Topics:**
- "Skills every Filipino student should learn"
- "Top careers by 2030—hindi lang programming!"
- "Digital skills beyond your diploma"

---

## File Structure Reference

```
haka/
├── README.md                          # Quick start guide
├── PROJECT_OVERVIEW.md                # This file
├── brand_guide.md                     # Brand philosophy & guidelines
├── requirements.txt                   # Python dependencies
├── run.sh                             # Command-line launcher
│
├── agents/                            # AI agent system
│   └── content_creator/               # Content creation scripts
│       ├── haka_agent.py              # Main agent engine ✅
│       └── ...                        # More tools to add
│
├── content/                           # Content library
│   ├── first_12_content_ideas.md      # Initial 12 ideas ✅
│   ├── monthly_calendar_template.md   # Planning template ✅
│   └── social_scheduler.py            # Publishing tool ✅
│
├── configs/                           # Configuration files
│   ├── haka_agent_config.json         # Brand settings ✅
│   └── prompts/                       # AI prompt templates
│       └── content_planner_system.md  # Prompt system ✅
│
├── docs/                              # Documentation
│   └── social_media_guide.md          # Platform strategies ✅
│
└── brand_assets/                      # Brand identity (to create)
    └── logo_spec.md                    # Design specs ✅
```

---

## Next Steps: Brand Identity 🎨

### Priority 1: Logo Design
- Modern, clean design for tech brand
- Works in dark/light backgrounds
- Scalable vector format
- Filipino cultural elements (subtle)

### Priority 2: Color Palette
- Primary brand colors
- Neutral backgrounds/text
- Status/action colors

### Priority 3: Typography
- Modern sans-serif font family
- Good Latin + Filipino script support
- Clear hierarchy (display, body, caption)

### Priority 4: Social Media Kit
- Profile images for all platforms
- Story templates
- Thumbnail designs

---

## Brand Philosophy

> "HAKA is not just about what's trending. It's about understanding what's changing and discovering what comes next."

**Communication Style:**
- ✅ Natural Taglish (not formal)
- ✅ Simple explanations of complex topics
- ✅ Practical value over theory
- ✅ Curiosity-driven content
- ✅ Authentic Filipino voice

---

## Key Features Summary

### 🎯 Smart Content Planning
- Editorial mix enforcement (30/30/25/15)
- Phase-aware suggestions
- Audience-specific hooks

### 🇵🇭 Taglish Copywriting
- Natural flow, not robotic
- Platform-appropriate tone
- Strong hooks in first 3 seconds

### 📱 Multi-Platform Ready
- YouTube (long-form hub)
- TikTok (viral reach)
- Instagram (visual storytelling)
- LinkedIn (professional)
- Facebook (community)

### 📈 Growth-Oriented
- Clear roadmap (4 phases)
- Measurable metrics per phase
- Community building focus

---

## Tools Included

1. **HAKAAgent** (`haka_agent.py`)
   - Content suggestion engine
   - Taglish hook generator
   - Social post creator
   - Monthly planner

2. **Social Scheduler** (`social_scheduler.py`)
   - Post creation & scheduling
   - Platform-specific formatting
   - Status tracking (draft/scheduled/published)

3. **Shell Launcher** (`run.sh`)
   - Quick commands for daily use
   - Suggest, plan, status, config

---

## Getting Started in 3 Steps

### Step 1: Install Python (if needed)
```bash
pip install requests  # Optional, for API integrations later
```

### Step 2: Run HAKA Agent
```bash
cd haka
python3 agents/content_creator/haka_agent.py
# OR
./run.sh suggest
```

### Step 3: Start Creating!
- Get content ideas
- Create scripts (use prompt templates)
- Schedule in social scheduler
- Publish and engage

---

## Contact & Support

For questions about the system:
- Check `README.md` for quick start
- Review `brand_guide.md` for brand voice
- See `social_media_guide.md` for platform specifics
- Read `docs/` folder for additional docs

---

**© 2026 HAKA. All rights reserved.** 🇵🇭  
*Ideas That Move People & Business*
