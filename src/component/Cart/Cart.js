import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.salary;
    }

    const element1 = <FontAwesomeIcon icon={faUser} />
    const element2 = <FontAwesomeIcon icon={faDollarSign} />


    return (

        <div className="box" >
            <h3 className="cart-txt">Selected Programmer</h3>
            <br />
            <h4> <span className="cart-txt">Total: </span> {element1} {props.cart.length}</h4>
            <h4> <span className="cart-txt">Total: </span> {element2} {total}</h4>
        </div>
    );
};

export default Cart;