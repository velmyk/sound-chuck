import { takeLatest, call, all, put } from 'redux-saga/effects';
import * as artistsGateway from './artists.gateway';
import artistsActionTypes from './artists.actionTypes';
import {
    artistDataReceived,
} from './artists.actions';

export function* fetchArtistSaga({ payload }: { payload: {artistId: string } }) {
    const { artistId } = payload;
    try {
        const artistData = yield call(artistsGateway.fetchArtist, artistId);
        if (artistData) {
            yield put(artistDataReceived(artistData));
        }
    } catch (e) {
        console.error({
            _error: `Failed to fetch event ${artistId}`,
        });
    }
}

function* eventsSaga() {
    yield all([
        // @ts-ignore
        yield takeLatest(artistsActionTypes.ARTIST_DATA_REQUEST, fetchArtistSaga),
    ]);
}

export default eventsSaga;
