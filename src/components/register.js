// src/Register.js
import React, { useState } from 'react';
import '../CSS/register.css';  // Reuse the same CSS file for styling
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setuserid] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const newUser = {
        username,
        userid,
        password
      };

    try {
        const response = await fetch('https://667d3e6e297972455f64355e.mockapi.io/register/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
        });
        const data = await response.json();
 
         
        setUsername('');
        setuserid('');
        setPassword('');
        
    } catch (error) {
        console.error('Error registering user:', error);
    }
}

  return (
    <>
         <nav class="navbar">
            <h2><Link to='/' >EcommerceApp</Link></h2>
            <div>
                <h2><Link to='../login' >Login</Link></h2>
            </div>
        </nav>
        <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
        <div className="form-group">
          <label htmlFor="userid">userid</label>
          <input
            type="userid"
            id="userid"
            value={userid}
            onChange={(e) => setuserid(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>

    </>
  );
};

export default Register;
