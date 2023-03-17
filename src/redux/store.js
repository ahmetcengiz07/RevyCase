import {configureStore} from '@reduxjs/toolkit';
import watchedReducer from './reducer';

const store = configureStore({
  reducer: {
    watched: watchedReducer,
  },
});
export default store;
