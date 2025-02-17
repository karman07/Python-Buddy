import React, { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Drawer.css";

const Drawer = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <>
      {isOpen && <div className="backdrop" onClick={onClose}></div>}

      <div className={`side-drawer ${isOpen ? "open" : ""}`}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <h5>Browse Sample1</h5>
          <FaTimes className="close-icon" size={22} onClick={onClose} />
        </div>

        {/* Drawer Menu Items with Dropdowns */}
        <ul className="drawer-menu">
          {/* Home Dropdown */}
          <li className="drawer-category" onClick={() => toggleDropdown("home")}>
            <div className="menu-item">
              Home {openDropdown === "home" ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openDropdown === "home" && (
              <ul className="sub-menu">
                <li>Vegetables</li>
                <li>Easter is Coming</li>
                <li>Fresh Fruits</li>
                <li>Exotic Fruits</li>
              </ul>
            )}
          </li>

          {/* Shop Dropdown */}
          <li className="drawer-category" onClick={() => toggleDropdown("shop")}>
            <div className="menu-item">
              About
            </div>
            {/* {openDropdown === "shop" && (
              <ul className="sub-menu">
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
                <li>Accessories</li>
                <li>Footwear</li>
                <li>Offers</li>
              </ul>
            )} */}
          </li>

          {/* Account Dropdown */}
          <li className="drawer-category" onClick={() => toggleDropdown("account")}>
            <div className="menu-item">
              Contact Us
            </div>
            {/* {openDropdown === "account" && (
              <ul className="sub-menu">
                <li>My Profile</li>
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Settings</li>
              </ul>
            )} */}
          </li>

          {/* Pages Dropdown */}
          <li className="drawer-category" onClick={() => toggleDropdown("pages")}>
            <div className="menu-item">
              Blog
            </div>
            {/* {openDropdown === "pages" && (
              <ul className="sub-menu">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
              </ul>
            )} */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;
