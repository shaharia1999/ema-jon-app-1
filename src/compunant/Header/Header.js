import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo}></img>
                <div>
                    <Link to='/home'>Home</Link>
                    <Link to="/">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Inventroty</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                </div>

            </nav>
           
            
        </div>
    );
};

export default Header;