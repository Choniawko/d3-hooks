import React from "react"
import "./index.css"
import { Header } from "../Header"
import { BarChart, AddForm } from "../BarChart"
import { PieChart } from "../PieChart"

function App() {
	return (
		<div className="App">
			<Header />
			<BarChart />
			<AddForm />
			<PieChart />
		</div>
	)
}

export default App
