//@flow
import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as FilmsActions from '../../actions/filmsActions';

import { match, $ } from '../../lib/compose';
import '../../styles/App.css';

import Preloader from '../dumb/Preloader';
import FilmGallery from '../dumb/FilmGallery';
import Search from '../dumb/Search';

import { searchSelector } from '../../reducers/films';

export const App = match(
	[$.noProp('filmList'), <Preloader />],
	[$.any, (props:FilmGallery) => (
		<div>
			<Search onSearch={props.onSearch} search={props.search}/>
			<FilmGallery {...props} onClick={id => props.getFilm(id)}/>
		</div>
	)]
)

const mapStateToProps = (state:AppState):FilmListProps => ({
    filmList: searchSelector(state.films.filmsList || [], state.films.search),
    search: state.films.search
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FilmsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
