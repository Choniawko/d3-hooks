import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

export default ({ translate, graphHeight }) => {
	const ref = useRef(null)
	useEffect(
		() => {
			const scale = d3
				.scaleLinear()
				.range([graphHeight, 0])
				.domain([0, graphHeight])
			const axis = d3.axisLeft().scale(scale)
			d3.select(ref.current).call(axis)
		},
		[graphHeight],
	)
	return (
		<g transform={`translate(${translate.x},${translate.y})`} ref={ref} />
	)
}
