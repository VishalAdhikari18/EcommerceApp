import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [ loggedin , setLoggedin ] = useState(null) ;
  const [ err , setErr ] = useState(0) ;
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault() ;

    try {
        const response = await fetch('https://667d3e6e297972455f64355e.mockapi.io/register/register');
       
        const data = await response.json();
        const user = data.find(user => user.userid === userid);
       
        if( user )
        {
            if( user.password === password ){
                setLoggedin(1) ; 
                navigate(`/user/${user.username}`);
            }
            else
                setErr(1);   
        }
        else
            setErr(1);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
  };
 

  return (
    <> 
        <nav class="navbar">
            <h2><Link to='/' >EcommerceApp</Link></h2>
            <div>
                <h2><Link to='../register' >Register</Link></h2>
            </div>
        </nav>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
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
        <button type="submit">Login</button>
        {loggedin === 1? <strong>User has been logged in</strong>: null }
        {err === 1? <strong>Invalid login credentials</strong>: null }
      </form>
    </div>
    </>
  );
};

export default Login;
