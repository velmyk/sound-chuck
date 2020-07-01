import React from 'react';
import AlbumType from 'entities/albums/Album';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from 'common/components';
const useStyles = makeStyles((theme: Theme) => ({
    album: {
        cursor: 'pointer',
        marginBottom: theme.spacing(2),
        textDecoration: 'none',
        color: theme.palette.text.primary,
        width: 128,
    },
    albumInfo: {
        margin: 0,
    },
    coverImg: {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        transition: 'transform .3s, boxShadow .3s',

        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[5],
        },
    },
}));

type AlbumListItemProps = {
    album: AlbumType;
};

const AlbumListItem: React.FC<AlbumListItemProps> = ({ album }) => {
    const classes = useStyles();

    if (!album) {
        return null;
    }

    return (
        <Link to={`/albums/${album.id}`} className={classes.album}>
            <figure className={classes.albumInfo}>
                <img className={classes.coverImg} src={album.cover} alt={album.title} />
                <Typography align="center" component="figcaption" variant="caption" noWrap>
                    {album.title}
                </Typography>
            </figure>
        </Link>
    );
};

export default AlbumListItem;
