#  MERN AI Assistant - Gemini + LangChain.js

Ye ek Full Stack AI Chat App hai. User frontend se sawal puchega aur backend Gemini (LangChain.js se) se jawab laake dega.

### ✨ Features
- Gemini 3.6 Flash Model (Latest)
- LangChain.js Integration
- Frontend + Backend ek saath
- Simple HTML/CSS/JS Chat UI
- Hindi me MERN Stack sikhata hai

### 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **AI**: @google/genai, LangChain.js (@langchain/google-genai)
- **Other:** dotenv, cors

### 📁 Folder Structure

gemini-js/
├── public/
│   └── index.html      # Frontend
├── server.js           # Backend + AI Logic
├── .env                # API Key
├── package.json
└── README.md



###  Setup (Step by Step)

1. Project clone / folder banao:
```bash
mkdir gemini-js
cd gemini-js
npm init -y

2. package.json me ye add karo:
  "type": "module"

3. Packages install karo:
 
npm install express cors dotenv
npm install @google/genai langchain @langchain/google-genai @langchain/core

4. .env file banao: GOOGLE_API_KEY=tere_gemini_api_key_yahan_paste_karo

5. server.js aur public/index.html banao (maine jo code diya tha)

6.Server chalao: node server.js

7.Browser me kholo:http://localhost:3000


Gemini API Key Kaise Le?
1. aistudio.google.com pe jao    
2. Create API Key pe click    karo 
3. Copy karke .env me paste kardo

 Author: Ambuj - MERN Stack + GenAI Learner

      


