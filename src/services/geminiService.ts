
import { GoogleGenAI } from "@google/genai";
import { TRENDS_PROMPT } from '../constants';
import { TrendData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

function parseTrendsFromMarkdown(markdown: string): TrendData {
  const trends: TrendData = {
    hashtags: [],
    challenges: [],
    sounds: [],
  };

  const lines = markdown.split('\n').filter(line => line.trim() !== '');
  let currentSection: keyof TrendData | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('## Hashtags')) {
      currentSection = 'hashtags';
      continue;
    }
    if (trimmedLine.startsWith('## Challenges')) {
      currentSection = 'challenges';
      continue;
    }
    if (trimmedLine.startsWith('## Sounds')) {
      currentSection = 'sounds';
      continue;
    }
    
    if (currentSection) {
      const match = trimmedLine.match(/^\d+\.\s*\*\*(.+?)\*\*:\s*(.*)/);
      if (match) {
        const [, title, description] = match;
        trends[currentSection].push({ title: title.trim(), description: description.trim() });
      }
    }
  }
  return trends;
}


export async function fetchPhilippineTiktokTrends(): Promise<TrendData> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: TRENDS_PROMPT,
      config: {
        tools: [{googleSearch: {}}],
      },
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Received an empty response from the API.");
    }

    const trendsData = parseTrendsFromMarkdown(responseText);

    // Basic validation
    if (!trendsData.hashtags.length || !trendsData.challenges.length || !trendsData.sounds.length) {
      console.error("Parsed data is incomplete:", trendsData);
      throw new Error("The fetched data is missing required trend categories or could not be parsed.");
    }

    return trendsData;
  } catch (error) {
    console.error("Error fetching TikTok trends:", error);
    throw new Error("Failed to fetch data from Gemini API.");
  }
}