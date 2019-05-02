import React from "react"
import { useSpring, animated } from "react-spring"
import "./index.css"
import { Header } from "../Header"
import { Content } from "../Content"

function App() {
	const props = useSpring({ opacity: 1, from: { opacity: 0 } })
	return (
		<animated.div style={props} className="App">
			<Header />
			<Content />
		</animated.div>
	)
}

export default App
