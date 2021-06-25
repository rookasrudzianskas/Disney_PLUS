import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
