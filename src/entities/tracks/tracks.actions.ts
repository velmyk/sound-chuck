import artistsActionTypes from './tracks.actionTypes';
import TrackType from './Track';

export const tracksListReceived = (tracksList: TrackType[]) => ({
    type: artistsActionTypes.TRACKS_LIST_RECEIVED,
    payload: {
        tracksList
    }
});

export const tracksListRequest = () => ({
    type: artistsActionTypes.TRACKS_LIST_REQUEST,
});