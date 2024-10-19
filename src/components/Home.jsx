
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://entri-mern-be-1.onrender.com/api/auth/home', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(response.data.message);
    };
    fetchMessage();
  }, []);

  return <h1>{message}</h1>;
};

export default Home;
