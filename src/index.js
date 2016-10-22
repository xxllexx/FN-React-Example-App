import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Router, Route, browserHistory } from 'react-router';

import * as APPActionTypes from './actionTypes/appActionTypes';
import defaultActions from './middleware/defaultActions';
import * as FilmsActions from './actions/filmsActions';

import reducers from './reducers';

import './styles/index.css';


import App from './components/container/App';
import FilmView from './components/container/FilmView';


let store = applyMiddleware(thunk, defaultActions)(createStore)(reducers);

ReactDOM.render(
    
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/film/:filmID" component={FilmView} onEnter={({params}) => store.dispatch(FilmsActions.getFilm(params.filmID))}/>
      </Router>
    </Provider>,
  document.getElementById('root')
);

document.addEventListener('DOMContentLoaded', () => {
  store.dispatch({type: APPActionTypes.APP_INIT});
})
