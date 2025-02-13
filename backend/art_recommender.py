from langchain_openai import OpenAI
from langchain.prompts import PromptTemplate
import json
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Load art data
def load_art_data(file_path):
    with open(file_path, "r") as file:
        return json.load(file)

# Initialize OpenAI LLM
llm = OpenAI(temperature=0.7)

# Create prompt template
art_prompt = PromptTemplate(
    input_variables=["emotion", "./art_data.json"],
    template="""
    You are an empathetic art recommendation assistant. Based on the user's situation and emotions, recommend artworks that resonate with their current state of mind or might help them process their feelings.
    
    User's situation/emotion: {emotion}
    
    Available artworks:
    {art_data}
    
    First, identify the core emotions from their situation (e.g., stress, frustration, joy, etc.).
    Then recommend up to 3 artworks that either:
    1. Match and validate their current emotional state, or
    2. Offer a contrasting perspective that might help shift their mood
    
    For each recommendation, explain:
    1. Why this artwork connects to their situation
    2. How the artwork's emotional elements relate to their experience
    3. What aspect of the artwork might resonate with them right now
    
    Format your response as a list with title, artist, and detailed explanation.
    """
)

def recommend_art(emotion):
    # Load art data
    art_data = load_art_data("./art_data.json")
    
    # Initialize OpenAI with higher max_tokens
    llm = OpenAI(
        temperature=0.7,
        max_tokens=2000  # Increased from default
    )
    
    # Create and invoke the chain using the newer pipe syntax
    chain = art_prompt | llm
    
    # Get recommendations
    response = chain.invoke({
        "emotion": emotion,
        "art_data": json.dumps(art_data, indent=2)
    })
    
    return response

# Modify the main block to handle API requests
if __name__ == "__main__":
    try:
        # Read input from stdin
        emotion = input().strip()
        
        # Get recommendation
        result = recommend_art(emotion)
        
        # Print the response in a way that ensures complete output
        import sys
        json.dump({
            "success": True,
            "result": result
        }, sys.stdout, ensure_ascii=False)
        sys.stdout.flush()
        
    except Exception as e:
        json.dump({
            "success": False,
            "error": str(e)
        }, sys.stdout)
        sys.stdout.flush()