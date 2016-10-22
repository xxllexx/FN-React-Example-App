import * as filmsActionTypes from '../actionTypes/filmsActionTypes';

async function request(link) {
	const data = await fetch(link, {
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json',
		}
	});

	const j = await data.json();
	return j;
}

export function getFilms(){
	return async (dispatch, getState) => {
		
		const j = await request('http://localhost:3001/films');

		dispatch({
			type: filmsActionTypes.FILMS_LIST,
			list: j
		});
	}
}

export function getFilm(id){
	return async (dispatch, getState) => {
		
		const j = await request('http://localhost:3001/film/' + id);

		dispatch({
			type: filmsActionTypes.FILMS,
			film: j
		});
	}
}

export function onSearch(val) {
	return {
		type: filmsActionTypes.SEARCH,
		val
	}
}