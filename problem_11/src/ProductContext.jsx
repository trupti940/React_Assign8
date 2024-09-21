import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.example.com/products'); // Replace with your API URL
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
    }
    setLoading(false);
  };

  // Fetch single product by ID
  const fetchProductById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/products/${id}`);
      return response.data;
    } catch (err) {
      setError('Failed to fetch product details');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProductById, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
