import _set from 'lodash/set';
import _keyBy from 'lodash/keyBy';
import { actionTypes as chartActionTypes } from 'entities/chart';
import tracksActionTypes from './tracks.actionTypes';

const initialState = {
    tracksHash: {},
};

const events = (state = initialState, action: any) => {
    switch (action.type) {
        case chartActionTypes.CHART_DATA_RECEIVED: {
            const { tracks } = action.payload.chartData;
            return {
                ...state,
                tracksHash: {
                    ...state.tracksHash,
                    ..._keyBy(tracks, 'id'),
                }
            };
        }
        case tracksActionTypes.TRACKS_LIST_RECEIVED: {
            const { tracksList } = action.payload;
            return {
                ...state,
                tracksHash: {
                    ...state.tracksHash,
                    ..._keyBy(tracksList, 'id'),
                }
            };
        }
        default:
            return state;
    }
};

export default events;
