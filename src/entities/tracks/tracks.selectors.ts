import { createSelector } from 'reselect';
import _get from 'lodash/get';
import Track from './Track';

export const tracksHashSelector = (state: any) =>
    _get(state, `entities.tracks.tracksHash`, {});

export const tracksListSelector = createSelector(
    tracksHashSelector,
    (tracksHash: { [key: string]: Track }) => Object.values(tracksHash),
);

export const tracksDataSelector = createSelector(
    tracksHashSelector,
    (_: any, props: any) => props.artistId,
    (tracksHash: { [key: string]: Track }, artistId) => _get(tracksHash, artistId),
);