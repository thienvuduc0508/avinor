import React from 'react';
import './footer.css';
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer'>
                <div className='footer_item' >
                    <span><AiOutlineMail className='mail_icon'/> webredaksjonen@avinor.no</span>
                </div>
                <div className='footer_item'>© Avinor AS</div>
                <div className='footer_item'>Personvernpolicy</div>
        </div>
    )
}

export default Footer
