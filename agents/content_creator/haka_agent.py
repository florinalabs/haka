#!/usr/bin/env python3
"""
HAKA AI Agent — Content Creator System 🇵🇭
==============================================
Isipin. Tuklasin. Umangat.

Ideas That Move People & Business.
"""

import json
import os
import datetime
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict


@dataclass
class ContentIdea:
    """Represents a single content idea."""
    id: int
    category: str  # AI, Tech, Business, Youth
    topic: str
    focus_area: str
    key_angle: str
    target_audience: List[str]
    platform: str
    hook: str


@dataclass
class ContentPlan:
    """Represents a content plan with multiple ideas."""
    phase: str
    month: int
    ideas: List[ContentIdea]
    
    def to_dict(self) -> dict:
        return {
            "phase": self.phase,
            "month": self.month,
            "ideas": [asdict(idea) for idea in self.ideas]
        }


class HAKAAgent:
    """
    Main AI Agent for HAKA content creation.
    
    This agent handles:
    - Content planning based on editorial mix
    - Taglish copywriting
    - Social media scheduling
    - Performance tracking
    """
    
    def __init__(self):
        self.config = self._load_config()
        self.content_ideas = self._load_content_ideas()
        self.current_phase = self.config.get("current_phase", "phase_1")
        
    def _load_config(self) -> dict:
        """Load brand configuration from JSON."""
        config_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "configs",
            "haka_agent_config.json"
        )
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            # Return default config if file doesn't exist
            return {
                "brand": {"name": "HAKA"},
                "content_pillars": {},
                "growth_phases": {}
            }
    
    def _load_content_ideas(self) -> List[Dict]:
        """Load content ideas from markdown file."""
        ideas_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "content",
            "first_12_content_ideas.md"
        )
        try:
            with open(ideas_path, 'r', encoding='utf-8') as f:
                return self._parse_content_ideas(f.read())
        except FileNotFoundError:
            return []
    
    def _parse_content_ideas(self, content: str) -> List[Dict]:
        """Parse markdown content to extract ideas."""
        ideas = []
        lines = content.split('\n')
        
        current_idea = None
        for line in lines:
            if "| #" in line and "Content" in line:
                # New idea row
                parts = [p.strip() for p in line.split("|") if p.strip()]
                if len(parts) >= 5:
                    try:
                        current_idea = {
                            "id": int(parts[0].split(" ")[-1]),
                            "category": parts[2],
                            "topic": parts[3].replace("*", ""),
                            "focus_area": parts[4].replace("*", ""),
                            "key_angle": parts[5].replace("*", "") if len(parts) > 5 else ""
                        }
                    except (ValueError, IndexError):
                        pass
            elif current_idea and line.strip() and not line.strip().startswith('#'):
                # Additional info for current idea
                if line.strip().strip(',') in ['Hook:', 'Key Points:']:
                    continue
        
        return ideas[:12]  # Return first 12 ideas
    
    def get_content_distribution(self) -> Dict[str, float]:
        """Get the content distribution percentages."""
        pillars = self.config.get("content_pillars", {})
        return {
            category: weight for category, weight in pillars.items()
        }
    
    def suggest_next_content(self, current_date: datetime.date = None) -> ContentIdea:
        """
        Suggest the next content based on editorial mix and phase.
        
        Phase 1 (Awareness): Focus on curiosity-driven topics
        Phase 2 (Authority): Add expert collaborations and case studies
        
        Args:
            current_date: Current date for scheduling
            
        Returns:
            ContentIdea: Next suggested content
        """
        if not current_date:
            current_date = datetime.date.today()
        
        # Get distribution weights
        dist = self.get_content_distribution()
        
        # Determine weightings based on phase
        if self.current_phase == "phase_1":
            # Mix of all topics, more youth/tech
            weights = {
                "AI": dist.get("artificial_intelligence", 0.3) + 0.05,
                "Tech": dist.get("technology", 0.3) - 0.05,
                "Business": dist.get("business", 0.25),
                "Youth": dist.get("youth_lifestyle", 0.15) + 0.05
            }
        else:
            # Balanced according to pillars
            weights = {
                "AI": dist.get("artificial_intelligence", 0.3),
                "Tech": dist.get("technology", 0.3),
                "Business": dist.get("business", 0.25),
                "Youth": dist.get("youth_lifestyle", 0.15)
            }
        
        # Normalize weights to sum to 1
        total = sum(weights.values())
        weights = {k: v/total for k, v in weights.items()}
        
        # Select a category based on weights (simplified - random with bias)
        import random
        categories = list(weights.keys())
        weights_list = [weights[c] for c in categories]
        selected_category = random.choices(categories, weights=weights_list)[0]
        
        # Map internal category to content ideas
        category_mapping = {
            "AI": ["1", "2", "9"],
            "Tech": ["3", "4", "10"],
            "Business": ["5", "6", "11"],
            "Youth": ["7", "8", "12"]
        }
        
        idea_ids = category_mapping.get(selected_category, [1])
        
        # Get next available idea from pool
        available_ideas = []
        for idea in self.content_ideas:
            if str(idea['id']) in idea_ids and str(idea['id']) not in [str(i['id']) for i in available_ideas]:
                available_ideas.append(idea)
        
        if available_ideas:
            return available_ideas[0]
        else:
            # Fallback to first AI idea (most popular)
            for idea in self.content_ideas:
                if idea['category'] == 'AI':
                    return idea
            
            # Last resort: create a generic idea
            return ContentIdea(
                id=len(self.content_ideas) + 1,
                category="AI",
                topic="AI Tool Spotlight: New Feature Review",
                focus_area="Tools & Productivity",
                key_angle="Latest AI tool updates and use cases",
                target_audience=["youth", "business"],
                platform="YouTube"
            )
    
    def generate_taglish_hook(self, topic: str, audience: str) -> str:
        """
        Generate a catchy Taglish hook for content.
        
        Examples:
        - "Ano ang mga AI tools na pwede mong gamitin..."
        - "Hindi lahat trabaho ay mapupunta sa AI..."
        """
        hooks = {
            "AI": [
                "🤖 Ano ba talaga ang pwedeng gawin ng AI para sa work mo?",
                "💡 AI tools na FREE—hindi kailangan ng credit card!",
                "⚠️ Truth about AI replacing jobs—legit naman! Pero ano lang yung facts?"
            ],
            "Tech": [
                "📱 Gadgets worth buying—budget-friendly pero powerful!",
                "🔮 Future tech trends na aabot sa PH by 2027",
                "💻 Technology changes everyday life—here's how"
            ],
            "Business": [
                "💼 SME survival tips—kahit ₱10k budget! Paano mo digitalize?",
                "🚀 Automation for small biz—ROI calculator inside!",
                "📈 Startup growth hacks from Filipino entrepreneurs"
            ],
            "Youth": [
                "🎯 Future skills na dapat mong alaman (high school lang pa ka!)",
                "🚀 Top careers by 2030—hindi lang programming",
                "💪 Digital skills beyond diploma—portfolio building guide"
            ]
        }
        
        # Add category-specific hooks with Taglish variations
        available_hooks = hooks.get(audience, [""])
        if available_hooks:
            return random.choice(available_hooks)
        
        # Generic Taglish hook generator
        topics_taglish = {
            "AI": "Artificial Intelligence / AI",
            "Tech": "Technology / Tech Gadgets",
            "Business": "Business / Entrepreneurship",
            "Youth": "Skills / Future Careers"
        }
        
        topic_name = topics_taglish.get(audience, audience)
        return f"🎯 {topic_name} content na practical lang! Check it out 👇"
    
    def create_content_script(self, 
                              topic: str,
                              audience: str,
                              duration: int = 60,  # seconds
                              platform: str = "YouTube"
                              ) -> dict:
        """
        Create a content script in Taglish.
        
        Args:
            topic: Content topic/subject
            audience: Target audience (youth/business/tech/ai)
            duration: Video length in seconds
            platform: Target platform
            
        Returns:
            Dictionary with script sections
        """
        # Map platforms to formats
        format_mapping = {
            "YouTube": {"type": "long-form", "style": "educational + entertaining"},
            "TikTok": {"type": "short-form", "style": "quick tips"},
            "Instagram": {"type": "reels", "style": "visual storytelling"},
            "LinkedIn": {"type": "professional", "style": "industry insights"}
        }
        
        script_type = format_mapping.get(platform, {"type": "long-form", "style": "educational"})
        
        # Generate hook in Taglish
        hook = self.generate_taglish_hook(topic, audience)
        
        # Structure the script
        return {
            "topic": topic,
            "audience": audience,
            "platform": platform,
            "duration_seconds": duration,
            "format": script_type["type"],
            "style": script_type["style"],
            "hook_taglish": hook,
            "structure": {
                "intro": f"Start with: '{hook}' — grab attention immediately!",
                "main_points": f"Break into 3-4 key points about {topic}",
                "examples": f"Include real Filipino examples and use cases",
                "cta": "End with strong CTA: 'Comment below! Follow for more tips!'"
            },
            "tips": [
                "Keep sentences short in Taglish flow",
                "Use emojis relevant to topic",
                "Add visual cues in brackets [VISUAL IDEA]",
                "Fact-check all claims and stats"
            ]
        }
    
    def generate_social_posts(self, 
                              topic: str,
                              audience: str,
                              platform: str) -> Dict[str, str]:
        """
        Generate social media posts for the content.
        
        Returns:
            Dictionary with posts for each platform
        """
        # Hook
        hook = self.generate_taglish_hook(topic, audience)
        
        return {
            "YouTube": {
                "title": f"HAKA | {topic.replace(' ', '-').title()}",
                "description": f"🇵🇭 [Topic Intro]\n\nIn this video: {topic}\n\n⏱️ Duration: {self.duration_seconds}\n\n💡 What you'll learn:\n- Key point 1\n- Key point 2\n- Key point 3\n\n👇 COMMENT BELOW! Follow for more tech & AI tips!",
                "hashtags": "#HAKA #AI #Technology #PH #DigitalSkills #FutureOfWork"
            },
            "TikTok": {
                "caption": f"{hook}\n\n[Topic preview] 🎯\n\n#HAKA #AI #TechTips #PHContent #LearnSomethingNew",
                "text_overlay": [f"TOPIC: {topic}", "Free tools inside! 🔥"]
            },
            "Instagram": {
                "caption": f"{hook}\n\nSwipe → for more details!\n\n🇵🇭 Filipino digital media brand\n💡 Ideas That Move People & Business\n\n#HAKA #TechPH #AI #SMEs #Innovation",
                "story_text": "New HAKA content dropping! 👉"
            },
            "LinkedIn": {
                "title": f"{topic} — Filipino Perspective",
                "description": f"🇵🇭 From Manila, with practical insights for Filipino entrepreneurs and professionals.\n\nIn this piece: {topic}\n\nKey takeaways:\n• Point 1\n• Point 2\n• Point 3\n\n💬 Let's discuss in comments! Follow HAKA for more industry insights.",
                "hashtags": "#HAKA #Technology #Innovation #DigitalTransformation"
            }
        }
    
    def get_monthly_plan(self, month: int = None, year: int = None) -> ContentPlan:
        """
        Generate a monthly content plan based on editorial mix.
        
        Phase 1 (Awareness): 2 videos/week mix of all pillars
        Phase 2+ (Authority): More deep-dives and collaborations
        
        Args:
            month: Month number (default: current month)
            year: Year (default: current year)
            
        Returns:
            ContentPlan with scheduled content
        """
        if not month or not year:
            now = datetime.datetime.now()
            month = now.month
            year = now.year
        
        # Phase 1: 2 videos per week → ~8 videos/month
        # Editorial mix: Tech 30%, AI 30%, Business 25%, Youth 15%
        
        plan = ContentPlan(
            phase=self.current_phase,
            month=month,
            ideas=[]
        )
        
        # Generate 8 content pieces for the month
        categories = ["AI", "Tech", "Business", "Youth"]
        weights = self.get_content_distribution()
        
        import random
        for i in range(8):
            category = random.choices(categories, weights=weights)[0]
            
            # Map to specific ideas
            idea_mapping = {
                "AI": ["AI tools", "Truth about AI", "Productivity hacks"],
                "Tech": ["Trends", "Gadgets", "Future impact"],
                "Business": ["SME tips", "Automation", "Digital transformation"],
                "Youth": ["Future skills", "Careers", "Digital lifestyle"]
            }
            
            topic = random.choice(idea_mapping.get(category, [""]))
            
            idea = ContentIdea(
                id=len(plan.ideas) + 1,
                category=category,
                topic=f"{category} | {topic}",
                focus_area={
                    "AI": "AI tools & use cases",
                    "Tech": "Trends & gadgets",
                    "Business": "Growth strategies",
                    "Youth": "Skills & careers"
                }.get(category, ""),
                key_angle=f"{category}-focused educational content",
                target_audience=[
                    "youth" if category == "Youth" else 
                    "business" if category == "Business" else
                    "tech" if category == "Tech" else
                    ["youth", "business"] if category == "AI" else ["all"]
                ],
                platform="YouTube"
            )
            plan.ideas.append(idea)
        
        return plan
    
    def get_brand_status(self) -> dict:
        """Get current brand status and milestones."""
        return {
            "brand_name": self.config.get("brand", {}).get("name", "HAKA"),
            "current_phase": self.current_phase,
            "phase_details": self.config.get("growth_phases", {}),
            "branding_status": self.config.get("branding_status", {})
        }
    
    def get_next_milestone(self) -> str:
        """Get the next major milestone."""
        phases = self.config.get("growth_phases", {})
        current_phase = self.current_phase
        
        if current_phase == "phase_1":
            return (
                "🎯 Next Milestone: Official HAKA logo, brand colors, and social media identity!\n\n" +
                "Focus: Build awareness with educational & entertaining content."
            )
        elif current_phase == "phase_2":
            return (
                "🎯 Next Milestone: Become trusted Filipino source for tech & AI knowledge.\n\n" +
                "Focus: Expert collaborations, case studies, authority building."
            )
        else:
            return "Phase not recognized. Check config."
    
    def print_welcome(self):
        """Print welcome message when agent starts."""
        print("=" * 60)
        print("🇵🇭 HAKA — AI Content Agent")
        print("=" * 60)
        print()
        print("Tagline: Isipin. Tuklasin. Umangat.")
        print("Motto: Ideas That Move People & Business 🚀")
        print()
        print(f"📍 Current Phase: {self.current_phase.upper()}")
        print(f"🎯 Focus: {self.get_next_milestone()[:100]}...")
        print("=" * 60)


def main():
    """Main entry point for the agent."""
    agent = HAKAAgent()
    agent.print_welcome()
    
    print("\n📊 Content Distribution:")
    dist = agent.get_content_distribution()
    for category, weight in dist.items():
        print(f"  - {category}: {weight*100:.0f}%")
    
    print("\n📝 Next Suggested Content:")
    next_idea = agent.suggest_next_content()
    print(f"  Category: {next_idea.category}")
    print(f"  Topic: {next_idea.topic}")
    print(f"  Hook: {agent.generate_taglish_hook(next_idea.topic, 'youth')}")


if __name__ == "__main__":
    main()
