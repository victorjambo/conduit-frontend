import { combineReducers } from 'redux';
import TedReducer from './TedReducer';
import TimeReducer from './TimeReducer';
import authReducer from './authReducer';

export default combineReducers({
  TedReducer,
  TimeReducer,
  authReducer
});
