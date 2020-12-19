import React from 'react';
import Fruitdata from './FruitData';
import './Fruit.css'

function Fruit() {
    return(
        <div>
            <h1 className="head1">Fruits</h1>
        <div className="main">
            {Object.keys(Fruitdata).map(keyName=>{
                const fruit = Fruitdata[keyName];
                // console.log(keyName);
                // console.log(fruit);
                return(
                    <div key={keyName}>
                <div className="productContainer">
                <h1>{fruit.name}</h1>
                <img className="image" src={fruit.src} alt="fruit" />
                <h3>{fruit.price}Rs</h3>
                <button className="button">Add to Cart</button>
                </div>
                </div>
                );
            })};
        </div>
        </div>
    );
}
export default Fruit;