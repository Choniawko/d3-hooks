import { actionCreators } from "."

const margin = { top: 20, right: 30, bottom: 40, left: 40 }

const INITIAL_STATE = {
	data: [],
	margin,
	graphWidth: 600 - margin.left - margin.right,
	graphHeight: 400 - margin.top - margin.bottom,
	focusedColumn: { height: 0, subject: "", visible: false },
	error: "",
}
export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case actionCreators.updateData.type:
			return {
				...state,
				data: payload,
				error: "",
			}
		case actionCreators.setFocusedColumn.type:
			return {
				...state,
				focusedColumn: payload,
				error: "",
			}
		case actionCreators.setError.type:
			return {
				...state,
				error: payload,
			}
		default:
			return state
	}
}
