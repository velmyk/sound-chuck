import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from 'common/components';

const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        display: 'flex',
        alignItems: 'center',
        opacity: 0.8,
        textTransform: 'uppercase',
        margin: 'auto',
        letterSpacing: 2,
        textDecoration: 'none',
        color: '#fff',
    },
    animatedBlock: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: 22,
        borderLeft: '2px solid #fff',
        paddingLeft: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    slider: {
        width: '0%',
        height: 'inherit',
        background: '#fff',
        position: 'absolute',
        animation: '$slide 2s cubic-bezier(.74, .06, .4, .92) forwards',
        animationDelay: '1s',
        display: 'flex',
    },
    animatedText: {
        animation: '$fadeIn 2s forwards',
        animationDelay: '2.2s',
        opacity: 0,
    },
    '@keyframes slide': {
        '0%': {
            width: '0%',
            left: 0,
        },
        '50%': {
            width: '100%',
            left: 0,
        },
        '100%': {
            width: 0,
            left: '100%',
        },
    },
    '@keyframes fadeIn': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    },
}));

const Logo: React.FC = () => {
    const classes = useStyles();

    return (
        <Typography className={classes.logo} component={Link} to="/" variant="h5">
            Sound
            <div className={classes.animatedBlock}>
                <div className={classes.slider} />
                <span className={classes.animatedText}>Chuck</span>
            </div>
        </Typography>
    );
};

export default Logo;
