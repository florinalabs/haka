#!/bin/bash
# 🇵🇭 HAKA — Command Line Tools
# =================================

echo ""
echo "=================================================="
echo "  🇵🇭 HAKA — AI Content Agent"
echo "=================================================="
echo ""

case "$1" in
    start)
        echo "Starting HAKA content agent..."
        python3 agents/content_creator/haka_agent.py
        ;;
    suggest)
        echo "\nSuggesting next content idea..."
        python3 -c "
from agents.content_creator.haka_agent import HAKAAgent
agent = HAKAAgent()
idea = agent.suggest_next_content()
hook = agent.generate_taglish_hook(idea.topic, 'youth')
print(f'Category: {idea.category}')
print(f'Topic: {idea.topic}')
print(f'Hook: {hook}')
"
        ;;
    plan)
        echo "\nGenerating monthly content plan..."
        python3 -c "
from agents.content_creator.haka_agent import HAKAAgent
agent = HAKAAgent()
plan = agent.get_monthly_plan()
print(f'Phase: {plan.phase}')
print(f'Month: {plan.month}')
print(f'Planned Content Pieces: {len(plan.ideas)}')
"
        ;;
    status)
        echo "\nCurrent Brand Status:"
        python3 -c "
from agents.content_creator.haka_agent import HAKAAgent
agent = HAKAAgent()
status = agent.get_brand_status()
print(f'Brand: {status[\"brand_name\"]}')
print(f'Phase: {status[\"current_phase\"]}')
print(next_milestone := agent.get_next_milestone())
"
        ;;
    config)
        echo "Viewing configuration..."
        cat configs/haka_agent_config.json
        ;;
    help)
        echo ""
        echo "HAKA Agent Commands:"
        echo "  ./run.sh start     — Start the content agent"
        echo "  ./run.sh suggest   — Get next content suggestion"
        echo "  ./run.sh plan      — Generate monthly content plan"
        echo "  ./run.sh status    — Show current brand status"
        echo "  ./run.sh config    — View configuration file"
        echo "  ./run.sh help      — Show this help message"
        echo ""
        ;;
    *)
        echo "Usage: $0 {start|suggest|plan|status|config|help}"
        echo ""
        echo "Quick Start:"
        echo "  $0 start        — Run the full HAKA agent"
        echo "  $0 suggest      — Get a quick content idea"
        echo ""
        ;;
esac

echo ""
echo "=================================================="
