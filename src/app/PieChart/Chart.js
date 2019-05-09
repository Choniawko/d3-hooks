import React, { useEffect } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/BarChart/actionCreators"
import { pie, path, color } from "."

const PieChart = ({ getData, data }) => {
	useEffect(
		() => {
			getData()
		},
		[getData],
	)
	return (
		<svg height="400" width="600" className="container">
			<g transform={`translate(${200},${200})`}>
				{pie(data).map(el => (
					<g key={el.index} className="arc">
						<path
							d={path(el)}
							style={{
								fill: color(el.index),
							}}
						/>
					</g>
				))}
			</g>
			<g transform={`translate(${500},${100})`}>
				{pie(data).map(el => (
					<g
						key={el.index}
						transform={`translate(${0},${el.index * 25})`}
					>
						<rect
							x={-25}
							y={-15}
							rx={3}
							ry={3}
							width={20}
							height={20}
							style={{ fill: color(el.index) }}
						/>
						<text>{el.data.subject}</text>
					</g>
				))}
			</g>
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
export default connect(mapStateToProps, mapDispatchToProps)(PieChart)
