import { combineReducers } from 'redux';
import { SearchReducer } from './SearchReducer/SearchReducer';
import { FavoriteReducer } from './FavoriteReduser/FavoriteReducer';

export const RootReducer = combineReducers({
  search: SearchReducer,
  favorite: FavoriteReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
