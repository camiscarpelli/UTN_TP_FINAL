import React, { useState } from 'react'
const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {

	/* 
@@ -7,11 +7,19 @@ const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {
	Incorrecto: <button onClick={alert('hola')}></button> => Apenas se cargue el boton se ejecutara la alerta
	Correcto: <button onClick={() => alert('hola')}></button> => La funcion solo se ejecutara al dar click
	*/
	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}
	return (
			<div onContextMenu={handleChangeMessageSelected}>
			<p>{texto}</p>
			<span>{hora}</span>
			{
				message_selected && <button onClick={() => {deleteMessageById(id)}}>Eliminar</button>
			}
		</div>
	)
}

export default Message