 
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './productlist' ;
import { Link } from 'react-router-dom';

// this page is open after the login by the user and after that user can add product to the cart.
const Profile = () => {                                                      
 
 const { username } = useParams();  
  return (
    <>
        <nav class="navbar">
                    <h2><Link to='/' >EcommerceApp</Link></h2>
                    <h2><Link to={`/cart/${username}`}>Cart</Link></h2>
        </nav>
        <div className="login-container">
        <div>s
            <h1>Product List</h1>
            <ProductList username={username}/>
            </div>
        </div>
    </>
  );
}

export default Profile;
