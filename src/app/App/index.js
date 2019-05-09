import React from "react"
import "./index.css"
import { Header } from "../Header"
import { BarChart, AddForm } from "../BarChart"
import { PieChart } from "../PieChart"
import { ControlPanel } from "../ControlPanel"

function App() {
	return (
		<div className="App">
			<Header />
			<BarChart />
			<ControlPanel />
			<AddForm />
			<PieChart />
		</div>
	)
}

export default App
