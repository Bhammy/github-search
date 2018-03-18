import { createStore, applyMiddleware } from 'redux';
import { thunk } from '../util/thunk';
import rootReducer from '../reducers/rootReducer';

const middlewares = [thunk];

const configureStore = ( preloadedState = {} ) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;
