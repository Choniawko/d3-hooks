import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { combineReducers } from "redux"
import { barChartReducer, barChartEpics } from "./BarChart"

const rootReducer = combineReducers({
	barChart: barChartReducer,
})

const epicMiddleware = createEpicMiddleware()
const rootEpic = combineEpics(barChartEpics)
export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(epicMiddleware)),
)
epicMiddleware.run(rootEpic)
