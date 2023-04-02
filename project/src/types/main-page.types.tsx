export type Movie = {
  id: string;
  rating: string;
  director: string;
  actors: string[];
  title: string;
  genre: string;
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

export default Movie;
