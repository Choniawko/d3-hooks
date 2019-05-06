import React, { useRef } from "react"
import * as d3 from "d3"
import "./Content.css"
import { Column } from "."

export default ({ data, graphWidth, graphHeight, margin }) => {
	const x = d3
		.scaleBand()
		.padding(0.02)
		.range([0, graphWidth])
		.domain(data.map(d => d.subject))
	const ref = useRef(null)
	return (
		<g transform={`translate(${margin.left},0)`} ref={ref}>
			{data.map(item => (
				<Column
					key={item.subject}
					{...{ graphHeight, item, margin, x }}
				/>
			))}
		</g>
	)
}
