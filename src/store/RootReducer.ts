import { combineReducers } from 'redux';
import { SearchReducer } from './SearchReducer/SearchReducer';

export const RootReducer = combineReducers({
  search: SearchReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
