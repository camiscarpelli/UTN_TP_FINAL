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

            <div className='contact-last-message'>
            <p className='last-message'>{contact.lastMessage}</p>
            </div>

        </div>
        


        <div className='contact-last-connection'>
            <p className='last-connection'>{contact.lastConnection}</p>
        </div>



            {/*
            <div className='contact-img'>
            <img src={contact.avatar} alt={contact.name} />
            </div>
            */}
        </div>  

        

        </Link>
        
        

    );
};


export default ContactItem;