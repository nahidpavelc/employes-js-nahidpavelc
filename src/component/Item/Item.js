import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Item.css';

const Item = () => {
    const [item, setItem] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./item.JSON')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const handleAddToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }


    return (
        <div className="container">
            <div className="iten-container row ">
                {
                    item.map(item => <Programmer 
                        key = {item.key}
                        programmer={item}
                        handleAddToCart={handleAddToCart}
                        >
                        </Programmer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Item;