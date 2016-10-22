declare type Cast = {
  id: string,
  actor: string,
  thimb: string
};

declare type Info = {
  year: string,
  country: string,
  genre: string,
  director: string,
  scenario: string,
  time: string
}

declare type Film = {
  title: string,
  originalName: string,
  description: string,
  info: Info,
  cast: Cast[]
};


declare type FilmListItem = {
  id: string,
  title: string,
  eng: string,
  thumb: string
}

declare type FilmGallery = {
    filmList: [FilmListItem],
    getFilm: () => Function,
    onSearch: () => Function,
    search: string
};

declare type FilmThumbProps = {
  thumb: string,
  title: string,
  id: string,
  eng: string,
  mode: string
}

declare type FilmListProps = {
	filmList: FilmListItem[]
}

type FilmReducer= {
    filmsList?: FilmListItem[],
    film?: Film,
    search?: string
};

declare type AppState = {
	films: FilmReducer
}

declare type FilmsAction = {
  type?: string,
  list?: FilmListItem[],
  film?: Film,
  val?: string
}