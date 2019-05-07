import React, { useRef, useState } from "react"
import { useSpring, animated } from "react-spring"

export default ({ graphHeight, item, margin, x, setFocusedColumn }) => {
  const ref = useRef(null)
  const [point, setPoint] = useState({ x: 0, y: 0, visible: false })
  const animatedProps = useSpring({
    from: { height: 0, y: graphHeight + margin.top },
    to: { height: item.height, y: graphHeight + margin.top - item.height },
  })
  const handleMouseOver = () => {
    setPoint({
      x: x(item.subject) + x.bandwidth() / 4,
      y: graphHeight - item.height,
      visible: true,
    })
    setFocusedColumn({ height: graphHeight - item.height + margin.top, subject: item.subject, visible: true })
  }
  const handleMouseOut = () => {
    setPoint({ ...point, visible: false })
    setFocusedColumn({ height: 0, subject: "", visible: false })
  }
  return (
    <>
      {point.visible && (
        <text x={point.x} y={point.y}>
          {item.height}
        </text>
      )}
      <animated.rect
        x={x(item.subject)}
        y={animatedProps.y}
        width={x.bandwidth()}
        height={animatedProps.height}
        className="element"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={ref}
      />
    </>
  )
}
