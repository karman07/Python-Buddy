import { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css"; 

export default function Chat({ apiKey, character }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); 

  const showToast = (title, description, status) => {
    setToast({ title, description, status });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async () => {
    if (!input.trim() || !apiKey) return;

    setLoading(true);
    try {
      const userMsg = { content: input, role: "user" };
      setMessages((prev) => [...prev, userMsg]);

      const response = await axios.post(
       "https://python-buddy.onrender.com/ai/chat",
        { message: input },
        { headers: { "x-api-key": apiKey } }
      );

      const botMsg = { content: response.data, role: "bot" };
      setMessages((prev) => [...prev, botMsg]);
      setInput("");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") handleSubmit();
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [input]);

  return (
    <div className="chat-container">
      {toast && (
        <div className={`toast ${toast.status === "error" ? "toast-error" : "toast-success"}`}>
          <strong>{toast.title}</strong>
          <p>{toast.description}</p>
        </div>
      )}

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div className="avatar">{msg.role === "bot" ? (character === "robot" ? "🤖" : "🐯") : "👤"}</div>
            <div className="text">{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Python..."
          disabled={!apiKey}
        />
        <button onClick={handleSubmit} disabled={loading || !apiKey}>
          {loading ? "⏳" : "Send"}
        </button>
      </div>
    </div>
  );
}
