import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'common/components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { selectors as tracksSelectors } from 'entities/tracks';
import TrackType from 'entities/tracks/Track';
import TracksList from 'features/track/components/TracksList';

const useStyles = makeStyles((theme: Theme) => ({
    chartTracks: {
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
    tracksList: TrackType[];
};

const ChartTracks: React.FC<ChartTracksProps> = ({ tracksList }) => {
    const classes = useStyles();

    return (
        <section className={classes.chartTracks}>
            <Typography className={classes.title} variant="h2">
                Top Tracks
            </Typography>
            <TracksList tracksList={tracksList} />
        </section>
    );
};

const mapState = (state: any) => ({
    tracksList: tracksSelectors.tracksListSelector(state),
});

export default connect(mapState)(ChartTracks);
