import React from 'react';
import logo from '../../assets/images/logo.jpg';
import './logo.css';

const Logo: React.FC = () => {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
    )
}
export default Logo
