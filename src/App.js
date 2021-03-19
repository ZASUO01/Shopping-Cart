import React, {useState, useEffect} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';
import About from './views/About';
import Header from './components/Header';
import CheckOut from './views/Checkout';

const App = () => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(cart.length);

    const addToCart = (data) => {
        const alreadyIn = cart.map((item) => item.key).includes(data.key);
        if(alreadyIn){
            changeItemQtt(data.key, 1);
        }else{
            setCart([...cart, {...data, qtt:1}]);
        }
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.key !== id));
    }

    const changeItemQtt = (id, val) => {
        setCart(
            cart.map((item)  =>
                item.key === id ? {...item, qtt: item.qtt + val} : item
            )
        )
    }

    const resetStore = () => {
        setCart([]);
        setQuantity(cart.length);
    }

    useEffect(() => {
        setQuantity(cart.length);
    },[cart])

    return(
        <HashRouter basename="/">
            <Header qtt={quantity}/>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/shop'>
                    <Shop />
                </Route>
                <Route exact path='/shop/:id'>
                    <CheckOut onAdd={addToCart}/>
                </Route>
                <Route exact path='/cart'>
                    <Cart items={cart} onDelete={deleteItem} onChange={changeItemQtt} onReset={resetStore}/>
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App;