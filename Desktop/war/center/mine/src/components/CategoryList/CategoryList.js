import React from "react";
import "./CategoryList.css";
import { FaPercentage, FaAppleAlt, FaDrumstickBite, FaCarrot, FaEgg, FaWineBottle } from "react-icons/fa";

const categories = [
  { name: "Weekly Sale", icon: <FaPercentage /> },
  { name: "Vegetables", icon: <FaCarrot /> },
  { name: "Easter is Coming", icon: <FaEgg /> },
  { name: "Poultry Meat", icon: <FaDrumstickBite /> },
  { name: "Fresh Fruits", icon: <FaAppleAlt /> },
  { name: "St. Patrick's Day", icon: <FaWineBottle /> },
  { name: "Exotic Fruits", icon: <FaAppleAlt /> },
  { name: "Exotic Fruits", icon: <FaAppleAlt /> },
  { name: "Exotic Fruits", icon: <FaAppleAlt /> },
];

const CategoryList = () => {
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <span className="category-icon">{category.icon}</span>
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
