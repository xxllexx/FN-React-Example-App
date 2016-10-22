import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../src/components/container/App';
import Preloader from '../src/components/dumb/Preloader'
import Search from '../src/components/dumb/Search'
import FilmGallery from '../src/components/dumb/FilmGallery'
import FilmThumb from '../src/components/dumb/FilmThumb'

describe('App component test', () => {
	let FilmGalleryProps;
	beforeEach(() => {
		FilmGalleryProps = {
			filmList: [{
			    id:    "00000",
			    title: "Title",
			    eng:   "EngName",
			    thumb: "image"
	  		}]
		}
	})

	it('should render preloader', () => {
	   const app = shallow(<App />);
	   const preloader = <Preloader />;

	   expect(app.contains(preloader)).toEqual(true);
	});

	it('should render filmGallery component and search component', () => {
		const app = shallow(<App {...FilmGalleryProps}/>);
		
		expect(app.find(Search).length).toEqual(1)
		expect(app.find(FilmGallery).length).toEqual(1)
	});
})
