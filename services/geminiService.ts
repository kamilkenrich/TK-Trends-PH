
import { GoogleGenAI } from "@google/genai";
import { TRENDS_PROMPT } from '../constants';
import { TrendData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

function parseJsonFromMarkdown(markdown: string): any {
  const jsonBlockRegex = /```json\s*([\s\S]*?)\s*```/;
  const match = markdown.match(jsonBlockRegex);
  if (match && match[1]) {
    try {
      return JSON.parse(match[1]);
    } catch (e) {
      console.error("Failed to parse JSON from markdown", e);
      throw new Error("Invalid JSON format in the model's response.");
    }
  }
  throw new Error("Could not find a JSON block in the model's response.");
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

    const trendsData: TrendData = parseJsonFromMarkdown(responseText);

    // Basic validation
    if (!trendsData.hashtags || !trendsData.challenges || !trendsData.sounds) {
      throw new Error("The fetched data is missing required trend categories.");
    }

    return trendsData;
  } catch (error) {
    console.error("Error fetching TikTok trends:", error);
    throw new Error("Failed to fetch data from Gemini API.");
  }
}
