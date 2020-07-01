import axios from 'axios';

const baseUrl = `${process.env.BASE_API_URL}/albums`

export const fetchAlbums = () => {
    return axios.get(baseUrl).then(response => response.data);
};

export const fetchAlbumData = (albumId: string) => {
    return axios.get(`${baseUrl}/${albumId}`).then(response => response.data);
};
