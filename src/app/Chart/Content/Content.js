import React, { useRef } from "react"
import * as d3 from "d3"
import "./Content.css"
import { Column } from "."

export default ({ data, width, height, margin }) => {
  const x = d3
    .scaleBand()
    .padding(0.02)
    .range([0, width])
    .domain(data.map(d => d.subject))
  const ref = useRef(null)
  return (
    <g transform={`translate(${margin.left},0)`} ref={ref}>
      {data.map(item => (
        <Column key={item.subject} {...{ height, item, margin, x }} />
      ))}
    </g>
  )
}
