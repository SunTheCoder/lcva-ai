# Art Emotion Recommender

An AI-powered web application that suggests artworks based on emotions and situations using LangChain and OpenAI. The system provides personalized art recommendations that resonate with your current emotional state.

## Overview

This project creates an intelligent art recommendation system that:
- Takes user input about their emotional state or situation
- Analyzes the emotional context using AI
- Recommends relevant artworks from a curated collection
- Provides explanations for why each artwork matches their current state

## Features

- 🎨 AI-powered art recommendations based on emotional input
- 🤖 LangChain + OpenAI for natural language processing
- ⚡ Real-time recommendations with loading states
- 🌐 Modern tech stack: Next.js + FastAPI
- ♿ Accessibility with ARIA labels
- 🎯 Responsive, minimalist design

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Loading skeletons for better UX

### Backend
- FastAPI + Uvicorn
- LangChain for AI orchestration
- OpenAI API integration
- Python dotenv for configuration

## How It Works

1. **Input Processing**: Enter your emotional state or situation (e.g., "I'm feeling peaceful", "I had a stressful day")

2. **Emotional Analysis**: Using LangChain and OpenAI, the system analyzes the input to identify core emotions and context.

3. **Art Matching**: The system searches through a curated collection of artworks, each tagged with emotional attributes.

4. **Recommendation Generation**: You'll receive up to 3 artworks that either:
   - Match and validate your current emotional state
   - Offer a contrasting perspective that might help shift your mood

5. **Explanation**: Each recommendation includes a detailed explanation of why the artwork was chosen.

## Art Collection

The system includes a curated collection of famous artworks with emotional attributes, including:
- The Starry Night (Vincent van Gogh)
- Water Lilies (Claude Monet)
- The Scream (Edvard Munch)
- The Persistence of Memory (Salvador Dalí)
- Sunflowers (Vincent van Gogh)
- And more...


