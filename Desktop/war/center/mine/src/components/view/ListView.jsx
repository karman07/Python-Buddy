import React from "react";
import "./ListView.css";

// Categories Data
const categories = [
  { name: "Bakery & bread", products: 230, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/01.png" },
  { name: "Vegetables", products: 180, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/02.png" },
  { name: "Fresh fruits", products: 205, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/03.png" },
  { name: "Meat products", products: 124, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/04.png" },
  { name: "Beverages", products: 372, image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/05.png" },
];

// Products Data
const products = [
  { name: "Muesli Fitness Energy", price: "$2.15", weight: "500g", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/06.png" },
  { name: "Fresh Orange", price: "$3.12", oldPrice: "$4.05", weight: "1kg", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/07.png", discount: "-30%" },
  { name: "Pepsi soda classic, can", price: "$0.80", weight: "330ml", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/08.png" },
  { name: "Mozzarella mini cheese", price: "$2.99", weight: "250g", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/09.png" },
  { name: "Coconut", price: "$1.99", weight: "1 piece", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/10.png" },
  { name: "Pesto Sauce", price: "$3.50", weight: "200g", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png" },
  { name: "Pesto Sauce", price: "$3.50", weight: "200g", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png" },
  { name: "Pesto Sauce", price: "$3.50", weight: "200g", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png" },
  { name: "Pesto Sauce", price: "$3.50", weight: "200g", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png" },
  { name: "Pesto Sauce", price: "$3.50", weight: "200g", image: "https://cartzilla-html.createx.studio/assets/img/shop/grocery/11.png" },
];

const ListView = (sample) => {
  return (
    <div className="list-view-container">
      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <img src={category.image} alt={category.name} />
              <div className="category-text">
                <p className="category-name">{category.name}</p>
                <p className="category-count">{category.products} products</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="products-header">
          <h2>Popular Products</h2>
          {!sample?<a href="#" className="view-all">View all →</a>:<div></div>}
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              {product.discount && <span className="discount">{product.discount}</span>}
              <img src={product.image} alt={product.name} className="product-img" />
              
              {/* Product Details */}
              <div className="product-info">
                <div className="product-text">
                  <p className="product-name">{product.name}</p>
                  <p className="product-weight">{product.weight}</p>
                </div>
                <p className="product-price">
                  {product.price} {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                </p>
              </div>
              
              {/* Add Button */}
              <button className="add-btn">+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListView;
