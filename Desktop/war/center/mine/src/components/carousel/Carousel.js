import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import slide1Img from "../../assets/1.png"; // Replace with actual image
import slide2Img from "../../assets/2.png"; // Replace with actual image
import slide3Img from "../../assets/3.png"; // Replace with actual image

const CarouselComponent = () => {
  return (
    <Carousel interval={3000} controls={true} indicators={true} className="custom-carousel">
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="carousel-slide slide1">
          <div className="carousel-text">
            <span className="badge">🍋 Only natural ingredients</span>
            <h2>Enjoy refreshing summer drink</h2>
            <button className="shop-btn">Shop now</button>
          </div>
          <div className="carousel-image">
            <img src={slide1Img} alt="Slide 1" height={300} width={400}/>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="carousel-slide slide2">
          <div className="carousel-text">
            <span className="badge">🌿 Fresh & Organic</span>
            <h2>Experience the taste of nature</h2>
            <button className="shop-btn">Shop now</button>
          </div>
          <div className="carousel-image">
            <img src={slide2Img} alt="Slide 2" height={300} width={400}/>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="carousel-slide slide3">
          <div className="carousel-text">
            <span className="badge">💧 Hydration at its best</span>
            <h2>Stay cool & refreshed</h2>
            <button className="shop-btn">Shop now</button>
          </div>
          <div className="carousel-image">
            <img src={slide3Img} alt="Slide 3" height={300} width={400}/>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
