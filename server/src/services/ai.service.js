import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContent(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

  
    console.log("✅ Gemini API call successful");

   
    return response.text;
  } catch (error) {
    console.error("❌ Error generating content:", error.message);
    throw error;
  }
}

export { generateContent };
