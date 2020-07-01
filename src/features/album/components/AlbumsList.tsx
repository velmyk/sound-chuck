import React from 'react';
import AlbumType from 'entities/albums/Album';
import { List } from 'common/components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AlbumListItem from './AlbumCard';

const useStyles = makeStyles((theme: Theme) => ({
    albumsList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

        [theme.breakpoints.up('md')]: {
            maxHeight: '80vh',
            overflowY: 'auto',
        },
    },
}));

type AlbumsListProps = {
    albumsList: AlbumType[];
};

const AlbumsList: React.FC<AlbumsListProps> = ({ albumsList }) => {
    const classes = useStyles();

    if (!albumsList) {
        // TODO: show spinner
        return null;
    }

    return (
        <List className={classes.albumsList}>
            {albumsList.map((album) => (
                <AlbumListItem key={album.id} album={album} />
            ))}
        </List>
    );
};

export default AlbumsList;
