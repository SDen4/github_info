import { combineReducers } from 'redux';

import { favoriteReducer } from './FavoriteReduser/favoriteReducer';
import { searchReducer } from './SearchReducer/searchReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  favorite: favoriteReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
