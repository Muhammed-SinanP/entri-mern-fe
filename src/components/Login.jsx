
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://entri-mern-be-1.onrender.com/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <>
    <form onSubmit={handleLogin}>
      <div className='input-element'>
      <label htmlFor="login-email">Enter your email</label>
      <input id='login-email' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='input-element'>
      <label htmlFor="login-email">Enter your password</label>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>

    </form>
    <br />
    <p>Not registered? <span onClick={()=>navigate("/signup")}>Register</span></p>
    </>
  );
};

export default Login;
