import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <nav className="nav"> 
            <h1 className="head">Grocery Store</h1>
            <div className="links">
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/products">Products</Link>
           <Link to="/Cart">Cart</Link>
           </div>
           </nav>
        </div>
    );
}
export default NavBar;