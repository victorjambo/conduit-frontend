import { combineReducers } from 'redux';
import TedReducer from './TedReducer';
import TimeReducer from './TimeReducer';

export default combineReducers({
  TedReducer,
  TimeReducer
});
