import * as d3 from "d3"

export const color = d3.scaleOrdinal(d3.schemePaired)
export const pie = d3
	.pie()
	.sort(null)
	.value(({ height }) => height)
export const path = d3
	.arc()
	.outerRadius(150)
	.innerRadius(0)
