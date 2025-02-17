import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const API_URL = "http://localhost:3000/category"; // Adjust API URL as needed

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Add a new category
  const addCategory = async (category, file) => {
    try {
      const formData = new FormData();
      formData.append("name", category.name);
      if (file) {
        formData.append("image", file);
      }
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCategories([...categories, response.data]);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  // Update a category
  const updateCategory = async (id, category, file) => {
    try {
      const formData = new FormData();
      formData.append("name", category.name);
      if (file) {
        formData.append("image", file);
      }
      const response = await axios.put(`${API_URL}/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCategories(categories.map((cat) => (cat._id === id ? response.data : cat)));
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  // Delete a category
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
