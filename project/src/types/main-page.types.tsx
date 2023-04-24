export type Movie = {
  id: number;
  rating: string;
  director: string;
  starring: string[];
  name: string;
  genre: Genre;
  released: number;
  videoLink: string;
  description: string;
  runTime: number;
  ratingDescription?: MovieRatingDescription;
  scoresCount: number;
  posterImage: string;
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
