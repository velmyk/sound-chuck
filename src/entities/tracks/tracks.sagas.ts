import { takeLatest, call, all, put } from 'redux-saga/effects';
import * as chartGateway from './tracks.gateway';
import { tracksListReceived } from './tracks.actions';
import tracksActionTypes from './tracks.actionTypes';

export function* fetchTracksListSaga() {
    try {
        const tracksList = yield call(chartGateway.fetchTracks);
        if (tracksList) {
            yield put(tracksListReceived(tracksList));
        }
    } catch (e) {
        console.error({
            _error: `Failed to fetch tracks list`,
            e,
        });
    }
}

function* tracksSaga() {
    yield all([
        // @ts-ignore
        yield takeLatest(tracksActionTypes.TRACKS_LIST_REQUEST, fetchTracksListSaga),
    ]);
}

export default tracksSaga;
