//@flow
import * as filmsActionTypes from '../actionTypes/filmsActionTypes';


const initialState = {
    filmsList: undefined,
    film: undefined,
    search: '',
};

export default function films(state:FilmReducer = initialState, action:FilmsAction = {}):FilmReducer {
    switch (action.type) {
        case filmsActionTypes.FILMS_LIST: 
            return {
                ...state,
                filmsList: action.list
            }
        case filmsActionTypes.FILMS: 
            return {
                ...state,
                film: action.film
            }
        case filmsActionTypes.SEARCH:
             return {
                ...state,
                search: action.val
            }
        default:
            return state;
    }
}


export function searchSelector(list:FilmListItem[], searchString:string = ""):FilmListItem[] {
    return list.filter(f => 
        f.title.toLowerCase().startsWith(searchString.toLowerCase()) ||
        (f.eng || '').toLowerCase().startsWith(searchString.toLowerCase())
    )
}