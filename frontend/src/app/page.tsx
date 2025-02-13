'use client';

import { useState } from 'react';

// interface Artwork {
//   title: string;
//   artist: string;
//   description: string;
//   mood: string[];
//   image_url: string;
// }

export default function Home() {
  const [emotion, setEmotion] = useState('');
  const [recommendations, setRecommendations] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emotion }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Remove any extra whitespace but preserve line breaks
        const formattedResult = data.result
          .split('\n')
          .map((line: string) => line.trim())
          .join('\n');
        setRecommendations(formattedResult);
      } else {
        console.error('Error:', data.error);
        setRecommendations('Sorry, there was an error getting recommendations.');
      }
    } catch (error) {
      console.error('Error:', error);
      setRecommendations('Sorry, there was an error getting recommendations.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-light mb-12 text-zinc-800 text-center">
          Art Emotion Recommender
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div className="space-y-2">
            <label htmlFor="emotion" className="block text-sm font-medium text-zinc-600">
              How are you feeling?
            </label>
            <textarea
              id="emotion"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              placeholder="Describe your emotions or situation..."
              className="w-full p-4 bg-white border border-zinc-200 text-zinc-800 text-base outline-none focus:border-zinc-400 transition-colors"
              rows={4}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-1/2 py-3 px-4 bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 disabled:opacity-50 transition-colors mx-auto block"
          >
            {isLoading ? 'Getting recommendations...' : 'Get Art Recommendations'}
          </button>
        </form>

        {recommendations && (
          <div className="bg-white border border-zinc-200 shadow-sm">
            <pre className="whitespace-pre-wrap font-serif text-base leading-relaxed text-zinc-700 p-8">
              {recommendations}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
