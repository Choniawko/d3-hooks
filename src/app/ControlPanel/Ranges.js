import React from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/BarChart/actionCreators"

const ControlPanel = ({ items, setColumnValue }) => {
	const handleChange = (id, height) => e => {
		setColumnValue({ id, height: JSON.parse(e.target.value) })
	}
	return (
		<div>
			{items.map(({ id, height, subject }) => (
				<input
					key={id}
					type="range"
					name={`range_${id}`}
					min={0}
					max={350}
					onChange={handleChange(id, height)}
				/>
			))}
		</div>
	)
}
const mapStateToProps = ({ barChart: { data } }) => ({
	items: data,
})
const mapDispatchToProps = {
	setColumnValue: actionCreators.setColumnValue.create,
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
