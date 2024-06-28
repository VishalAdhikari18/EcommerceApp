import React, { useEffect, useState } from 'react';
import '../CSS/cart.css';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { cart_items } from '../services/reducer/reducer';

const Cart = () => {

    const data = useSelector( state =>  { return state.cart_items } );
    const { username } = useParams();  
    const [ cartdata , setCartdata ] = useState(data) ;
    const keys = Object.keys(cartdata);
    const values = Object.values(data);
    const [ totalamount , setTotalamount ] = useState(0) ;

    useEffect( () => {

        const calculateTotalAmount = () => {
            let total = 0;
            keys.forEach(key => {
                total = total + (cartdata[key].price) * cartdata[key].quantity ;
            });
            setTotalamount( total.toFixed(2) ) ;
        }
        
        calculateTotalAmount()                  // Depend on data and keys array

    },[cartdata,keys]);


    const incrementQ = (key) => {
        
        setCartdata(prevItems => ({
            ...prevItems,
            [key]: {
                ...prevItems[key],
                quantity: prevItems[key].quantity + 1
            }
        }));
    };

    const decrementQ = (key) => {
        
        if ( cartdata[key].quantity > 1) {
            setCartdata(prevItems => ({
                ...prevItems,
                [key]: {
                    ...prevItems[key],
                    quantity: prevItems[key].quantity - 1
                }
            }));
        }
        else
        {
            const updatedCartData = { ...cartdata };
            delete updatedCartData[key];
            setCartdata(updatedCartData);
        }
    }
 
  return (
    <>  
        <nav class="navbar">
                    <h2><Link to='/' >EcommerceApp</Link></h2>
                    <h2><Link to={`/user/${username}`} >Profile</Link></h2>
        </nav>
        <h1>Cart Items</h1>

        <div className='cart-container'>
            <div className="cart-item">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Increment</th>
                            <th>Decrement</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            keys.map( (item,index)=> {
                                
                            return(
                                <tr key={cartdata[item].id}>
                                    <td>{cartdata[item].title}</td>
                                    <td><button className="quantity-btn" onClick={ () => incrementQ(item)}>+</button></td>
                                    <td><button className="quantity-btn" onClick={ () => decrementQ(item)}>-</button></td>
                                    <td>{cartdata[item].quantity}</td>
                                    <td>{cartdata[item].price}</td>
                                   
                                </tr>            
                            )})
                        }
                                    <tr>
                                        <th>Total:</th>
                                        <th>{totalamount}</th>
                                    </tr>
                    </tbody>
                </table>
            </div>
            <button>Checkout</button>
        </div>
        
    </>
  );
}

export default Cart;
