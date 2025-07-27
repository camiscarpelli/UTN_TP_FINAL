import React, { useContext } from "react"
import Message from "../Message/Message"
import { ContactContext } from "../../Context/ContactContext"

const MessagesList = () => {
	const {contact_info} = useContext(ContactContext)
	//Esto es un ejemplo de renderizado condicional
	//Tarea para investigar, esto se puede hacer con algo llamado operador ternario o con && (AND)
	if( contact_info.messages.length === 0 ){
		return <span>Aun no tienes mensajes!</span>
	}
	
	const lista_mensajes = contact_info.messages.map(
		function (message) {
			return <Message 
				key={message.id}
				emisor={message.emisor} 
				hora={message.hora} 
				id={message.id} 
				texto={message.texto} 
				status={message.status}
			/>
		}
	)
	
	return (
		<div>
			{lista_mensajes}
		</div>
	)
}
export default MessagesList