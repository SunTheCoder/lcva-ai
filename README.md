# Art Emotion Recommender

An AI-powered art recommendation system that suggests artworks based on emotions and situations using LangChain and OpenAI.

## Overview

This project creates an intelligent art recommendation system that:
- Takes user input about their emotional state or situation
- Analyzes the emotional context
- Recommends relevant artworks from a curated collection
- Provides explanations for why each artwork matches their current state

## Features

- Natural language input processing
- Context-aware emotional analysis
- Personalized art recommendations
- Detailed explanations for each recommendation
- Support for both direct emotions and situational context

## Usage

Enter your emotional state or situation when prompted. For example:

- "I'm feeling peaceful and calm"
- "I had a stressful day at work"
- "I'm celebrating good news"
- "I'm feeling anxious about an upcoming presentation"

Type 'quit' to exit the program.

## How It Works

1. **Input Processing**: The system takes natural language input describing your emotional state or situation.

2. **Emotional Analysis**: Using LangChain and OpenAI, the system analyzes the input to identify core emotions and context.

3. **Art Matching**: The system searches through a curated collection of artworks, each tagged with emotional attributes and descriptions.

4. **Recommendation Generation**: Based on the emotional analysis, the system recommends up to 3 artworks that either:
   - Match and validate your current emotional state
   - Offer a contrasting perspective that might help shift your mood

5. **Explanation**: For each recommendation, the system provides a detailed explanation of why the artwork was chosen and how it relates to your current state.

## Art Collection

The system includes a curated collection of famous artworks with emotional attributes, including:
- The Starry Night (Vincent van Gogh)
- Water Lilies (Claude Monet)
- The Scream (Edvard Munch)
- The Persistence of Memory (Salvador Dalí)
- Sunflowers (Vincent van Gogh)
- And more...

## Contributing

Contributions are welcome! You can help by:
- Adding more artworks to the collection
- Improving emotional analysis
- Enhancing the recommendation algorithm
- Adding new features

## Acknowledgments

- LangChain for the AI framework
- OpenAI for the language model
