import React from 'react';
import Fruits from './Fruits/Fruit'
import Veg from './Vegetables/Veg'

function Products() {
    return(
        <div>
            <h1>Hello from Products</h1>
            <Veg />
            <Fruits />
        </div>
    );
}
export default Products;