import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'common/components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { selectors as albumsSelectors } from 'entities/albums';
import TrackType from 'entities/tracks/Track';
import AlbumType from 'entities/albums/Album';
import AlbumsList from 'features/album/components/AlbumsList';

const useStyles = makeStyles((theme: Theme) => ({
    chartAlbums: {
        padding: theme.spacing(2),
        flex: 1,
    },
    title: {
        marginLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        borderBottom: `1px solid rgba(255, 255, 255, 0.4)`,
    },
}));

type ChartTracksProps = {
    albumsList: AlbumType[];
};

const ChartAlbums: React.FC<ChartTracksProps> = ({ albumsList }) => {
    const classes = useStyles();

    return (
        <section className={classes.chartAlbums}>
            <Typography className={classes.title} variant="h2">
                Top Albums
            </Typography>
            <AlbumsList albumsList={albumsList} />
        </section>
    );
};

const mapState = (state: any) => ({
    albumsList: albumsSelectors.albumsListSelector(state),
});

export default connect(mapState)(ChartAlbums);
