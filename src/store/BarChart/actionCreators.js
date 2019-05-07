import ActionCreator from "../actionCreator"

export default {
	getData: ActionCreator("BAR_CHART_GET_DATA"),
	updateData: ActionCreator("BAR_CHART_UPDATE_DATA"),
	postDataElement: ActionCreator("BAR_CHART_POST_DATA_ELEMENT"),
	setFocusedColumn: ActionCreator("SET_FOCUSED_COLUMN"),
	setError: ActionCreator("BAR_CHART_SET_ERROR"),
}
