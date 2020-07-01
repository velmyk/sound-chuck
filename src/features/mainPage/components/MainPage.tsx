import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { actions as chartActions } from 'entities/chart';
import ChartAlbums from './ChartAlbums';
import ChartTracks from './ChartTracks';

const useStyles = makeStyles((theme: Theme) => ({
    topCharts: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    title: {
        marginLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        borderBottom: `1px solid rgba(255, 255, 255, 0.4)`,
    },
}));

type MainPageProps = {
    requestCharts: Function;
};

const MainPage: React.FC<MainPageProps> = ({ requestCharts }) => {
    const classes = useStyles();

    useEffect(() => {
        requestCharts();
    }, []);

    return (
        <section className={classes.topCharts}>
            <ChartAlbums />
            <ChartTracks />
        </section>
    );
};

const mapDispatch = {
    requestCharts: chartActions.chartDataRequest,
};

export default connect(null, mapDispatch)(MainPage);
