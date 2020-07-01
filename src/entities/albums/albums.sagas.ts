import { takeLatest, call, all, put } from 'redux-saga/effects';
import * as albumsGateway from './albums.gateway';
import albumsActionTypes from './albums.actionTypes';
import { albumDataReceived } from './albums.actions';

export function* fetchAlbumDataSaga({ payload }: { payload: { albumId: string } }) {
    const { albumId } = payload;
    try {
        const albumData = yield call(albumsGateway.fetchAlbumData, albumId);
        if (albumData) {
            yield put(albumDataReceived(albumData));
        }
    } catch (e) {
        console.error({
            _error: `Failed to fetch albums data`,
            e,
        });
    }
}

function* albumsSaga() {
    yield all([
        // @ts-ignore
        yield takeLatest(albumsActionTypes.ALBUM_DATA_REQUEST, fetchAlbumDataSaga),
    ]);
}

export default albumsSaga;
