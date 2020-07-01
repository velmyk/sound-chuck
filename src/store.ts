import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagas as artistsSagas, reducer as artists } from 'entities/artists';

const reducer = combineReducers({
    entities: combineReducers({
        artists,
    }),
});
export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
/* eslint-disable no-underscore-dangle */
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(artistsSagas.default);
