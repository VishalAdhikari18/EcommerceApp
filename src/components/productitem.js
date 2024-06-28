import React, { useState } from 'react';
import '../CSS/productitem.css';  
import { useDispatch } from 'react-redux';
import { addToCart } from '../services/action/action.js';

const ProductItem = ({product, username}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch1 = useDispatch();

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    const add_cart = () => {   
        let data = { ...product , 'quantity' : quantity } ;
        dispatch1( addToCart(product.id,  data ) );
    }

  return (
    <>
            <div className="product-item">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p className="price">${product.price}</p>
                <div className="quantity-selector">
                    <button className="quantity-button" onClick={decrementQuantity}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="quantity-button" onClick={incrementQuantity}>+</button>
                </div>
                <button className="add-to-cart-button" onClick={add_cart}  >Add to Cart</button>
            </div>
    </>
  );
}

export default ProductItem;
