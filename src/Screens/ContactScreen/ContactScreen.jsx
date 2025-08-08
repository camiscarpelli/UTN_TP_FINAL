import React, { useContext, useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService';
import { ContactContext } from '../../Context/ContactContext';
import './ContactScreen.css';

const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);
    const valor = useContext(ContactContext)
	console.log('Este es el valor de mi contexto', valor)
    return (
    <div class="app-container">
        <div class="left-panel">
            
            {/* <div className='chat-left-bar'>
                <span href="#">
                    <i class="bi bi-people"></i>
                </span>
                <span href="#">
                    <i class="bi bi-gear"></i>
                </span> 
            </div>  */}
            
        <div class="contact-list-container">
            
            <div class="contact-list-header">
            
            <h1>WhatsApp</h1>
            <span href="#">
                <i class="bi bi-three-dots-vertical"></i>
            </span>

            </div>

            <div class="search-bar">
                <input className='search-bar-input' type="text" placeholder="Buscar un chat o iniciar uno nuevo"/>
            </div>

            <div class="contact-items">
                <button>Todos</button>
                <button>No leídos</button>
                <button>Favoritos</button>
                <button>Grupos</button>
            </div>

        </div>

        </div>




            <ContactList contacts={contactsState} />
    </div>

    );
};

    export default ContactScreen;

    /*<div class="right-panel">
        <div class="chat-screen-container">
            <div class="chat-header"></div>
            <div class="message-list-container"></div>
            <form class="new-message-form"></form>
        </div>
        </div>
        */