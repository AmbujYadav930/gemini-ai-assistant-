import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // frontend yahan se serve hoga

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.6-flash", // tera working wala model
  apiKey: process.env.GOOGLE_API_KEY,
});

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "Tu ek helpful MERN stack teacher hai. Simple Hindi me jawab de."],
  ["human", "{question}"]
]);

const chain = prompt.pipe(model);

app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;
    const result = await chain.invoke({ question });
    res.json({ answer: result.content });
  } catch (e) {
    res.status(500).json({ answer: "Error: " + e.message });
  }
});

app.listen(3000, () => {
  console.log("Server chal gaya: http://localhost:3000");
});