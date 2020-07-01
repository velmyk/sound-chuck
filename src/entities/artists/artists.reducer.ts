import _set from 'lodash/set';
import artistsActionTypes from './artists.actionTypes';

const initialState = {
    artistsHash: {},
};

const events = (state = initialState, action: any) => {
    switch (action.type) {
        case artistsActionTypes.ARTIST_DATA_RECEIVED: {
            const { artistData } = action.payload;
            return {
                ...state,
                artistsHash: {
                    ..._set(state.artistsHash, artistData.id, artistData),
                },
            };
        }
        default:
            return state;
    }
};

export default events;
