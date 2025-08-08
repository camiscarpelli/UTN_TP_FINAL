import React, { useState } from 'react'
import { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import './Message.css'
const Message = ({emisor, hora, id, texto, status}) => {
	const {deleteMessageById} = useContext(ContactContext)

	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}
	return (
		<div onContextMenu={handleChangeMessageSelected}>
			<div className='message'>
			<p>{texto}
				<span>{hora}</span>
			</p>
			{/* <span>{hora}</span> */}
			{/* <i class="bi bi-check2-all"></i>  */}
			</div>
			{
				message_selected && <button onClick={() => {deleteMessageById(id)}}>Eliminar</button>
			}
		</div>
	)
}
export default Message
