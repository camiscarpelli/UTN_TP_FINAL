import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css';


const ContactItem = ({ contact }) => {
    return (
        
        <Link to={`/contact/${contact.id}/messages`}>

        <div className='whatsapp-contact'>
            <div className='contact-img'>
                <img src={contact.img} alt={contact.name} />
            </div>
            <div className='contact-name'>
                <h2>{contact.name}</h2>
            </div>
            <div className='contact-last-connection'>
                <div className='last-connection'>
                <p>{contact.lastConnection}</p>
                </div>
            </div>
        </div>

        </Link>

    );
};



export default ContactItem;