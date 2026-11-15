#!/usr/bin/env python3
"""
HAKA — Social Media Scheduler 🇵🇭
===================================
Schedule and manage content across platforms.

Isipin. Tuklasin. Umangat.
"""

import datetime
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict


@dataclass
class Post:
    """Represents a social media post."""
    id: int
    topic: str
    category: str
    platform: str
    content_type: str  # video, article, reel, story
    caption: str
    hashtags: List[str]
    status: str  # scheduled, published, draft
    publish_time: datetime.datetime
    visual_suggestions: List[str]


class SocialScheduler:
    """
    Manages social media scheduling for HAKA.
    
    Supported platforms:
    - YouTube (long-form videos)
    - TikTok (short-form)
    - Instagram (reels, stories)
    - LinkedIn (professional posts)
    - Facebook (community building)
    """
    
    def __init__(self):
        self.posts: List[Post] = []
        self.next_post_id = 1
        
    def create_post(
        self,
        topic: str,
        category: str,
        platform: str,
        content_type: str = "video",
        caption: Optional[str] = None,
        hashtags: Optional[List[str]] = None,
        publish_time: Optional[datetime.datetime] = None,
        status: str = "draft"
    ) -> Post:
        """Create a new social media post."""
        
        # Default captions by platform
        default_captions = {
            "YouTube": f"HAKA | {topic}",
            "TikTok": f"{topic} 🎯 #HAKA",
            "Instagram": f"{topic} 👇 #HAKA",
            "LinkedIn": f"Industry insights: {topic}",
            "Facebook": f"Welcome to HAKA! Learning about {topic}"
        }
        
        default_hashtags = {
            "YouTube": ["#HAKA", "#AI", "#Technology", "#PH", "#FilipinoTech"],
            "TikTok": ["#HAKA", "#TechTips", "#Philippines", "#LearnSomethingNew"],
            "Instagram": ["#HAKA", "#TechPH", "#Innovation", "#DigitalSkills"],
            "LinkedIn": ["#HAKA", "#Technology", "#Innovation", "#Business"],
            "Facebook": ["#HAKA", "#TechCommunity", "#Philippines", "#Education"]
        }
        
        post = Post(
            id=self.next_post_id,
            topic=topic,
            category=category,
            platform=platform,
            content_type=content_type,
            caption=caption or default_captions.get(platform, ""),
            hashtags=hashtags or default_hashtags.get(platform, []),
            status=status,
            publish_time=publish_time or datetime.datetime.now(),
            visual_suggestions=[]
        )
        
        self.posts.append(post)
        self.next_post_id += 1
        
        return post
    
    def schedule_post(
        self, 
        post: Post,
        publish_time: Optional[datetime.datetime] = None
    ) -> Post:
        """Schedule a post for future publishing."""
        if not publish_time:
            # Default: tomorrow at same time (24 hours)
            now = datetime.datetime.now()
            publish_time = now.replace(
                hour=now.hour,
                minute=now.minute + 30,
                second=0
            )
        
        post.status = "scheduled"
        post.publish_time = publish_time
        self.posts[self.posts.index(post)] = post
        
        return post
    
    def add_visual_suggestions(self, post_id: int, visuals: List[str]) -> Post:
        """Add visual direction suggestions to a post."""
        for post in self.posts:
            if post.id == post_id:
                post.visual_suggestions.extend(visuals)
                return post
        
        return None
    
    def get_posts_by_platform(self, platform: str) -> List[Post]:
        """Get all posts for a specific platform."""
        return [p for p in self.posts if p.platform == platform]
    
    def get_draft_posts(self) -> List[Post]:
        """Get all draft posts."""
        return [p for p in self.posts if p.status == "draft"]
    
    def get_scheduled_posts(self, 
                            day_offset: int = 0,
                            time_range: str = "day") -> List[Post]:
        """
        Get posts scheduled for a specific time period.
        
        Args:
            day_offset: Days from now (0 = today, 1 = tomorrow)
            time_range: 'day', 'week', 'month'
        """
        now = datetime.datetime.now()
        
        if day_offset != 0:
            future_time = now + datetime.timedelta(days=day_offset)
        else:
            future_time = now
        
        cutoff = None
        if time_range == "day":
            cutoff = now.replace(hour=23, minute=59, second=59)
        elif time_range == "week":
            cutoff = now + datetime.timedelta(days=6, hours=23, minutes=59)
        elif time_range == "month":
            next_month = now.replace(day=1) + datetime.timedelta(days=32) - datetime.timedelta(days=1)
            cutoff = next_month
        
        # Filter posts scheduled within the range
        if cutoff:
            return [p for p in self.posts 
                    if p.status == "scheduled" 
                    and now <= p.publish_time.replace(tzinfo=datetime.timezone.utc) <= cutoff]
        
        return [p for p in self.posts if p.status == "scheduled"]
    
    def remove_post(self, post_id: int) -> bool:
        """Remove a post from the schedule."""
        for i, post in enumerate(self.posts):
            if post.id == post_id:
                del self.posts[i]
                return True
        return False
    
    def clear_all_drafts(self) -> int:
        """Remove all draft posts and return count removed."""
        drafts = [p for p in self.posts if p.status == "draft"]
        removed = len(drafts)
        self.posts = [p for p in self.posts if p.status != "draft"]
        return removed
    
    def get_summary(self) -> Dict:
        """Get a summary of all scheduled posts."""
        platforms = {}
        statuses = {"draft": 0, "scheduled": 0, "published": 0}
        
        for post in self.posts:
            platforms.setdefault(post.platform, 0)
            platforms[post.platform] += 1
            statuses[post.status] += 1
        
        return {
            "total_posts": len(self.posts),
            "platforms": platforms,
            "statuses": statuses
        }


def main():
    """Demo of social media scheduler."""
    
    print("=" * 65)
    print("🇵🇭 HAKA — Social Media Scheduler")
    print("=" * 65)
    print()
    
    # Create scheduler
    scheduler = SocialScheduler()
    
    # Create sample posts (these would normally come from content plan)
    now = datetime.datetime.now()
    
    post1 = scheduler.create_post(
        topic="AI Tools for Productivity",
        category="AI",
        platform="YouTube",
        content_type="video",
        caption="🤖 7 AI tools na magpapa-move ng productivity mo!\n\nFree lang! Check links in bio 👇\n\n💡 What you'll learn:\n- Tool 1 demo\n- Tool 2 demo\n- How to stack them\n\nComment below! Follow for more tips!",
        hashtags=["#HAKA", "#AI", "#Productivity", "#Philippines", "#FreeTools"],
        publish_time=now.replace(minute=9, second=0),
        status="scheduled"
    )
    
    post2 = scheduler.create_post(
        topic="Future Careers for Filipino Youth",
        category="Youth",
        platform="TikTok",
        content_type="reel",
        caption="🚀 Top careers by 2030—hindi lang programming!\n\nAno ang future jobs? 🤔\n\n1. AI Specialist\n2. Green Economy Jobs\n3. Remote Work Roles\n\nFollow for more career tips! 👇",
        hashtags=["#HAKA", "#Careers", "#Youth", "#Philippines", "#FutureOfWork"],
        publish_time=now.replace(minute=15, second=0),
        status="scheduled"
    )
    
    post3 = scheduler.create_post(
        topic="SME Digital Transformation Tips",
        category="Business",
        platform="LinkedIn",
        content_type="article",
        caption="🇵🇭 From Manila: SMEs can digitalize with ₱10k budget!\n\nIn this post:\n- Low-cost automation tools\n- Step-by-step guide\n- Real PH examples\n\n💬 Let's discuss in comments!",
        hashtags=["#HAKA", "#SME", "#DigitalTransformation", "#Business", "#Philippines"],
        publish_time=now.replace(minute=12, second=0),
        status="scheduled"
    )
    
    print("📅 Scheduled Posts Summary:")
    print(f"  Total posts: {len(scheduler.posts)}")
    print()
    
    # Display scheduled posts
    scheduled = scheduler.get_scheduled_posts(time_range="week")
    if scheduled:
        print("📆 Posts in next 7 days:")
        for post in scheduled:
            formatted_time = post.publish_time.strftime("%b %d, %I:%M %p")
            print(f"  • {post.platform}: {formatted_time}")
            print(f"    Topic: {post.topic}")
            print(f"    Status: {post.status}")
            print()
    
    print("Summary:", scheduler.get_summary())
    
    print("\n" + "=" * 65)


if __name__ == "__main__":
    main()
