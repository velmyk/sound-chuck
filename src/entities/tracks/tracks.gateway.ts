import axios from 'axios';

const baseUrl = `${process.env.BASE_API_URL}/tracks`;

export const fetchTracks = () => {
    return axios.get(baseUrl).then(response => response.data);
};
