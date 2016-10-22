//@flow
import React from 'react';
import FilmThumb from './FilmThumb';
import { compose, match, $ } from '../../lib/compose';

const FilmGalleryComp = compose(
	inside => (<ul className="gallary">{inside}</ul>),
	match(
		[$.empty, <li className="no-results">No Result</li>],
		[$.any, items => items.map((item, i) => <li key={`li_${i}`}>{item}</li>)]
	),
	(props:FilmGallery) => props.filmList.map(li => <FilmThumb mode="film" {...li}/>)
);

export default FilmGalleryComp;