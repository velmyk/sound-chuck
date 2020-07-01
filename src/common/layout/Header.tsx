import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from 'common/components';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        height: 48,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        alignItems: 'center',
        padding: theme.spacing(0, 3),
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 7px',
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Logo />
            {/* <Typography component={Link} to="/" variant="h5" className={classes.logo}>
                Sound | Test
            </Typography> */}
        </header>
    );
};

export default Header;
