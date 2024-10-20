
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSignup} id='sign-up'>
        <div className='input-element'>
      <label htmlFor="user-name">Enter your name</label>
      <input id='user-name' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className='input-element'>
      <label htmlFor="user-email">Enter your email</label>
      <input id='user-email' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      
      <div className='input-element'>
      <label htmlFor="user-password">Enter a password</label>
      <input id='user-password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      <button type="submit">Signup</button>
    </form>

<br />
<p>Already registered? <span onClick={()=>navigate("/login")}>Login</span></p>
</>
  );
};

export default Signup;
