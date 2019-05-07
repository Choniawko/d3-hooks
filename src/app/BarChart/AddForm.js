import React, { useState } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/BarChart/actionCreators"

const BarChartForm = ({ postDataElement }) => {
	const [formData, setFormData] = useState({
		height: 0,
		subject: "",
	})
	const handleSubmit = e => {
		e.preventDefault()
		postDataElement({
			height: JSON.parse(e.target.elements.height.value),
			subject: e.target.elements.subject.value,
		})
	}
	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				name="height"
				onChange={handleChange}
				placeholder="Height"
				type="number"
				required
			/>
			<input
				name="subject"
				onChange={handleChange}
				placeholder="Subject"
				type="text"
				required
			/>
			<button>Submit</button>
		</form>
	)
}

const mapDispatchToProps = {
	postDataElement: actionCreators.postDataElement.create,
}
export default connect(null, mapDispatchToProps)(BarChartForm)
