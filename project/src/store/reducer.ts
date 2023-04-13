import { Genre } from '../types/main-page.types';
import { MOVIE_LIST } from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './action';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  movies: MOVIE_LIST,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.activeGenre = genre;
    })
});
