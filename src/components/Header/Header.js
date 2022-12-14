import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is Rest Countries!</h2>
            <nav>
                <a className='link' href="/home">Home</a>
                <a className='link' href="/tt">App</a>
                <a className='link' href="/dd">Web</a>
            </nav>
        </div>
    );
};

export default Header;