import { Movie } from '../../types/main-page.types';
import MovieCard from '../movie-card/movie-card';
import React from 'react';

type Props = {
  movies: Movie[];
}

const CatalogMovieList: React.FC<Props> = (props) => {
  const { movies } = props;

  return (
    <div className="catalog__films-list">
      {
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      }
    </div>
  );
};

export default CatalogMovieList;
