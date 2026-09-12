import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY,
});

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "Tu ek helpful MERN stack teacher hai. Simple Hindi me jawab de."],
  ["human", "{question}"]
]);

const chain = prompt.pipe(model);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;
    const result = await chain.invoke({ question });
    res.json({ answer: result.content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default app;
