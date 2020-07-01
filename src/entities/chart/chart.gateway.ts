import axios from 'axios';
import { fetchTracks } from 'entities/tracks/tracks.gateway';
import { fetchAlbums } from 'entities/albums/albums.gateway';

export const fetchChart = () => {
    return Promise.all([fetchTracks(), fetchAlbums()]).then(responses => {
        const [tracks, albums] = responses;
        return {
            tracks,
            albums,
        };
    });
};
