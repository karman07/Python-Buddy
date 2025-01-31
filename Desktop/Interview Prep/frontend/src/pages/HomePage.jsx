import { useState, useEffect } from "react";
import { FaRobot, FaGear } from "react-icons/fa6";
import Chat from "../components/Chat";
import SettingsModal from "../components/SettingsModal";
import "./HomePage.css"; 

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [character, setCharacter] = useState("robot");

  useEffect(() => {
    const savedKey = localStorage.getItem("pythonTutorApiKey");
    if (savedKey) setApiKey(savedKey);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="avatar">
            <FaRobot />
          </div>
          <h1>Python Buddy</h1>
        </div>
        <button className="icon-button" onClick={() => setIsOpen(true)}>
          <FaGear />
        </button>
      </div>

      <div className="intro-box">
        <p>
          🐍 Welcome to Python Buddy! Learn Python through fun lessons and interactive examples.
          Our friendly AI tutor will guide you step-by-step with creative coding exercises about
          games, animals, and cool tech stuff! Start by asking a question or try a lesson!
        </p>
      </div>

      <Chat apiKey={apiKey} character={character} />

      {isOpen && (
        <SettingsModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          apiKey={apiKey}
          setApiKey={setApiKey}
          character={character}
          setCharacter={setCharacter}
        />
      )}
    </div>
  );
}
