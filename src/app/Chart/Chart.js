import React, { useState, useEffect } from "react"
import { LeftAxis, BottomAxis, Content } from "."

const initData = [
  { height: 50, subject: "subject #1" },
  { height: 20, subject: "subject #2" },
  { height: 250, subject: "subject #3" },
  { height: 30, subject: "subject #4" },
  { height: 300, subject: "subject #5" },
  { height: 30, subject: "subject #6" },
]

const margin = { top: 20, right: 30, bottom: 40, left: 40 }
const width = 600 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

export default () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(initData)
  }, [data])
  return (
    <svg height="400" width="600" className="container">
      <LeftAxis translate={{ x: margin.left, y: margin.top }} {...{ height }} />
      <BottomAxis translate={{ x: margin.left, y: height + margin.top }} {...{ data, width }} />
      <Content {...{ width, height, data, margin }} />
    </svg>
  )
}
