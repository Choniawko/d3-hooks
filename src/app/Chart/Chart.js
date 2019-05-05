import React from "react"
import "./Content.css"
import { LeftAxis, BottomAxis, Content } from "."

const initData = [
  { color: "red", height: 50, subject: "subject #1" },
  { color: "orange", height: 20, subject: "subject #2" },
  { color: "white", height: 250, subject: "subject #3" },
  { color: "orange", height: 30, subject: "subject #4" },
  { color: "red", height: 300, subject: "subject #5" },
  { color: "orange", height: 30, subject: "subject #6" },
]

const margin = { top: 20, right: 30, bottom: 40, left: 40 }
const width = 600 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

export default () => {
  return (
    <svg height="400" width="600" className="container">
      <LeftAxis translate={{ x: margin.left, y: margin.top }} height={height} />
      <BottomAxis
        translate={{ x: margin.left, y: height + margin.top }}
        data={initData}
        width={width}
      />
      <Content data={initData} margin={margin} width={width} height={height} />
    </svg>
  )
}
