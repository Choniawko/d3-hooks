import React, { useEffect, useState } from "react"
import * as d3 from "d3"
import "./Content.css"
const initData = [
	{ color: "red", width: "100" },
	{ color: "orange", width: "200" },
	{ color: "white", width: "300" },
	{ color: "orange", width: "400" },
	{ color: "red", width: "500" },
]

const generateData = data =>
	d3
		.select(".container")
		.selectAll("rect")
		.data(data)
		.enter()
		.append("rect")
		.attr("x", ({ width }) => width)
		.attr("y", "0")
		.attr("width", "20")
		.attr("height", "20")
		.attr("class", "element")
		.style("fill", ({ color }) => color)

export default () => {
	const [data, setData] = useState(generateData(initData))
	useEffect(
		() => {
			setData(generateData(data))
		},
		[data],
	)
	return <svg height="400" width="600" className="container" />
}
