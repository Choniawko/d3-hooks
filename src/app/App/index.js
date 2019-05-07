import React from "react"
import "./index.css"
import { Header } from "../Header"
import { BarChart, AddForm } from "../BarChart"

function App() {
	return (
		<div className="App">
			<Header />
			<BarChart />
			<AddForm />
		</div>
	)
}

export default App
