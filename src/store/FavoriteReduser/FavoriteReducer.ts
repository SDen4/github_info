import {
  FAVORITE_BTN_FLAG,
  FAVORITE_LIST_FLAG,
  FAVORITE_LIST_ADD,
  FAVORITE_LIST,
} from './constants';

import { InitialFavoriteStateType } from './types';

import { ActionsType } from './actions';

const InitialState: InitialFavoriteStateType = {
  favoriteBtnFlag: false,
  favoriteListFlag: false,
  favoriteList: [],
};

export const FavoriteReducer = (
  state = InitialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case FAVORITE_BTN_FLAG:
      return {
        ...state,
        favoriteBtnFlag: action.favoriteBtnFlag,
      };

    case FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.favoriteList,
      };

    case FAVORITE_LIST_ADD:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.favoriteList],
      };

    case FAVORITE_LIST_FLAG:
      return {
        ...state,
        favoriteListFlag: action.favoriteListFlag,
      };

    default:
      return state;
  }
};
