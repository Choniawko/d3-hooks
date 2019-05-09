import React, { useEffect } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/BarChart/actionCreators"
import { pie, path, color } from "./D3Math"
import { Legend } from "."

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
								opacity: 1,
							}}
						/>
					</g>
				))}
			</g>
			<Legend {...{ data }} />
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
