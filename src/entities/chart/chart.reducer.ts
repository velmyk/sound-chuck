import _set from 'lodash/set';
import chartActionTypes from './chart.actionTypes';
import TrackType from 'entities/tracks/Track';
import AlbumType from 'entities/albums/Album';

const initialState = {
    tracksIds: [],
    albumsIds: [],
};

const events = (state = initialState, action: any) => {
    switch (action.type) {
        case chartActionTypes.CHART_DATA_RECEIVED: {
            const { albums, tracks } = action.payload.chartData;
            const tracksIds = tracks.map((track: TrackType) => track.id);
            const albumsIds = albums.map((album: AlbumType) => album.id);
            return {
                ...state,
                tracksIds,
                albumsIds,
            };
        }
        default:
            return state;
    }
};

export default events;
