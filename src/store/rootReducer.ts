import { combineReducers } from '@reduxjs/toolkit';

import { favoriteReducer } from './FavoriteReduser/favoriteReducer';
import { searchReducer } from './SearchReducer/searchReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  favorite: favoriteReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
