import { useState } from "react";
import "./SettingsModal.css"; 

export default function SettingsModal({ isOpen, onClose, apiKey, setApiKey, character, setCharacter }) {
  const [tempApiKey, setTempApiKey] = useState(apiKey);
  const [tempCharacter, setTempCharacter] = useState(character);

  const handleSave = () => {
    setApiKey(tempApiKey);
    setCharacter(tempCharacter);
    localStorage.setItem("pythonTutorApiKey", tempApiKey);
    onClose();
  };

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Settings</h2>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-body">
          {/* API Key Input */}
          <div className="input-group">
            <label>OpenAI API Key</label>
            <input
              type="text"
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              placeholder="Enter API Key..."
            />
          </div>

          {/* Character Selection */}
          <div className="input-group">
            <label>Tutor Character</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="robot"
                  checked={tempCharacter === "robot"}
                  onChange={() => setTempCharacter("robot")}
                />
                🤖 Robot
              </label>
              <label>
                <input
                  type="radio"
                  value="tiger"
                  checked={tempCharacter === "tiger"}
                  onChange={() => setTempCharacter("tiger")}
                />
                🐯 Tiger
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button className="save-btn" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
