import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='headertxt'>
            <h2>Chose your <span className='txt-col'>PROGRAMMER</span> </h2>
            <p></p>
            <h3>Budget: <span className='txt-col'>100M</span> </h3>
        </div>
    );
};

export default Header;