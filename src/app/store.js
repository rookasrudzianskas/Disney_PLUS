import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import movieReducer from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
