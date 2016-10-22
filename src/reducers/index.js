import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import films from './films';


export default combineReducers({
  films,
  routing: routerReducer
});