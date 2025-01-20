import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../reducers';

const store = configureStore({
  // qua va il reducer dello store di Redux
  reducer: mainReducer,
});

export default store;
