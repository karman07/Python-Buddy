import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const API_URL = "http://localhost:3000/menu";

    const [menuItems, setMenuItems] = useState([]);
    
    // Fetch all menu items
    const fetchMenuItems = async () => {
        try {
            const response = await axios.get(API_URL);
            setMenuItems(response.data);
        } catch (error) {
            console.error("Error fetching menu items:", error);
        }
    };

    // Fetch single menu item
    const fetchMenuItem = async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching menu item:", error);
        }
    };

    // Add new menu item
    const addMenuItem = async (formData) => {
        try {
            const response = await axios.post(API_URL, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            fetchMenuItems();
            return response.data;
        } catch (error) {
            console.error("Error adding menu item:", error);
        }
    };

    // Update menu item
    const updateMenuItem = async (id, formData) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            fetchMenuItems();
            return response.data;
        } catch (error) {
            console.error("Error updating menu item:", error);
        }
    };

    // Delete menu item
    const deleteMenuItem = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            fetchMenuItems();
        } catch (error) {
            console.error("Error deleting menu item:", error);
        }
    };

    // Toggle availability
    const toggleAvailability = async (id, available) => {
        try {
            const response = await axios.put(`${API_URL}/${id}/availability`, { available });
            fetchMenuItems();
            return response.data;
        } catch (error) {
            console.error("Error toggling availability:", error);
        }
    };

    // Sort by cuisine
    const sortByCuisine = async (order = "asc") => {
        try {
            const response = await axios.get(`${API_URL}/sort/by-cuisine?order=${order}`);
            setMenuItems(response.data);
        } catch (error) {
            console.error("Error sorting menu:", error);
        }
    };

    useEffect(() => {
        fetchMenuItems();
    }, []);

    return (
        <MenuContext.Provider
            value={{
                menuItems,
                fetchMenuItem,
                addMenuItem,
                updateMenuItem,
                deleteMenuItem,
                toggleAvailability,
                sortByCuisine,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};
