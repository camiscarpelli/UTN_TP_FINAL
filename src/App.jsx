import React, {useContext, useState} from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactContextProvider, { ContactContext } from './Context/ContactContext'
import { AppThemeContext } from './Context/AppThemeContext'


const App = () => {
	return (
		<div className='app-container'>
			<Routes>
				<Route
					path='/'
					element={<ContactScreen/>}
				/>
				{/*
				:contact_id es un parametro de busqueda (valor pasado por la URL)
				ponemos :contact_id para indicar que el valor es variable, es decir puede ser:
				/contact/1/messages
				o 
				/contact/2/messages
				etc...
				*/}
				
				<Route 
					path='/contact/:contact_id/messages' 
					element={
						<ContactContextProvider>
							<ChatScreen/>		
						</ContactContextProvider>
					} 
				/>

			</Routes>

		</div>
	)
}



export default App