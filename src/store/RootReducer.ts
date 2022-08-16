import { combineReducers } from 'redux';

import { FavoriteReducer } from './FavoriteReduser/FavoriteReducer';
import { SearchReducer } from './SearchReducer/SearchReducer';

export const RootReducer = combineReducers({
  search: SearchReducer,
  favorite: FavoriteReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
