import { GoogleGenAI } from "@google/genai";
import fetch from "node-fetch"; 


globalThis.fetch = fetch;

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  console.log(response.text);
  return response.text;
}



export { generateContent };
