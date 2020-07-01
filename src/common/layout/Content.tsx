import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

const MainPage = lazy(() =>
    import(/* webpackChunkName: "main" */ 'features/mainPage/components/MainPage'),
);

const AlbumPage = lazy(() =>
    import(/* webpackChunkName: "albumPage" */ 'features/album/AlbumPage'),
);

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        display: 'flex',
        minWidth: '100vw',
        overflow: 'hidden',
    },
}));

const Content = () => {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/albums/:albumId" component={AlbumPage} />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        </main>
    );
};

export default Content;
