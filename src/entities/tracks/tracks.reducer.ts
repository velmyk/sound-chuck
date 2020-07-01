import _set from 'lodash/set';
import _keyBy from 'lodash/keyBy';
import { actionTypes as chartActionTypes } from 'entities/chart';

const initialState = {
    tracksHash: {},
};

const events = (state = initialState, action: any) => {
    switch (action.type) {
        case chartActionTypes.CHART_DATA_RECEIVED: {
            const { tracks } = action.payload;
            return {
                ...state,
                tracksHash: {
                    ...state.tracksHash,
                    ..._keyBy(tracks, 'id'),
                }
            };
        }
        default:
            return state;
    }
};

export default events;
