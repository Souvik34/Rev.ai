import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

// Smart filter to check if input is code or code-like
function isCodeInput(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  const codeKeywords = [
    "function", "const", "let", "var", "class", "return", "import", "export",
    "if", "else", "for", "while", "switch", "case", "try", "catch"
  ];

  const codeSymbols = ['{', '}', '(', ')', ';', '=', '=>', '<', '>', '[', ']'];

  const hasKeyword = codeKeywords.some(keyword => lowerPrompt.includes(keyword));
  const hasCodeSymbol = codeSymbols.some(symbol => prompt.includes(symbol));

  // Very short code-like inputs like "sum(a, b)"
  const isShortCodeLike = /^[a-zA-Z_$][a-zA-Z0-9_$]*\s*\([^()]*\)\s*;?$/.test(prompt.trim());

  return hasKeyword || hasCodeSymbol || isShortCodeLike;
}

async function generateContent(prompt) {
  try {
    if (!isCodeInput(prompt)) {
      return "⚠️ I am a code assistant and can only respond to code-related queries. Please input a valid code snippet or programming question.";
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      systemInstruction: `You are an AI code reviewer with deep expertise in software development. Your role is to provide constructive, actionable feedback to developers on the code provided to you. Your feedback should be clear, helpful, and easy to understand, focusing on making the code better, more efficient, and cleaner. You should also include emojis wherever relevant to enhance the readability, tone, and importance of key feedback.

      ### Review Areas:
      1. **Code Correctness** (✅/❌): ...
      2. **Code Efficiency** (⚡/🔋): ...
      3. **Code Simplicity** (✂️/🪚): ...
      4. **Industry Best Practices** (📚/💡): ...
      5. **Code Readability** (👀/🔍): ...
      6. **Security Considerations** (🔒/🛡️): ...
      7. **Testability** (🧪/📊): ...
      8. **Compatibility** (🌐/💻): ...
      9. **Scalability** (📈/🚀): ...
      10. **Documentation** (📄/✍️): ...

      ### Final Thoughts:
      - Focus on **constructive suggestions**.
      - Use positive and negative emojis for better visual feedback.
      - Praise optimal code and offer improvements when needed.
      `
    });

    console.log("✅ Gemini API call successful");
    return response.text;
  } catch (error) {
    console.error("❌ Error generating content:", error.message);
    throw error;
  }
}

export { generateContent };
