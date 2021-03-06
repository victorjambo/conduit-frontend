import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers';

let middlewares = [thunk]
const devMiddleware = [logger, reduxImmutableStateInvariant()]

if (process.env === 'development') {
  middlewares.concat(devMiddleware)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
