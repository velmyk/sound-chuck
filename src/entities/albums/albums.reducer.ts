import _set from 'lodash/set';
import _keyBy from 'lodash/keyBy';
import { actionTypes as chartActionTypes } from 'entities/chart';
import albumsActionTypes from './albums.actionTypes';

const initialState = {
    albumsHash: {},
};

const events = (state = initialState, action: any) => {
    switch (action.type) {
        case chartActionTypes.CHART_DATA_RECEIVED: {
            const { albums } = action.payload.chartData;
            return {
                ...state,
                albumsHash: {
                    ...state.albumsHash,
                    ..._keyBy(albums, 'id'),
                }
            };
        }
        case albumsActionTypes.ALBUM_DATA_RECEIVED: {
            const { albumData } = action.payload;
            return {
                ...state,
                albumsHash: {
                    ...state.albumsHash,
                    [albumData.id]: albumData
                }
            };
        }
        default:
            return state;
    }
};

export default events;
