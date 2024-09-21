import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
};

export default Home;
