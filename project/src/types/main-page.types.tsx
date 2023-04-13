export type Movie = {
  id: string;
  rating: string;
  director: string;
  actors: string[];
  title: string;
  genre: Genre;
  releaseDate: string;
  videoPath: string;
  description: string;
  duration: string;
  ratingDescription?: MovieRatingDescription;
  votesCount: string;
  posterUrl: string;
}

export enum MovieRatingDescription {
  BAD = 'bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERYGOOD = 'Very good',
  AWESOME = 'Awesome',
}

export enum Genre {
  ALL_GENRES = 'All genres',
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMA = 'Drama',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-fi',
  THRILLER = 'Thriller'
}

export default Movie;
