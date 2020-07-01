import _set from 'lodash/set';
import _keyBy from 'lodash/keyBy';
import { actionTypes as chartActionTypes } from 'entities/chart';

const initialState = {
    albumsHash: {},
};

const events = (state = initialState, action: any) => {
    switch (action.type) {
        case chartActionTypes.CHART_DATA_RECEIVED: {
            const { albums } = action.payload;
            return {
                ...state,
                albumsHash: {
                    ...state.albumsHash,
                    ..._keyBy(albums, 'id'),
                }
            };
        }
        default:
            return state;
    }
};

export default events;
