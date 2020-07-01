import { createSelector } from 'reselect';
import _get from 'lodash/get';
import AlbumType from './Album';

export const albumsHashSelector = (state: any) =>
    _get(state, `entities.albums.albumsHash`, {});

export const artistsListSelector = createSelector(
    albumsHashSelector,
    (albumsHash: { [key: string]: AlbumType }) => Object.values(albumsHash),
);

export const artistsDataSelector = createSelector(
    albumsHashSelector,
    (_: any, props: any) => props.albumId,
    (albumsHash: { [key: string]: AlbumType }, artistId) => _get(albumsHash, artistId),
);