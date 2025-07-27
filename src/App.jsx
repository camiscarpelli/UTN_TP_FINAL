import React, { useState } from "react"
import ChatScreen from "../src/Screen/ChatScreen/ChatScreen"
import { Route, Routes } from "react-router"
import ContactScreen from "./Screen/ContactScreen/ContactScreen"
const App = () => {

	return (
		<div>
		<Routes>
			<Route
				path="/" 
				element={<ContactScreen/>}
			/>
			<Route
				path="/contact/:contact_id/messages" 
				element={<ChatScreen/>}
			/>
		</Routes>
		</div>
	)
}


export default App