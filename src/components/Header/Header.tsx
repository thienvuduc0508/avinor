import React from 'react';
import Logo from '../Logo/Logo';
import './header.css';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <Logo />
            <span>OSL</span>
        </div>
    )
}

export default Header
