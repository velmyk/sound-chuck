import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { selectors as albumsSelectors, actions as albumsActions } from 'entities/albums';
import { selectors as tracksSelectors, actions as tracksActions } from 'entities/tracks';
import TracksList from 'features/track/components/TracksList';
import AlbumCard from './components/AlbumCard';
import AlbumType from 'entities/albums/Album';
import TrackType from 'entities/tracks/Track';

const useStyles = makeStyles((theme: Theme) => ({
    albumPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',

        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    box: {
        flex: 1,
        '&:first-child': {
            maxWidth: 200,
        },
        '&:last-child': {
            maxWidth: 600,
            marginLeft: theme.spacing(2),
        },
    },
    title: {
        marginLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        borderBottom: `1px solid rgba(255, 255, 255, 0.4)`,
    },
}));

type AlbumPageProps = {
    albumData: AlbumType;
    tracksList: TrackType[];
    requestAlbumData: Function;
    requestTracks: Function;
};

const AlbumPage: React.FC<AlbumPageProps> = ({
    albumData,
    tracksList,
    requestAlbumData,
    requestTracks,
}) => {
    const classes = useStyles();
    const { albumId } = useParams();

    useEffect(() => {
        if (!albumData) {
            requestAlbumData(albumId);
        }
    }, []);

    useEffect(() => {
        requestTracks();
    }, []);

    return (
        <section className={classes.albumPage}>
            <div className={classes.box}>
                <AlbumCard album={albumData} />
            </div>
            <div className={classes.box}>
                <TracksList tracksList={tracksList} />
            </div>
        </section>
    );
};

const mapState = (state: any, { match }: any) => ({
    albumData: albumsSelectors.albumDataSelector(state, { albumId: match.params.albumId }),
    tracksList: tracksSelectors.tracksListSelector(state),
});

const mapDispatch = {
    requestAlbumData: albumsActions.albumDataRequest,
    requestTracks: tracksActions.tracksListRequest,
};

export default connect(mapState, mapDispatch)(AlbumPage);
