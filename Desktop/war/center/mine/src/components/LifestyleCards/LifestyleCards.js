import React from "react";
import "./LifestyleCards.css";

const lifestyles = [
  {
    name: "Gluten-Free",
    description: "Foods that don't contain gluten",
    icon: "🌾",
    bgColor: "#FFEFE2",
  },
  {
    name: "Vegan",
    description: "Vegetable-based goodness",
    icon: "🥦",
    bgColor: "#E9F7EC",
  },
  {
    name: "Plant Based",
    description: "Based on herbal ingredients",
    icon: "🍃",
    bgColor: "#E8F1FF",
  },
  {
    name: "Keto",
    description: "Good fats served in food",
    icon: "🥑",
    bgColor: "#FFE8E8",
  },
];

const LifestyleCards = () => {
  return (
    <div className="lifestyle-container">
      <h2>Shop by lifestyle</h2>
      <div className="lifestyle-grid">
        {lifestyles.map((lifestyle, index) => (
          <div
            key={index}
            className="lifestyle-card"
            style={{ backgroundColor: lifestyle.bgColor }}
          >
            <div className="icon">{lifestyle.icon}</div>
            <div className="text-content">
              <h3>{lifestyle.name}</h3>
              <p>{lifestyle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleCards;
