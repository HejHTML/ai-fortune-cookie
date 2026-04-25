import './App.css'
import { useState } from 'react'
import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.error("Missing VITE_OPENAI_API_KEY in .env");
}

const client = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true
});

function App() {
  const [fortune, setFortune] = useState("");
  const [loading, setLoading] = useState(false);

  const getFortune = async () => {
    setLoading(true);
    setFortune("");

    try {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "Write one short funny fortune cookie in Swedish. Max 12 words."
          }
        ]
      });

      setFortune(response.choices[0].message.content);

    } catch (error) {
      console.error("OpenAI error:", error);
      setFortune("Något gick fel 😢");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <div className="cookie-emoji">🥠</div>

      <h1>Fortune Cookie</h1>

      <button onClick={getFortune} disabled={loading}>
        {loading ? "Öppnar..." : "Öppna kaka"}
      </button>

      {fortune && <p>{fortune}</p>}
    </div>
  );
}

export default App;