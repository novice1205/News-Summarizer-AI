# 📰 News Summarizer App  

🚀 **News Summarizer** is a personalized news digest application that delivers AI-powered news summaries and sentiment analysis. It integrates **Nhost** for backend services, **Bolt.new** for frontend development, and **n8n workflows** with **OpenRouter** for automated news processing.

---

## 🌟 **Features**  

✅ **User Authentication** – Sign up & log in securely using Nhost authentication.  
✅ **Personalized News Feed** – Users can select topics of interest.  
✅ **AI-Powered Summarization** – Summarizes lengthy news articles using OpenRouter AI.  
✅ **Sentiment Analysis** – Analyzes the sentiment of news articles (positive, neutral, or negative).  
✅ **Modern UI/UX** – Built with **Bolt.new**, styled for a sleek and responsive experience.  
✅ **Automated News Processing** – Uses **n8n workflows** for real-time data enrichment.  

---

## 🛠️ **Tech Stack**  

- **Frontend**: Bolt.new (React-based UI framework)  
- **Backend**: Nhost (GraphQL, Authentication, Database)  
- **AI Integration**: OpenRouter (for summarization & sentiment analysis)  
- **Workflow Automation**: n8n (Automates news fetching, summarization, and sentiment analysis)  

---

## 🔧 **Setup Instructions**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/news-summarizer.git
cd news-summarizer
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory and add the following:  
```sh
NHOST_BACKEND_URL=<your-nhost-backend-url>
OPENROUTER_API_KEY=<your-openrouter-api-key>
N8N_WEBHOOK_URL=<your-n8n-webhook-url>
```

### **4️⃣ Start the Application**  
```sh
npm run dev
```
Your app will be live at **http://localhost:5173** 🚀  

---

## 🤝 **Contributing**  
Want to improve this project? Feel free to **fork** the repository and submit a pull request.  

1. **Fork** the repo  
2. **Create a branch** (`git checkout -b feature-xyz`)  
3. **Commit your changes** (`git commit -m "Added new feature"`)  
4. **Push to your branch** (`git push origin feature-xyz`)  
5. **Open a Pull Request**  

---
  
⭐ **Star this repository** if you find it useful! 🚀