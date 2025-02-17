import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const API_URL = "http://localhost:3000/orders"; // Adjust API URL as needed

  // Fetch all orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(API_URL);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // Add a new order
  const addOrder = async (order) => {
    try {
      const response = await axios.post(API_URL, order);
      setOrders([...orders, response.data]);
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  // Update an order
  const updateOrder = async (id, updatedOrder) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedOrder);
      setOrders(orders.map((order) => (order._id === id ? response.data : order)));
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  // Change order status
  const changeOrderStatus = async (id, status) => {
    try {
      const response = await axios.put(`${API_URL}/${id}/status`, { status });
      setOrders(orders.map((order) => (order._id === id ? response.data : order)));
    } catch (error) {
      console.error("Error changing order status:", error);
    }
  };

  // Delete an order
  const deleteOrder = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setOrders(orders.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrder,
        deleteOrder,
        changeOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
