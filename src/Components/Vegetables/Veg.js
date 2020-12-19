import React from 'react';
import Vegdata from './VegData';
import './Veg.css'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom';

function Veg() {
    const addtocart = (Cart) => {
        return 
        <Link to="/cart"><div>add to cart</div></Link>
    };
    return(
        <div>
            <h1 className="head2">Vegetables</h1>
        <div className="main">
            {Object.keys(Vegdata).map(keyName=>{
                const veg = Vegdata[keyName];
                return(
                    <div key={keyName}>
            <div className="productContainer">
                <h1>{veg.name}</h1>
                <img className="image" src={veg.src} alt="fruit" />
                <h3>Rs{veg.price}</h3>
                <button className="button" onClick={() => addtocart(Cart)}>Add to Cart</button>
                </div>
            </div>
                );
            })};
        </div>
        </div>
    );
    return (
        <div className='dis-pro-container'>
            {Veg}
        </div>
    )
}


export default Veg;