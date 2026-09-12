import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

async function run() {
  console.log("Gemini soch raha hai...");

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash", 
    contents: "javaScript  kya hai? 2 line me simple bhasha me batao"
  });

  console.log(response.text);
}

run();