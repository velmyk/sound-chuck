import artistsActionTypes from './artists.actionTypes';
import ArtistType from './Artist';

export const artistDataRequest = (artistId: string) => ({
    type: artistsActionTypes.ARTIST_DATA_REQUEST,
    payload: {
        artistId
    }
});

export const artistDataReceived = (artistData: ArtistType) => ({
    type: artistsActionTypes.ARTIST_DATA_RECEIVED,
    payload: {
        artistData
    },
});