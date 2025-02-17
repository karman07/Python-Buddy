import React from "react";
import "./Cards.css";
import slide1Img from "../../assets/cards/7.webp";
import slide2Img from "../../assets/cards/5.png";
import slide3Img from "../../assets/cards/6.png";

const cardsData = [
  {
    title: "Only fresh fish to your table",
    products: 124,
    image: slide1Img,
    bgColor: "#ffebef",
  },
  {
    title: "Products for Easter table",
    products: 97,
    image: slide2Img,
    bgColor: "#e6ffee",
  },
  {
    title: "Berries from the garden",
    products: 28,
    image: slide3Img,
    bgColor: "#e0f0ff",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card" style={{ backgroundColor: card.bgColor }}>
          <div className="card-content">
            <div className="card-text">
              <p className="products-count">{card.products} products</p>
              <h3>{card.title}</h3>
              <a href="#" className="shop-now">Shop now →</a>
            </div>
            <div className="card-image">
              <img src={card.image} alt={card.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
