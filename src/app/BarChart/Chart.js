import React, { useEffect } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/BarChart/actionCreators"
import { LeftAxis, BottomAxis, Content } from "."

const BarChart = ({ getData, data, margin, graphHeight, graphWidth }) => {
	useEffect(
		() => {
			getData()
		},
		[getData],
	)
	return (
		<svg height="400" width="600" className="container">
			<LeftAxis
				translate={{ x: margin.left, y: margin.top }}
				{...{ graphHeight }}
			/>
			<BottomAxis
				translate={{ x: margin.left, y: graphHeight + margin.top }}
				{...{ data, graphWidth }}
			/>
			<Content {...{ graphWidth, graphHeight, data, margin }} />
		</svg>
	)
}

const mapStateToProps = ({
	barChart: { data, margin, graphWidth, graphHeight },
}) => ({
	data,
	margin,
	graphWidth,
	graphHeight,
})
const mapDispatchToProps = {
	getData: actionCreators.getData.create,
}
export default connect(mapStateToProps, mapDispatchToProps)(BarChart)
