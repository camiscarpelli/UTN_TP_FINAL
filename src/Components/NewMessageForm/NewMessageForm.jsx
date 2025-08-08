import React, { useContext } from 'react';
import './NewMessageForm.css';
import { ContactContext } from '../../Context/ContactContext';




const NewMessageForm = () => {

    const {addNewMessage} = useContext(ContactContext)
    
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value

        addNewMessage(new_message_text)

        event.target.message.value = ''
    }


    return (
        <form onSubmit={handleSubmitSendMessageForm}>

            <div className='message-screen'>

                <div className='message-attachment-button'>
                    <button>
                        <i class="bi bi-paperclip"></i>
                    </button>
                </div>

                <div className='message-emoji'>
                    <button>
                        <i class="bi bi-emoji-smile"></i>
                    </button>
                </div>

                <label htmlFor="message"></label>

                <div className='message-input-container'>

                <input  type="text" placeholder='Escribe un mensaje' id='message' name='message' required />

                </div>  


                <div className='message-send-button'>

                <button type='submit'>

                <i class="bi bi-send-fill"></i>

                </button>

            </div>

            </div>

        </form>
    )
}


export {NewMessageForm}