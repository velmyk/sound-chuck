import AlbumType from 'entities/albums/Album';
import TrackType from 'entities/tracks/Track';

type ChartType = {
    tracks: TrackType[];
    albums: AlbumType[];
};

export default ChartType;
