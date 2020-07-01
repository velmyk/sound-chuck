import albumsActionTypes from './albums.actionTypes';
import albumType from './Album';

export const albumDataRequest = (albumId: string) => ({
    type: albumsActionTypes.ALBUM_DATA_REQUEST,
    payload: { albumId },
});

export const albumDataReceived = (albumData: albumType) => ({
    type: albumsActionTypes.ALBUM_DATA_RECEIVED,
    payload: {
        albumData,
    },
});
