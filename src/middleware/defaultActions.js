import * as APPActionTypes from '../actionTypes/appActionTypes';
import * as FilmsActions from '../actions/filmsActions';

export default store => next => action => {

	switch (action.type) {
        case APPActionTypes.APP_INIT:
            FilmsActions.getFilms()(store.dispatch, store.getState);
        break;
        default: break;
    }

    return next(action);
}
