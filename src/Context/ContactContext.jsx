/* 
Para que sirve contexto?
Nos permite evitar el prop drilling

Que es el prop drilling?
Cuando transferimos props a un componente hijo y ese hijo se las trasfiere a un componente hijo y asi sucesivamente
*/

import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContactById } from "../services/contactService";

//Paso 1:
export const ContactContext = createContext()

//Paso 2: Crear un proveedor
const ContactContextProvider = ({ children }) => {
    //Obtengo el id de contacto
    const { contact_id } = useParams()

    //Creo un estado donde guardo el contacto seleccionado
    const [contact_info, setContactInfo] = useState(null)


    //Nos permite controlar la cantidad veces que se recarga una funcion
    //Recibe 2 parametros
    //1: El efecto: la funcion que queremos controlar
    //2: Las dependencias: Los estados que mi efecto escuchara para re-llamar al efecto (Si esta vacio solo se llamara 1 vez)
    useEffect(
        //Este efecto se re-llamara cada vez que el contact_id cambie de valor
        () => {
            //Hacer un atraso de tiempo, hacemos que cierta funcion se ejecute despues de cierto tiempo
            //1 param: La funcion a atrasar
            //2 param: El tiempo de atraso en milisegundos
            setTimeout(
                () => {
                    //Busco el contacto seleccionado
                    const contact_selected = getContactById(contact_id)

                    //Guardo mi estado de contacto seleccionado
                    setContactInfo(contact_selected)
                },
                2000
            )


        },
        //Quiero que se recargue el efecto si mi id de contacto cambia
        [contact_id]
    )

    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of contact_info.messages) {
            if (message.id !== message_id) {
                new_message_list.push(message)
            }
        }

        setContactInfo(
            { ...contact_info, messages: new_message_list }
        )
    }

    const addNewMessage = (text) => {

        const new_mesage = {
            emisor: 'YO',
            hora: '11:10', //Investigar acerca de Date.
            texto: text,
            status: 'no-visto',
            id: contact_info.messages.length + 1
        }
        //Clonar la lista de mensajes (Porque: El clon al ser otra variable PERO NO UN ESTADO si lo vamos a poder mutar)
        const cloned_messages_list = [...contact_info.messages]
        //Este push es valido porque no estamos mutando en estado 'messages' sino mas bien el clon de ese estado
        cloned_messages_list.push(new_mesage)
        setContactInfo(
            { ...contact_info, messages: cloned_messages_list }
        )
        
    }

    const deleteAllMessages = () => {
        setContactInfo(
            { ...contact_info, messages: [] }
        )
    }



    return (
        <ContactContext.Provider value={
            //Este objeto es el valor que podran acceder de nuestro contexto
            {
                contact_info: contact_info,
                deleteAllMessages: deleteAllMessages,
                deleteMessageById: deleteMessageById,
                addNewMessage: addNewMessage
            }
        }>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider