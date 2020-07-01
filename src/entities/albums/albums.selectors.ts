import { createSelector } from 'reselect';
import _get from 'lodash/get';
import AlbumType from './Album';

export const albumsHashSelector = (state: any) =>
    _get(state, `entities.albums.albumsHash`, {});

export const albumsListSelector = createSelector(
    albumsHashSelector,
    (albumsHash: { [key: string]: AlbumType }) => Object.values(albumsHash),
);

export const albumDataSelector = createSelector(
    albumsHashSelector,
    (_: any, props: any) => props.albumId,
    (albumsHash: { [key: string]: AlbumType }, albumId) => _get(albumsHash, albumId),
);