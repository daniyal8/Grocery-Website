import React from 'react';
import Carousel from './Carousel';
import SecondCorousel from './Secondcrousel/Corousel'

function Home() {
    return(
        <div>
            <h1>Hello from Home</h1>
            <Carousel />
            <SecondCorousel />
        </div>
    );
}
export default Home