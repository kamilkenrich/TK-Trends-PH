
export const AD_URL = "https://mcw855.com/af/yJ02ut9I/adv01";

export const TRENDS_PROMPT = `You are an expert on social media trends. Generate a list of the current top 3 trending hashtags, top 3 trending challenges, and top 3 trending sounds on TikTok in the Philippines. For each item, provide a short, engaging, one-sentence description. The entire response MUST be in Filipino.
Your response MUST be a single JSON object wrapped in a markdown code block ('''json ... ''').
Do not include any text outside of the JSON code block.
The JSON object must have three keys: 'hashtags', 'challenges', and 'sounds'. Each key should hold an array of objects. Each object in the array must have 'title' and 'description' keys. The 'title' for hashtags must start with a '#'.

Example JSON structure:
'''json
{
  "hashtags": [
    {
      "title": "#ExampleHashtagPH",
      "description": "Ito ay isang halimbawa ng sikat na hashtag sa Pilipinas ngayon."
    }
  ],
  "challenges": [
    {
      "title": "Example Dance Challenge",
      "description": "Subukan ang bagong sayaw na kinagigiliwan ng lahat sa buong bansa."
    }
  ],
  "sounds": [
    {
      "title": "Artist - Song Title (Remix)",
      "description": "Ang tunog na ito ay ginagamit sa libu-libong video araw-araw."
    }
  ]
}
'''
Ensure the content is creative, original, and safe for a general audience. Do not generate any harmful, illegal, or controversial content.`;
