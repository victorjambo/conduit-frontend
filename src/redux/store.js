import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import combinedReducers from './reducers';


// initializes the store with a state
export default  createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk, logger, reduxImmutableStateInvariant()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
