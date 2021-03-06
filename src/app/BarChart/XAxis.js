import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

export default ({ translate, graphWidth, data }) => {
	const ref = useRef(null)
	useEffect(
		() => {
			const scale = d3
				.scaleBand()
				.padding(0.02)
				.range([0, graphWidth])
				.domain(data.map(d => d.subject))
			const axis = d3.axisBottom().scale(scale)
			d3.select(ref.current).call(axis)
		},
		[graphWidth, data],
	)
	return (
		<g transform={`translate(${translate.x},${translate.y})`} ref={ref} />
	)
}
