// import * as filmsActionTypes from '../actionTypes/filmsActionTypes';
import * as APPActionTypes from '../actionTypes/appActionTypes';
import * as FilmsActions from '../actions/filmsActions';
// import { LOCATION_CHANGE } from 'react-router-redux';

export default store => next => action => {

	switch (action.type) {
        case APPActionTypes.APP_INIT:
            FilmsActions.getFilms()(store.dispatch, store.getState);
        break;
        default: break;
    }

    return next(action);
}
