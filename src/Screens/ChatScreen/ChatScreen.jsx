import React, { useContext, useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import { ContactContext } from '../../Context/ContactContext'
import './ChatScreen.css'


const ChatScreen = () => {

	const { contact_info, deleteAllMessages } = useContext(ContactContext)


	return (
		<div>

			{
				contact_info
				?
				(
					<div className='chat-screen-container'>
						{
							contact_info.messages.length > 0
							&&
							(
								<div className='chat-header'>
									<img src={contact_info.img}/>
									<h1>{contact_info.name}</h1>

								<div className='chat-connection'>
									<h2>{contact_info.connectionStatus}</h2>
								</div>

								</div>

							)
						}
						
						<MessagesList />


						<NewMessageForm/>

						
							<button className='delete-all-messages' onClick={deleteAllMessages}>
							<i class="bi bi-trash"></i>
							</button>
					</div>
				)
				: <span>Cargando...</span>
			}

		</div>
	)
} 




export default ChatScreen