import { combineEpics, ofType } from "redux-observable"
import { of } from "rxjs"
import { catchError, mergeMap } from "rxjs/operators"
import { actionCreators } from "."
import { ajax, apiUrl } from "../../common/services"

const { getData, updateData, setError, postDataElement } = actionCreators

const getBarChartDataEpic = actions$ =>
	actions$.pipe(
		ofType(getData.type),
		mergeMap(() =>
			ajax
				.get(apiUrl("column"))
				.pipe(
					mergeMap(({ response }) => of(updateData.create(response))),
					catchError(error => of(setError.create(error))),
				),
		),
	)
const postBarChartElementEpic = actions$ =>
	actions$.pipe(
		ofType(postDataElement.type),
		mergeMap(({ payload }) =>
			ajax
				.post(apiUrl("column"), payload)
				.pipe(
					mergeMap(() => of(getData.create())),
					catchError(error => of(setError.create(error))),
				),
		),
	)
export default combineEpics(getBarChartDataEpic, postBarChartElementEpic)
