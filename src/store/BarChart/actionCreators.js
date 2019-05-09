import ActionCreator from "../actionCreator"

export default {
	getData: ActionCreator("BAR_CHART_GET_DATA"),
	updateData: ActionCreator("BAR_CHART_UPDATE_DATA"),
	postDataElement: ActionCreator("BAR_CHART_POST_DATA_ELEMENT"),
	setFocusedColumn: ActionCreator("BAR_CHART_SET_FOCUSED_COLUMN"),
	setColumnValue: ActionCreator("BAR_CHART_SET_COLUMN_VALUE"),
	setError: ActionCreator("BAR_CHART_SET_ERROR"),
}
