import React, { useRef } from "react"
import * as d3 from "d3"
import "./Content.css"

export default ({ data, width, height, margin }) => {
  const x = d3
    .scaleBand()
    .padding(0.1)
    .range([0, width])
    .domain(data.map(d => d.subject))
  const ref = useRef(null)
  return (
    <g transform={`translate(${margin.left},0)`} ref={ref}>
      {data.map(d => (
        <rect
          key={d.subject}
          x={x(d.subject)}
          y={height + margin.top - d.height}
          width={x.bandwidth()}
          height={d.height}
          className="element"
          style={{ fill: d.color }}
        />
      ))}
    </g>
  )
}
