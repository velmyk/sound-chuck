import { createSelector } from 'reselect';
import _get from 'lodash/get';
import Artist from './Chart';

export const artistsHashSelector = (state: any) =>
    _get(state, `entities.artists.artistsHash`, {});

export const artistsListSelector = createSelector(
    artistsHashSelector,
    (artistsHash: { [key: string]: Artist }) => Object.values(artistsHash),
);

export const artistsDataSelector = createSelector(
    artistsHashSelector,
    (_: any, props: any) => props.artistId,
    (artistsHash: { [key: string]: Artist }, artistId) => _get(artistsHash, artistId),
);