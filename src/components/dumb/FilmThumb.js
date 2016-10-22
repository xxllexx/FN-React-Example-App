//@flow
import React from 'react';
import { Link } from 'react-router'

const FilmThumb = (props:FilmThumbProps) => (
  <Link to={`/${props.mode}/${props.id}`}>
    <div className="thumb">
      <figure style={{backgroundImage: `url(${props.thumb})`}}>
        <figcaption>
        	{props.title}
        	<em>{props.eng}</em>
    	</figcaption>
      </figure>
    </div>
  </Link>
);

export default FilmThumb;
