import { takeLatest, call, all, put } from 'redux-saga/effects';
import * as chartGateway from './chart.gateway';
import chartActionTypes from './chart.actionTypes';
import { chartDataReceived } from './chart.actions';

export function* fetchChartSaga() {
    try {
        const chartData = yield call(chartGateway.fetchChart);
        if (chartData) {
            yield put(chartDataReceived(chartData));
        }
    } catch (e) {
        console.error({
            _error: `Failed to fetch chart data`,
            e,
        });
    }
}

function* chartSaga() {
    yield all([
        // @ts-ignore
        yield takeLatest(chartActionTypes.CHART_DATA_REQUEST, fetchChartSaga),
    ]);
}

export default chartSaga;
