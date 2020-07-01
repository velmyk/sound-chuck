import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as tracks, sagas as tracksSagas } from 'entities/tracks';
import { reducer as albums, sagas as albumsSagas } from 'entities/albums';
import { sagas as chartSagas, reducer as chart } from 'entities/chart';

const reducer = combineReducers({
    entities: combineReducers({
        tracks,
        albums,
        chart,
    }),
});
export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
/* eslint-disable no-underscore-dangle */
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(chartSagas.default);
sagaMiddleware.run(tracksSagas.default);
sagaMiddleware.run(albumsSagas.default);
