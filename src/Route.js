import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Products'
import ProductItem from './Components/ProductItem'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart'

function RouteConfig() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/products" component={Product} />
                    <Route path="/Cart" component={Cart}/>
                    <Route path="*" component={()=><h2>404 Page Not Found</h2>}/>
                </Switch>
            </Router>
        </div>
    );
}
export default RouteConfig;