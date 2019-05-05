import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

export default ({ translate, height }) => {
  const ref = useRef(null)
  useEffect(() => {
    const scale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, height])
    const axis = d3.axisLeft().scale(scale)
    d3.select(ref.current).call(axis)
  }, [height])
  return <g transform={`translate(${translate.x},${translate.y})`} ref={ref} />
}
