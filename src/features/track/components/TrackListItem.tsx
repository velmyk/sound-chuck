import React, { useState } from 'react';
import TrackType from 'entities/tracks/Track';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from 'common/components';
import { PlayIcon } from 'common/icons';

const useStyles = makeStyles((theme: Theme) => ({
    playIcon: {
        margin: 'auto',
    },
    track: {
        '&:hover': {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
        },
    },
    selectedTrack: {
        borderRadius: theme.shape.borderRadius,
        border: '2px solid',
        borderColor: theme.palette.primary.main,
    },
}));

type TracksListItemProps = {
    track: TrackType;
};

const TracksListItem: React.FC<TracksListItemProps> = ({ track }) => {
    const classes = useStyles();
    const [active, setActive] = useState(false);

    return (
        <ListItem
            button
            classes={{
                root: classes.track,
                selected: classes.selectedTrack,
            }}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <ListItemAvatar>
                {active ? (
                    <Avatar className={classes.playIcon}>
                        <PlayIcon />
                    </Avatar>
                ) : (
                    <Typography align="center">{track.position}</Typography>
                )}
            </ListItemAvatar>
            <ListItemText primary={track.title} secondary={track.albumTitle} />
        </ListItem>
    );
};

export default TracksListItem;
