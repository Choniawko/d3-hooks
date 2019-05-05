import React from "react"
import { useSpring, animated } from "react-spring"

export default ({ height, item, margin, x }) => {
  const animatedProps = useSpring({
    from: { height: 0, y: height + margin.top },
    to: { height: item.height, y: height + margin.top - item.height },
  })
  return (
    <animated.rect
      x={x(item.subject)}
      y={animatedProps.y}
      width={x.bandwidth()}
      height={animatedProps.height}
      className="element"
      style={{ fill: "#61dafb" }}
    />
  )
}
