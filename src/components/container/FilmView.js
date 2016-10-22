import React from 'react';
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as FilmsActions from '../../actions/filmsActions';
import Preloader from '../dumb/Preloader';
import FilmThumb from '../dumb/FilmThumb';

import { match, $ } from '../../lib/compose';
import '../../styles/App.css';


import _ from 'lodash';

const FilmView = match(
	[$.noProp('film'), <Preloader />],
	[$.any, ({film}) => (
		<div className="film-view">
  			<figure className="poster">
  				<span style={{backgroundImage: `url(${film.thumb})`}}></span>
  			</figure>
  			<section>
  				<header>
      				<h1>{film.title}</h1>
	      			<h2>{film.originalName}</h2>
      			</header>
      			<article>{film.description}</article>
      			<ul className="info">
      				<li>{film.info.director}</li>
      				<li>{film.info.genre}</li>
      				<li>{film.info.time}</li>
      				<li>{film.info.year}</li>
      				<li>{film.info.country}</li>
      			</ul>
      			<ul className="gallary cast">
				    {film.cast.map((li, i) => (
				        <li key={`c_${li.id}`}>
				        	<FilmThumb mode="cast" title={li.actor} thumb={li.thumb} id={li.id}/>
				        </li>
				    ))}  
				  </ul>
  			</section>
  		</div>
	)]
)

const mapStateToProps = (state) => ({
    film: state.films.film
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FilmsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilmView);
