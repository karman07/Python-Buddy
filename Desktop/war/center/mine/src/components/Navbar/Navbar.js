// src/components/Navbar.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import Drawer from "../drawer/Drawer";
import CartDrawer from "../cartDrawer/CartDrawer";
import SearchResults from "../search/SearchResults"; // Import the Search Results component
import "./Navbar.css";

const categories = [
  {
    title: "North Indian",
    items: [
      "Paneer Dishes",
      "Dal Makhani",
      "Tandoori",
      "Parathas",
      "Punjabi Thali",
    ],
  },
  {
    title: "South Indian",
    items: ["Dosas", "Idli", "Vada", "Sambhar", "Uttapam"],
  },
  {
    title: "Street Food",
    items: ["Pani Puri", "Bhel Puri", "Chaat", "Vada Pav", "Pav Bhaji"],
  },
  {
    title: "Beverages",
    items: ["Lassi", "Masala Chai", "Sugarcane Juice", "Aam Panna", "Jaljeera"],
  },
  {
    title: "Desserts",
    items: ["Gulab Jamun", "Rasgulla", "Kheer", "Rabri", "Barfi"],
  },
];

// Sample products for search functionality
const products = [
  {
    name: "Paneer Butter Masala",
    price: 12.99,
    image:
      "https://cartzilla-html.createx.studio/assets/img/shop/grocery/10.png",
  },
  {
    name: "Dosa",
    price: 8.99,
    image:
      "https://cartzilla-html.createx.studio/assets/img/shop/grocery/10.png",
  },
  {
    name: "Gulab Jamun",
    price: 5.49,
    image:
      "https://cartzilla-html.createx.studio/assets/img/shop/grocery/10.png",
  },
];

const Navbar = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Paneer Butter Masala",
      price: 12.99,
      quantity: 1,
      image:
        "https://cartzilla-html.createx.studio/assets/img/shop/grocery/10.png",
    },
    {
      name: "Dosa",
      price: 8.99,
      quantity: 2,
      image:
        "https://cartzilla-html.createx.studio/assets/img/shop/grocery/10.png",
    },
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 fixed-navbar">
        <div className="container-fluid d-flex align-items-center">
          <FaBars
            className="menu-icon me-3"
            size={24}
            onClick={() => setDrawerOpen(true)}
          />
          <span className="navbar-brand">Sample1</span>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-wide">
              <div className="categories-grid px-3 py-2">
                {categories.map((category, index) => (
                  <div key={index} className="category-column">
                    <strong>{category.title}</strong>
                    {category.items.map((item, idx) => (
                      <div key={idx} className="category-item">
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex align-items-center ms-3 flex-grow-1 position-relative">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-success ms-2">
              <FaSearch />
            </button>

            {/* Search Results */}
            <div className="position-absolute w-100" style={{ zIndex: 1050 }}>
              <SearchResults searchQuery={searchQuery} products={products} />
            </div>
          </div>

          <div className="navbar-icons ms-3 d-flex align-items-center">
            <div
              className="cart-container position-relative"
              onClick={() => setCartOpen(true)}
            >
              <FaShoppingCart className="icon cart-icon" size={24} />
              {cartItems.length > 0 && (
                <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
};

export default Navbar;
