
import React from 'react';
import '../CSS/home.css';  
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <nav class="navbar">
                        <h2>EcommerceApp</h2>
                        <div>
                            <h2><Link to='login' >Login</Link></h2>
                            <h2><Link to='register' >Register</Link></h2>
                        </div>
                </nav>
            <div className="home">
                <div className="content">
                    <h1>Welcome to My Website</h1>
                    <p>Explore and discover amazing things!</p>
                </div>
            </div>
        </>
    );
};

export default Home;
