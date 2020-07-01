import React from 'react';
import TrackType from 'entities/tracks/Track';
import { List } from 'common/components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TrackListItem from './TrackListItem';

const useStyles = makeStyles((theme: Theme) => ({
    tracksList: {
        [theme.breakpoints.up('md')]: {
            maxHeight: '80vh',
            overflowY: 'auto',
        },
    },
}));

type TracksListProps = {
    tracksList: TrackType[];
};

const TracksList: React.FC<TracksListProps> = ({ tracksList }) => {
    const classes = useStyles();
    
    if (!tracksList) {
        // TODO: show spinner
        return null;
    }

    return (
        <List className={classes.tracksList}>
            {tracksList.map((track) => (
                <TrackListItem key={track.id} track={track} />
            ))}
        </List>
    );
};

export default TracksList;
