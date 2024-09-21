import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const category = searchParams.get('category') || '';
      const priceSort = searchParams.get('price') || 'asc';
      const response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?category=${category}&sort=price&order=${priceSort}`
      );
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, [searchParams]);

  const handleCategoryChange = (e) => {
    setSearchParams({ category: e.target.value });
  };

  const handleSortChange = (e) => {
    setSearchParams({ price: e.target.value });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      <div>
        <label>
          Filter by category:
          <select onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </label>

        <label>
          Sort by price:
          <select onChange={handleSortChange}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </label>
      </div>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
