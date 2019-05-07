import React, { useEffect } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/BarChart/actionCreators"
import { LeftAxis, BottomAxis, Content } from "."

const BarChart = ({
	getData,
	data,
	margin,
	graphHeight,
	graphWidth,
	focusedColumn,
	setFocusedColumn,
}) => {
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
			<Content
				{...{ graphWidth, graphHeight, data, margin, setFocusedColumn }}
			/>
			{focusedColumn.visible && (
				<line
					id="limit"
					x1={margin.left}
					y1={focusedColumn.height}
					x2={graphWidth + margin.left}
					y2={focusedColumn.height}
				/>
			)}
		</svg>
	)
}
const mapStateToProps = ({
	barChart: { data, margin, graphWidth, graphHeight, focusedColumn },
}) => ({
	data,
	margin,
	graphWidth,
	graphHeight,
	focusedColumn,
})
const mapDispatchToProps = {
	getData: actionCreators.getData.create,
	setFocusedColumn: actionCreators.setFocusedColumn.create,
}
export default connect(mapStateToProps, mapDispatchToProps)(BarChart)
