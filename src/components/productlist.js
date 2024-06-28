import React, { useEffect, useState } from 'react';
import ProductItem from './productitem';
import { Link } from 'react-router-dom';
import '../CSS/productlist.css' ;
// import SearchFilterSort from './SearchFilterSort';

function ProductList({username}) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [ category , setCategory ] = useState(0) ;

  var filteredProducts = null ;

  useEffect(() => {

    if( category )
    {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => setProducts(json));
    }
    else
    {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json));
         
    }
  }, [category]);
  
    const updateProductlist = () => {
            setCategory( searchTerm ) ;
            filteredProducts = products
            .filter(product => 
                 product.category === searchTerm )
    }

  return (
    <div>
        <div className="search-container">
            <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={ updateProductlist }>Search</button>
        </div>
        { filteredProducts == null?
                <div className="product-list">
                {products.map(product => (
                <ProductItem key={product.id} product={product} />
                ))}
                </div>:
                <div className="product-list">
                        {filteredProducts.map(product => (
                        <ProductItem key={product.id} product={product} username={username} />
                        ))}
                </div>
        }
    </div>
  );
}

export default ProductList;
