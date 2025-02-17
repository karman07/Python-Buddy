import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext";
import { CategoryProvider } from "./context/CategoryContext";
import { OrderProvider } from "./context/OrderContext";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import CartPage from "./pages/cart/Cart";
import OrderPage from "./pages/order/OrderPage";
import ProductPage from "./pages/product/ProductPage";
import ListView from "./components/view/ListView";
import CategoryList from "./components/CategoryList/CategoryList";

function App() {
  return (
    <MenuProvider>
      <CategoryProvider>
        <OrderProvider>
          <Router>
            <Navbar />
            <CategoryList/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/list-view" element={<ListView sample={true} />} />
            </Routes>
            <Footer />
          </Router>
        </OrderProvider>
      </CategoryProvider>
    </MenuProvider>
  );
}

export default App;
